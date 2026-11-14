import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { CONTACT } from '../data/content'
import Reveal from './Reveal'

const field = 'mt-2 w-full rounded-xl border border-white/10 bg-[#07111e]/80 px-4 py-3.5 text-white placeholder:text-slate-600 transition focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/15'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = `Name: ${data.get('first')} ${data.get('last')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const items = [
    { icon: MessageCircle, label: 'WhatsApp', value: CONTACT.whatsapp, href: CONTACT.whatsappHref, external: true },
    { icon: Phone, label: 'Call our team', value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]
  return <section id="contact" className="section-space relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute -left-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[.08] blur-[120px]" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
      <div><Reveal><p className="eyebrow">05 / Contact</p></Reveal><Reveal delay={.08}><h2 className="h2 mt-5">Let's start a <span className="text-gradient">conversation.</span></h2></Reveal><Reveal delay={.16}><p className="mt-6 max-w-md text-base leading-8 text-slate-400">Have a project in mind or simply want to explore what's possible? Our team is ready to hear from you.</p></Reveal>
        <ul className="mt-10 space-y-3">{items.map((item, i) => { const Icon = item.icon; return <li key={item.label}><Reveal delay={i * .07}><a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="contact-link group flex items-center gap-4 rounded-2xl border border-white/[.08] bg-[#091322]/75 p-4 transition hover:border-cyan-200/30 hover:bg-[#0c1a2b]"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/[.07] text-cyan-200"><Icon className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-[.18em] text-slate-500">{item.label}</span><span className="mt-1 block truncate font-display text-sm text-white sm:text-base">{item.value}</span></span><ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" /></a></Reveal></li> })}
          <li><Reveal delay={.24}><a href={CONTACT.mapHref} target="_blank" rel="noopener noreferrer" className="contact-link group flex items-start gap-4 rounded-2xl border border-white/[.08] bg-[#091322]/75 p-4 transition hover:border-cyan-200/30 hover:bg-[#0c1a2b]"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/[.07] text-cyan-200"><MapPin className="h-5 w-5" /></span><address className="flex-1 not-italic"><span className="block text-[10px] uppercase tracking-[.18em] text-slate-500">Visit us</span><span className="mt-1 block font-display text-sm leading-6 text-white">{CONTACT.address.join(', ')}</span></address><ArrowUpRight className="mt-1 h-4 w-4 text-slate-600 transition group-hover:text-cyan-200" /></a></Reveal></li>
        </ul>
      </div>
      <Reveal delay={.1}><form onSubmit={onSubmit} className="contact-form rounded-[1.7rem] border border-white/10 bg-[#0a1524]/90 p-6 sm:p-9" aria-label="Send us a message"><div className="mb-8 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[.22em] text-cyan-200">Project enquiry</p><h3 className="mt-2 font-display text-2xl font-semibold text-white">Tell us about it.</h3></div><span className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.03] text-cyan-200 sm:flex"><Mail className="h-5 w-5" /></span></div>
        <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-slate-300">First name *<input name="first" required autoComplete="given-name" className={field} /></label><label className="text-xs text-slate-300">Last name *<input name="last" required autoComplete="family-name" className={field} /></label><label className="text-xs text-slate-300">Email address *<input name="email" type="email" required autoComplete="email" className={field} /></label><label className="text-xs text-slate-300">Contact number *<input name="phone" type="tel" required autoComplete="tel" className={field} /></label></div>
        <label className="mt-5 block text-xs text-slate-300">How can we help? *<textarea name="message" required rows={5} placeholder="Tell us a little about your project..." className={field} /></label><button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-4 font-display text-sm font-bold text-[#06111e] shadow-[0_0_32px_rgba(34,211,238,.15)] transition hover:brightness-110 active:scale-[.99]">Prepare message <ArrowUpRight className="h-4 w-4" /></button><p role="status" className="mt-4 min-h-5 text-xs text-cyan-200">{sent ? 'Your email app should open with your message ready to send.' : 'This form opens your email app with your message pre-filled.'}</p>
      </form></Reveal>
    </div>
  </section>
}
