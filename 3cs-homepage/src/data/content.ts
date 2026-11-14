import {
  Bot, Camera, Cloud, CreditCard, Globe, Megaphone, Search, Share2, ShieldCheck, ShoppingCart,
  type LucideIcon,
} from 'lucide-react'

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why 3CS', href: '#why' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export interface Service { title: string; text: string; icon: LucideIcon; span?: 2 | 3 }

export const SERVICES: Service[] = [
  { title: 'Responsive Web Design', icon: Globe, span: 2, text: 'Bespoke, award-winning websites designed to look exceptional and perform on every screen, from phones to desktops.' },
  { title: 'E-Commerce', icon: ShoppingCart, text: 'Robust online stores built to turn visitors into customers.' },
  { title: 'Payment Gateways', icon: CreditCard, text: 'Internet Payment Gateway (IPG) solutions for secure online payments.' },
  { title: 'Search Engine Optimization', icon: Search, text: 'Be found first. SEO that keeps your brand visible.' },
  { title: 'Digital Marketing', icon: Megaphone, text: 'Strategic campaigns, including paid advertising on Google and social media.' },
  { title: 'Social Media Marketing', icon: Share2, text: 'Content and campaigns that grow your audience.' },
  { title: 'Website Security', icon: ShieldCheck, span: 2, text: 'Corporate-grade protection for the sites and platforms your business depends on, backed by security audits.' },
  { title: 'AI Agents', icon: Bot, span: 2, text: 'Autonomous AI agents that take on real work, designed and deployed alongside your digital platforms.' },
  { title: 'Photography & Videography', icon: Camera, text: 'Professional visual storytelling, especially for travel and leisure.' },
  { title: 'Cloud Hosting & Consulting', icon: Cloud, span: 3, text: 'Cloud web hosting and expert consulting, with a team committed to supporting clients around the clock.' },
]

export const VALUES = [
  { title: 'Passion', text: 'We love building websites, and it shows in the quality.' },
  { title: 'Client Focus', text: 'Long-term partners, not one-off projects. We nurture every site as our own.' },
  { title: 'Innovation', text: 'Game-changing ideas introduced to the industry over more than two decades.' },
  { title: 'Integrity', text: 'The principle behind every decision, from hiring to client selection.' },
  { title: 'Quality', text: 'Quality is in our DNA, pushed beyond what clients ask for.' },
  { title: 'Diversity', text: 'A meritocracy of skilled professionals reflecting the diversity of Sri Lanka.' },
]

export const STATS = [
  { value: 1997, label: 'Founded', prefix: '', suffix: '', count: false },
  { value: 10, label: 'Consecutive years as Bestweb Best Web Developer (2010–2019)', prefix: '', suffix: '', count: true },
  { value: 80, label: 'Hotel & travel websites delivered', prefix: '', suffix: '+', count: true },
]

export const AWARDS = ['Bestweb', 'Topweb', 'Manthan (South Asia)', 'e-Swabhimani', 'SLT Zero One', 'Sri Lanka Tourism Awards']

export const WORK = [
  { name: 'JAT Holdings', url: 'https://www.jatholdings.com/' },
  { name: 'Sunshine Holdings', url: 'https://www.sunshineholdings.lk/' },
  { name: 'AmSafe Bridport', url: 'https://www.amsafebridport.com/' },
  { name: 'Gallery Indigena', url: 'https://www.galleryindigena.com/' },
  { name: 'CIC Holdings', url: 'https://www.cic.lk/' },
  { name: 'Hirdaramani Group', url: 'https://www.hirdaramani.lk/' },
  { name: 'Bank CIO Forum', url: 'https://www.bankcioforum.lk/' },
  { name: 'H-Connect GBS', url: 'https://www.hconnectgbs.lk/' },
  { name: 'Carson Cumberbatch', url: 'https://www.carsoncumberbatch.com/' },
]

export const CONTACT = {
  email: 'info@3cs.lk',
  phone: '+94 75 91 00 662',
  phoneHref: 'tel:+94759100662',
  whatsapp: '+94 75 91 00 666',
  whatsappHref: 'https://wa.me/94759100666',
  address: ['352, Embuldeniya Road', 'Sri Jayawardenepura Kotte 10100', 'Sri Lanka'],
  mapHref: 'https://www.google.com/maps/search/?api=1&query=352+Embuldeniya+Road+Sri+Jayawardenepura+Kotte',
}

export const SITE_LINKS = [
  { label: 'Portfolio', href: 'https://www.3cs.lk/web-design-portfolio' },
  { label: 'Clients', href: 'https://www.3cs.lk/featured-clients' },
  { label: 'Awards', href: 'https://www.3cs.lk/awards' },
  { label: 'Investors', href: 'https://www.3cs.lk/investors' },
  { label: 'Request a quote', href: 'https://www.3cs.lk/request-a-quote' },
]
