import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function StarField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 3.1 + Math.random() * 3.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      values[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      values[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      values[i * 3 + 2] = radius * Math.cos(phi)
    }
    return values
  }, [count])
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * .018 })
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} /></bufferGeometry><pointsMaterial color="#8be9ff" size={.025} transparent opacity={.65} sizeAttenuation depthWrite={false} /></points>
}

function Orbit({ radius, tilt, speed, color, nodes = 4 }: { radius: number; tilt: [number, number, number]; speed: number; color: string; nodes?: number }) {
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => { if (group.current) group.current.rotation.z += dt * speed })
  return <group rotation={tilt}><group ref={group}>
    <mesh><torusGeometry args={[radius, .008, 8, 180]} /><meshBasicMaterial color={color} transparent opacity={.72} /></mesh>
    <mesh><torusGeometry args={[radius, .035, 8, 180]} /><meshBasicMaterial color={color} transparent opacity={.08} /></mesh>
    {Array.from({ length: nodes }, (_, i) => { const a = (i / nodes) * Math.PI * 2; return <group key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]}><mesh><sphereGeometry args={[.065, 20, 20]} /><meshBasicMaterial color={color} /></mesh><pointLight color={color} intensity={1.5} distance={.8} /></group> })}
  </group></group>
}

function Core() {
  const rig = useRef<THREE.Group>(null)
  const crystal = useRef<THREE.Group>(null)
  const halo = useRef<THREE.Mesh>(null)
  useFrame((state, dt) => {
    if (rig.current) {
      rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, -state.pointer.y * .24, 3, dt)
      rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, state.pointer.x * .34, 3, dt)
    }
    if (crystal.current) { crystal.current.rotation.y += dt * .24; crystal.current.rotation.x += dt * .11 }
    if (halo.current) { halo.current.rotation.z += dt * .08; halo.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.2) * .025) }
  })
  return <group ref={rig}>
    <mesh ref={halo}><torusGeometry args={[1.58, .012, 8, 160]} /><meshBasicMaterial color="#67e8f9" transparent opacity={.5} /></mesh>
    <mesh><icosahedronGeometry args={[1.45, 2]} /><meshBasicMaterial color="#38bdf8" wireframe transparent opacity={.18} /></mesh>
    <group ref={crystal}>
      <mesh><octahedronGeometry args={[.92, 1]} /><meshPhysicalMaterial color="#12345a" emissive="#075985" emissiveIntensity={1.2} metalness={.72} roughness={.16} clearcoat={1} flatShading /></mesh>
      <mesh scale={.64} rotation={[.2, .35, .1]}><octahedronGeometry args={[.92, 0]} /><meshPhysicalMaterial color="#a5f3fc" emissive="#22d3ee" emissiveIntensity={1.6} metalness={.25} roughness={.12} transparent opacity={.88} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[.62, .012, 8, 100]} /><meshBasicMaterial color="#c4b5fd" transparent opacity={.9} /></mesh>
    </group>
    <Orbit radius={2.05} tilt={[1.05, .2, .1]} speed={.22} color="#22d3ee" nodes={3} />
    <Orbit radius={2.55} tilt={[.42, -.7, .2]} speed={-.17} color="#818cf8" nodes={4} />
    <Orbit radius={3.02} tilt={[-.72, .45, -.2]} speed={.12} color="#c084fc" nodes={5} />
    <mesh rotation={[.7, .4, .2]}><torusGeometry args={[3.35, .004, 4, 180]} /><meshBasicMaterial color="#67e8f9" transparent opacity={.18} /></mesh>
  </group>
}

export default function HeroScene({ reduced, mobile }: { reduced: boolean; mobile: boolean }) {
  return <Canvas camera={{ position: [0, 0, 8.4], fov: 42 }} dpr={[1, mobile ? 1.25 : 1.7]} frameloop={reduced ? 'demand' : 'always'} gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}>
    <ambientLight intensity={.65} />
    <pointLight position={[4, 3, 4]} intensity={34} color="#22d3ee" />
    <pointLight position={[-4, -2, 3]} intensity={26} color="#8b5cf6" />
    <pointLight position={[0, 4, -2]} intensity={12} color="#60a5fa" />
    <Core /><StarField count={mobile ? 100 : 260} />
  </Canvas>
}
