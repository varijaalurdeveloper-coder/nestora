'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Compass,
  Home,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
} from 'lucide-react'

const properties = [
  {
    name: 'Skyline Heights',
    location: 'Whitefield, Bengaluru',
    config: '3 BHK  |  1,850 sq.ft.',
    price: '₹1.45 Cr',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Greenwood Residences',
    location: 'Sarjapur Road, Bengaluru',
    config: '2 & 3 BHK  |  1,450–2,100 sq.ft.',
    price: '₹98 Lakh onwards',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Oakwood Villas',
    location: 'Devanahalli, Bengaluru',
    config: '4 BHK Villas  |  2,800 sq.ft.',
    price: '₹2.25 Cr',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
]

const locations = [
  { name: 'Whitefield', description: 'Tech-driven living with everything within reach.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sarjapur Road', description: 'Fast-growing, well-connected and full of promise.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80' },
  { name: 'Electronic City', description: 'Smart homes and smart value for modern families.', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80' },
  { name: 'North Bengaluru', description: 'The city’s next chapter, closer to the airport.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Devanahalli', description: 'Expansive villa living with long-term potential.', image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=80' },
  { name: 'Hebbal', description: 'Established neighbourhoods with effortless access.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Verified Properties', text: 'Carefully screened property options, so every viewing is worth your time.' },
  { icon: Compass, title: 'Local Market Expertise', text: 'Practical insights on Bengaluru’s most promising neighbourhoods.' },
  { icon: Target, title: 'Transparent Guidance', text: 'Clear advice, honest pricing and no confusing jargon or surprises.' },
  { icon: Sparkles, title: 'End-to-End Support', text: 'From discovery and site visits to documentation and handover.' },
]

const testimonials = [
  { quote: 'We were overwhelmed by the number of options available. Nestora understood our budget and shortlisted exactly the kind of home we were looking for.', name: 'Ananya & Rohan', location: 'Whitefield homeowners', initials: 'AR' },
  { quote: 'The advice felt genuinely personal, never pushy. We found our villa in a location we had not even considered before speaking to their team.', name: 'Vikram Menon', location: 'Devanahalli investor', initials: 'VM' },
  { quote: 'As a first-time buyer, the documentation was intimidating. They made every step feel simple and helped us buy with confidence.', name: 'Priya Sharma', location: 'Sarjapur Road buyer', initials: 'PS' },
]

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-primary">
      {label}
      <input name={name} type={type} placeholder={placeholder} className="h-12 rounded-md border border-border bg-background px-4 text-sm font-normal text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20" />
    </label>
  )
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  return submitted ? (
    <div className={`flex flex-col items-center justify-center gap-4 text-center ${compact ? 'min-h-[360px]' : 'min-h-[400px]'}`}>
      <div className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check /></div>
      <h3 className="font-serif text-2xl text-primary">We’ll be in touch shortly.</h3>
      <p className="max-w-xs text-sm leading-6 text-muted-foreground">A Nestora property expert will call you with a shortlist tailored to your brief.</p>
      <button onClick={() => setSubmitted(false)} className="text-sm font-semibold text-accent underline underline-offset-4">Send another enquiry</button>
    </div>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-4">
      <div className={compact ? 'grid gap-4 sm:grid-cols-2' : 'grid gap-4 md:grid-cols-2'}>
        <Field label="Name" name="name" placeholder="Your full name" />
        <Field label="Phone number" name="phone" type="tel" placeholder="+91 98765 43210" />
        <Field label="Property type" name="type" placeholder="Apartment, villa..." />
        <Field label="Preferred location" name="location" placeholder="Whitefield, Hebbal..." />
      </div>
      {!compact && <Field label="Budget" name="budget" placeholder="e.g. ₹1.2 Cr" />}
      {!compact && <label className="flex flex-col gap-2 text-sm font-medium text-primary">Message<textarea name="message" placeholder="Tell us a little about what you’re looking for" rows={4} className="resize-none rounded-md border border-border bg-background px-4 py-3 text-sm font-normal outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20" /></label>}
      <button type="submit" className="flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90">{compact ? 'Get Property Recommendations' : 'Request Property Recommendations'} <ArrowRight size={16} /></button>
      <p className="text-center text-xs leading-5 text-muted-foreground">{compact ? 'No spam. Our property expert will contact you shortly.' : 'Your information is kept confidential and will only be used to contact you regarding your enquiry.'}</p>
    </form>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-primary/95 text-primary-foreground backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-3 text-left" aria-label="Nestora Realty home"><span className="flex size-9 items-center justify-center rounded-full border border-accent text-accent"><Home size={17} /></span><span className="font-sans text-sm font-bold tracking-[0.2em]">NESTORA <span className="text-accent">REALTY</span></span></button>
          <div className="hidden items-center gap-7 lg:flex"><button onClick={() => scrollTo('properties')} className="nav-link">Properties</button><button onClick={() => scrollTo('why-us')} className="nav-link">Why Choose Us</button><button onClick={() => scrollTo('about')} className="nav-link">About Us</button><button onClick={() => scrollTo('testimonials')} className="nav-link">Testimonials</button><button onClick={() => scrollTo('contact')} className="nav-link">Contact</button></div>
          <button onClick={() => scrollTo('contact')} className="hidden rounded-md bg-accent px-5 py-3 text-xs font-bold text-accent-foreground transition hover:bg-accent/90 sm:block">Book a Site Visit</button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="flex flex-col gap-5 border-t border-white/10 bg-primary px-5 py-6 lg:hidden"><button onClick={() => scrollTo('properties')} className="text-left">Properties</button><button onClick={() => scrollTo('why-us')} className="text-left">Why Choose Us</button><button onClick={() => scrollTo('about')} className="text-left">About Us</button><button onClick={() => scrollTo('testimonials')} className="text-left">Testimonials</button><button onClick={() => scrollTo('contact')} className="text-left text-accent">Book a Site Visit</button></div>}
      </nav>

      <section id="top" className="relative overflow-hidden bg-primary pt-20 text-primary-foreground">
        <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="relative z-10 lg:col-span-7"><p className="eyebrow text-accent">Bengaluru’s considered property partner</p><h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Find a home you’ll love <em className="text-accent">coming back to.</em></h1><p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/70 sm:text-lg">Discover carefully selected apartments, villas and investment properties in Bengaluru with trusted guidance from property experts.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => scrollTo('contact')} className="flex h-14 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-bold text-accent-foreground hover:bg-accent/90">Book a Free Site Visit <ArrowRight size={17} /></button><button onClick={() => scrollTo('properties')} className="flex h-14 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 text-sm font-semibold hover:bg-primary-foreground/10">Explore Properties <ChevronDown size={16} /></button></div><div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-primary-foreground/60"><span>500+ Happy Families</span><span>50+ Verified Properties</span><span>Trusted Local Experts</span></div></div>
          <div className="relative z-10 lg:col-span-5 lg:col-start-8"><div className="rounded-lg bg-card p-6 text-card-foreground shadow-2xl sm:p-8"><p className="eyebrow text-accent">Start your search</p><h2 className="mt-3 font-serif text-3xl text-primary">Looking for the right property?</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Tell us what matters to you. We’ll do the shortlisting.</p><div className="mt-6"><LeadForm compact /></div></div></div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[url('/nestora-hero.png')] bg-cover bg-[center_38%] opacity-30 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2 lg:bg-center lg:opacity-35" /><div className="pointer-events-none absolute inset-0 bg-primary/75 lg:bg-gradient-to-r lg:from-primary lg:via-primary/90 lg:to-transparent lg:w-3/4" />
      </section>

      <section className="border-b border-border bg-card"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 lg:grid-cols-4 lg:px-8"><div className="stat"><span className="font-serif text-3xl text-primary">500+</span><span>Families helped</span></div><div className="stat"><span className="font-serif text-3xl text-primary">50+</span><span>Verified properties</span></div><div className="stat"><span className="font-serif text-3xl text-primary">10+</span><span>Years experience</span></div><div className="stat"><span className="font-serif text-3xl text-primary">4.9/5</span><span>Client rating</span></div></div></section>

      <section id="properties" className="section-shell"><div className="section-heading"><div><p className="eyebrow text-accent">The Nestora edit</p><h2>Find a property that fits your life.</h2></div><p>Our handpicked selection of verified properties in Bengaluru’s most sought-after locations.</p></div><div className="grid gap-6 md:grid-cols-3">{properties.map((property) => <article key={property.name} className="group overflow-hidden rounded-lg border border-border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><img src={property.image} alt={`${property.name} sample property`} className="size-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"><ShieldCheck size={12} className="text-accent" /> Verified property</span></div><div className="flex flex-col gap-4 p-5"><div><h3 className="font-serif text-2xl text-primary">{property.name}</h3><p className="mt-1 text-sm text-muted-foreground">{property.location}</p></div><div className="flex items-center justify-between border-y border-border py-3 text-xs text-muted-foreground"><span>{property.config}</span><span>Sample listing</span></div><div className="flex items-center justify-between"><span className="font-serif text-xl text-primary">{property.price}</span><button onClick={() => scrollTo('contact')} className="flex items-center gap-1 text-xs font-bold text-accent">View details <ArrowRight size={14} /></button></div></div></article>)}</div></section>

      <section className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-24"><div className="lg:col-span-5"><p className="eyebrow text-accent">A better way to begin</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Not sure which property is right for you?</h2><p className="mt-5 max-w-md leading-7 text-primary-foreground/70">Tell us what you’re looking for and receive a personalized shortlist based on your budget, preferred location and lifestyle.</p><div className="mt-8 flex flex-wrap gap-4 text-xs text-primary-foreground/70"><span>Free consultation</span><span>•</span><span>No obligation</span><span>•</span><span>Expert guidance</span></div></div><div className="rounded-lg bg-card p-6 text-card-foreground sm:p-8 lg:col-span-6 lg:col-start-7"><LeadForm /></div></div></section>

      <section id="why-us" className="section-shell"><div className="section-heading"><div><p className="eyebrow text-accent">Why Nestora</p><h2>Real estate guidance without the guesswork.</h2></div><p>Property decisions are personal. Our role is to make them feel clear, considered and confident.</p></div><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, text }) => <div key={title} className="bg-card p-7"><Icon className="text-accent" size={25} strokeWidth={1.5} /><h3 className="mt-7 font-serif text-2xl text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>

      <section className="bg-secondary/60"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow text-accent">Where to look</p><h2>Explore Bengaluru’s most promising locations.</h2></div><p>Neighbourhood intelligence for the way you want to live now—and later.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{locations.map((location) => <article key={location.name} className="group relative min-h-72 overflow-hidden rounded-lg"><img src={location.image} alt={`${location.name} neighbourhood`} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" /><div className="relative flex h-full min-h-72 flex-col justify-end p-6 text-primary-foreground"><h3 className="font-serif text-2xl">{location.name}</h3><p className="mt-2 max-w-xs text-sm leading-5 text-primary-foreground/75">{location.description}</p><button onClick={() => scrollTo('properties')} className="mt-4 flex w-fit items-center gap-2 text-xs font-bold text-accent">Explore properties <ArrowRight size={14} /></button></div></article>)}</div></div></section>

      <section id="about" className="section-shell"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow text-accent">How it works</p><h2 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">From “just looking” to “this feels right.”</h2></div><div className="mt-14 grid gap-8 md:grid-cols-3">{[['01','Tell us what you need','Share your budget, preferred location and property requirements.'],['02','Get matched with properties','Our experts shortlist properties that fit your requirements.'],['03','Visit & decide','Schedule site visits and make your decision with confidence.']].map(([number,title,text]) => <div key={number} className="relative border-t border-border pt-6"><span className="font-mono text-sm text-accent">{number}</span><h3 className="mt-5 font-serif text-2xl text-primary">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>

      <section id="testimonials" className="bg-secondary/60"><div className="section-shell"><div className="text-center"><p className="eyebrow text-accent">Client notes</p><h2 className="mt-4 font-serif text-4xl text-primary">What our clients say.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.name} className="rounded-lg border border-border bg-card p-7"><div className="flex gap-1 text-accent">{[1,2,3,4,5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div><blockquote className="mt-6 font-serif text-xl leading-8 text-primary">“{testimonial.quote}”</blockquote><figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5"><span className="flex size-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{testimonial.initials}</span><span><strong className="block text-sm text-primary">{testimonial.name}</strong><span className="text-xs text-muted-foreground">{testimonial.location}</span></span></figcaption></figure>)}</div></div></section>

      <section className="bg-accent text-accent-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:flex-row sm:items-center lg:px-8"><div><h2 className="font-serif text-4xl leading-tight sm:text-5xl">Your next home could be<br className="hidden sm:block" /> closer than you think.</h2><p className="mt-4 text-sm text-accent-foreground/75">Let’s find a property that fits your budget, lifestyle and future plans.</p></div><div className="flex flex-col gap-3 sm:items-end"><button onClick={() => scrollTo('contact')} className="flex h-13 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-bold text-primary-foreground hover:bg-primary/90">Book a Free Consultation <ArrowRight size={16} /></button><button className="flex items-center gap-2 text-sm font-semibold"><MessageCircle size={16} /> WhatsApp a property expert</button><span className="text-xs text-accent-foreground/60">Free consultation • No commitment required</span></div></div></section>

      <section id="contact" className="section-shell"><div className="grid gap-12 lg:grid-cols-5"><div className="lg:col-span-2"><p className="eyebrow text-accent">Let’s talk property</p><h2 className="mt-4 font-serif text-4xl leading-tight text-primary sm:text-5xl">Let’s find your ideal property.</h2><p className="mt-5 leading-7 text-muted-foreground">Whether you’re buying your first home or building your next investment, a thoughtful conversation is a good place to start.</p><div className="mt-9 flex flex-col gap-4 text-sm text-primary"><a href="tel:+918012345678" className="flex items-center gap-3"><Phone size={17} className="text-accent" /> +91 80 1234 5678</a><a href="mailto:hello@nestorarealty.in" className="flex items-center gap-3"><MessageCircle size={17} className="text-accent" /> hello@nestorarealty.in</a><span className="flex items-center gap-3"><Building2 size={17} className="text-accent" /> Bengaluru, Karnataka</span></div></div><div className="lg:col-span-3"><LeadForm /></div></div></section>

      <footer className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-12 lg:px-8"><div className="lg:col-span-5"><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full border border-accent text-accent"><Home size={17} /></span><span className="text-sm font-bold tracking-[0.2em]">NESTORA <span className="text-accent">REALTY</span></span></div><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/60">Helping Bengaluru find better properties—with clarity, care and local expertise.</p><div className="mt-7 flex gap-3"><a href="#" aria-label="Social profile" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 text-xs font-bold hover:border-accent hover:text-accent">IG</a><a href="#" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 text-xs font-bold hover:border-accent hover:text-accent">in</a></div></div><div className="lg:col-span-2 lg:col-start-8"><h3 className="text-xs font-bold uppercase tracking-widest text-accent">Explore</h3><div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/60"><button onClick={() => scrollTo('properties')} className="text-left hover:text-accent">Properties</button><button onClick={() => scrollTo('why-us')} className="text-left hover:text-accent">Why choose us</button><button onClick={() => scrollTo('about')} className="text-left hover:text-accent">About us</button></div></div><div className="lg:col-span-2"><h3 className="text-xs font-bold uppercase tracking-widest text-accent">Contact</h3><div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/60"><a href="tel:+918012345678">+91 80 1234 5678</a><a href="mailto:hello@nestorarealty.in">hello@nestorarealty.in</a><span>Bengaluru, Karnataka</span></div></div></div><div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/40 sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Nestora Realty. Sample project.</span><span>Privacy · Terms</span></div></div></footer>
    </main>
  )
}
