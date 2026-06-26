import type { Metadata } from 'next'
import Image from 'next/image'
import QuoteForm from './components/QuoteForm'
import {
  Sofa, Refrigerator, Warehouse, Home as HomeIcon, Package,
  Archive, Layers, HardHat, Briefcase,
  Star, Phone, Shield, Clock, Leaf, MapPin, CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Brampton & GTA | Same-Day Service',
  description:
    'Same-day junk removal in Brampton, Mississauga, Toronto & the GTA. We remove furniture, appliances, garage junk, estate cleanouts and renovation debris. Call 905-782-6332.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junk removal in Brampton is priced by volume — how much space your items take up in our truck. We give you a clear, upfront price before any work begins. There are no hidden fees. Text us photos for a fast quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day junk removal in Brampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer same-day and next-day junk removal throughout Brampton and the GTA. Call or text 905-782-6332 in the morning and we can often be there the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What items do you remove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We remove almost anything: furniture, appliances, mattresses, carpets, electronics, garage junk, renovation debris, yard waste, and more. We handle full garage cleanouts, basement cleanouts, storage unit cleanouts, and estate cleanouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We serve Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton, Etobicoke, and North York. If you're in the GTA, call us and we'll confirm availability.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a junk removal quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The fastest way is to call or text photos to 905-782-6332. You can also fill out the quote form on our website. We'll respond quickly with a clear price.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you recycle or donate items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We make every effort to donate usable items to local charities and recycle materials responsibly. Not everything ends up in landfill.',
      },
    },
  ],
}

const SERVICES = [
  { icon: Sofa,        title: 'Furniture Removal',       desc: 'Sofas, mattresses, dressers, bed frames — any size, any floor.' },
  { icon: Refrigerator,title: 'Appliance Removal',       desc: 'Fridges, stoves, washers, dryers, freezers, and more.' },
  { icon: Warehouse,   title: 'Garage Cleanouts',        desc: 'Years of accumulated junk cleared out in a single visit.' },
  { icon: HomeIcon,    title: 'Basement Cleanouts',      desc: 'Full basement cleared, loaded, and hauled away.' },
  { icon: Package,     title: 'Estate Cleanouts',        desc: 'Respectful, efficient whole-home estate cleanouts.' },
  { icon: Archive,     title: 'Storage Unit Cleanouts',  desc: 'We empty your unit so you stop paying monthly rent.' },
  { icon: Layers,      title: 'Carpet Removal',          desc: 'Rip-up and full haul-away for any room or property.' },
  { icon: HardHat,     title: 'Renovation Debris',       desc: 'Drywall, lumber, tiles, and construction waste removed.' },
  { icon: Briefcase,   title: 'Office Junk Removal',     desc: 'Desks, filing cabinets, electronics, and more.' },
]

const TESTIMONIALS = [
  {
    name: 'Michael T.',
    location: 'Springdale, Brampton',
    service: 'Garage Cleanout',
    text: 'Called in the morning, they were at my house by noon. Cleared out my entire garage in under 2 hours. Fair price, no surprises. Would absolutely use again.',
  },
  {
    name: 'Sarah K.',
    location: 'Erin Mills, Mississauga',
    service: 'Estate Cleanout',
    text: 'We needed an estate cleanout done quickly after losing a family member. They were respectful, efficient, and took care of everything. Highly recommend.',
  },
  {
    name: 'David R.',
    location: 'North York, Toronto',
    service: 'Appliance Removal',
    text: 'Needed an old fridge and washer removed same day. They came within a few hours, got it done fast, and the price was exactly what they quoted. Great service.',
  },
]

const BEFORE_AFTER = [
  {
    label: 'Living Area',
    sublabel: 'Sofas, shelving, lamps & contents removed',
    before: '/images/jobs/IMG_6957.jpeg',
    after: '/images/jobs/IMG_6950.jpeg',
  },
  {
    label: 'Bedroom',
    sublabel: 'Bed, dresser, wardrobe & belongings cleared',
    before: '/images/jobs/IMG_6925.jpeg',
    after: '/images/jobs/IMG_6997.jpeg',
  },
  {
    label: 'Carpet Removal',
    sublabel: 'Old carpet torn out, original hardwood revealed',
    before: '/images/jobs/IMG_6958.jpeg',
    after: '/images/jobs/IMG_6994.jpeg',
  },
]

const PROJECTS = [
  {
    image: '/images/jobs/IMG_6958.jpeg',
    title: 'Step 1 — Carpet Still Down',
    desc: 'Old carpet covering every room — removal starts here.',
    tag: '1. Before',
  },
  {
    image: '/images/jobs/IMG_6954.jpeg',
    title: 'Step 2 — Furniture Removed',
    desc: 'All furniture bagged and staged. Carpet still on the floor, ready for next phase.',
    tag: '2. During',
  },
  {
    image: '/images/jobs/IMG_6993.jpeg',
    title: 'Step 3 — Carpet Being Torn Out',
    desc: 'Carpet rolled up and actively pulled from the floor, hardwood emerging underneath.',
    tag: '3. Carpet Out',
  },
  {
    image: '/images/jobs/IMG_6994.jpeg',
    title: 'Step 4 — Original Floor Revealed',
    desc: 'Original hardwood parquet floor uncovered — property left completely clear.',
    tag: '4. After',
  },
]

export default function Home() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: '92vh' }}>
        {/* subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 h-full grid md:grid-cols-2 gap-0 items-center"
          style={{ minHeight: '92vh' }}
        >
          {/* Left: content */}
          <div className="py-16 md:py-0 z-10 flex flex-col justify-center">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 w-fit">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">Brampton&apos;s Top-Rated Junk Removal</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02] mb-6 tracking-tight">
              We Haul It.<br />
              <span className="text-yellow-400">Today.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Furniture, appliances, garage cleanouts, estate cleanouts, renovation
              debris — send photos and get a junk removal quote in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href={`tel:${phone.replace(/-/g, '')}`}
                className="group inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-yellow-300 active:scale-[0.98] transition-all shadow-lg shadow-yellow-400/20"
              >
                <Phone className="w-5 h-5" />
                Call {phone}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-white/10 active:scale-[0.98] transition-all"
              >
                Get Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { value: '500+', label: 'Jobs Completed' },
                { value: '8', label: 'Cities Served' },
                { value: '5★', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-white font-bold text-2xl leading-tight">{value}</p>
                  <p className="text-gray-500">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-5 leading-relaxed max-w-sm">
              Licensed by the Ontario Ministry of the Environment — Reg.&nbsp;63/09. Humane methods, fully insured.
            </p>
          </div>

          {/* Right: hero photo */}
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
            <Image
              src="/images/jobs/IMG_6932.jpeg"
              alt="Estate cleanout Brampton — packed living room before junk removal"
              fill
              className="object-cover opacity-60"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────── */}
      <section className="bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield,       label: 'MOE Licensed — Reg. 63/09' },
              { icon: Clock,        label: 'Same-Day Available' },
              { icon: CheckCircle2, label: 'Upfront Pricing' },
              { icon: Leaf,         label: 'Eco-Friendly Disposal' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2.5 text-white/70 py-1">
                <Icon className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">What We Remove</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Full-Service Junk Removal in Brampton & GTA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className="w-11 h-11 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition-colors">
                  <Icon className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="bg-zinc-950 text-white px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How Junk Removal Works</h2>
            <div className="space-y-10">
              {[
                { step: '01', title: 'Send Photos', body: 'Text us photos of what needs to go. The more detail, the faster your junk removal quote.' },
                { step: '02', title: 'Get a Price', body: 'We send you a clear, upfront price — no hidden fees, no surprises on pickup day.' },
                { step: '03', title: 'We Remove It', body: 'Our Brampton junk removal crew shows up, loads everything, and disposes of it responsibly.' },
              ].map(({ step, title, body }, i) => (
                <div key={step} className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Why Brampton Chooses Us</h3>
            <ul className="space-y-4 mb-8">
              {[
                'Same-day and next-day junk removal availability',
                'Two-person crew handles all heavy lifting',
                'Upfront pricing — no surprises',
                'Responsible disposal and recycling',
                'Serving Brampton, Mississauga, Toronto & more',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-black px-6 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="testimonials" className="px-4 sm:px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, location, service, text }) => (
              <div key={name} className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-yellow-200 transition-all duration-200">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{text}&rdquo;</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{name}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {location}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-yellow-600 font-medium bg-yellow-50 border border-yellow-100 px-2 py-1 rounded-full">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Projects ──────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-3">Real Jobs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">One Job, Start to Finish</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Full estate cleanout — furniture removed, carpet torn out in every room, original hardwood revealed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {PROJECTS.map(({ image, title, desc, tag }) => (
              <div key={title} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/40 transition-all duration-200">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Before / After gallery ───────────────────────────── */}
      <section id="gallery" className="bg-gray-50 px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-bold">Before & After</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">
              We transform cluttered, unusable spaces into clean, empty rooms — in a single visit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {BEFORE_AFTER.map(({ label, sublabel, before, after }) => (
              <div key={label} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Split image */}
                <div className="relative h-56">
                  {/* Before half */}
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <Image
                      src={before}
                      alt={`${label} before junk removal`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 17vw"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                  </div>
                  {/* After half */}
                  <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                    <Image
                      src={after}
                      alt={`${label} after junk removal`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 17vw"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  {/* Divider */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-yellow-400 z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center shadow-md z-20">
                    <span className="text-black text-xs font-bold">↔</span>
                  </div>
                  {/* Labels */}
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-bold uppercase px-2 py-1 rounded z-10">Before</span>
                  <span className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold uppercase px-2 py-1 rounded z-10">After</span>
                </div>

                <div className="p-5">
                  <p className="font-bold text-sm">{label}</p>
                  <p className="text-gray-500 text-xs mt-1">{sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote form ───────────────────────────────────────── */}
      <section id="quote" className="bg-black px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Free Quote</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Junk Removal Quote Today
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Fill out the form and we&apos;ll get back to you fast with a clear price.
              Or call / text {phone} with photos — fastest response.
            </p>
            <div className="space-y-4">
              {[
                { icon: Clock, text: 'Same-day and next-day slots available' },
                { icon: CheckCircle2, text: 'Upfront pricing — no hidden fees' },
                { icon: Shield, text: 'Licensed, insured, and local' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Icon className="w-4 h-4 text-yellow-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="mt-8 inline-flex items-center gap-2 text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phone}
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── Service areas ────────────────────────────────────── */}
      <section id="areas" className="px-4 sm:px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Junk Removal Across the GTA</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { city: 'Brampton',    href: '/service-areas/brampton' },
              { city: 'Mississauga', href: '/service-areas/mississauga' },
              { city: 'Toronto',     href: '/service-areas/toronto' },
              { city: 'Vaughan',     href: '/service-areas/vaughan' },
              { city: 'Oakville',    href: '/service-areas/oakville' },
              { city: 'Milton',      href: '/service-areas/milton' },
              { city: 'Etobicoke',   href: '/service-areas/etobicoke' },
              { city: 'North York',  href: '/service-areas/north-york' },
            ].map(({ city, href }) => (
              <a
                key={city}
                href={href}
                className="group flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 font-bold text-sm hover:border-yellow-400 hover:bg-yellow-50 transition-all"
              >
                {city}
                <MapPin className="w-3.5 h-3.5 text-gray-300 group-hover:text-yellow-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 px-4 sm:px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Junk Removal Questions Answered</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How much does junk removal cost in Brampton?',
                a: 'Pricing is based on volume — how much space your items take up in our truck. We give you a clear, upfront price before any work begins. Text us photos for a fast quote.',
              },
              {
                q: 'Do you offer same-day junk removal?',
                a: 'Yes. We offer same-day and next-day junk removal throughout Brampton and the GTA. Call or text 905-782-6332 in the morning and we can often be there the same day.',
              },
              {
                q: 'What items do you remove?',
                a: 'Almost anything: furniture, appliances, mattresses, carpets, electronics, garage junk, renovation debris, and more. We also do full garage cleanouts, basement cleanouts, storage unit cleanouts, and estate cleanouts.',
              },
              {
                q: 'What areas do you serve?',
                a: "We serve Brampton, Mississauga, Toronto, Vaughan, Oakville, Milton, Etobicoke, and North York. If you're in the GTA, call us and we'll confirm.",
              },
              {
                q: 'Do you recycle or donate items?',
                a: 'Yes. We donate usable items to local charities and recycle materials wherever possible. Not everything goes to landfill.',
              },
              {
                q: 'How do I book a junk removal pickup?',
                a: "Call or text photos to 905-782-6332 or use the quote form on this page. We'll respond fast with a price and available times.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Durapest family ──────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100 px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Durapest logo"
              width={140}
              height={56}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2">Part of the Durapest Family</p>
            <h3 className="text-xl font-bold mb-2">Also need Wildlife Removal or Pest Control?</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              Durapest Junk Removal is a sister company of Durapest Wildlife Removal &amp; Pest Control — serving the GTA with the same licensed, insured, and humane approach since day one.
            </p>
          </div>
          <a
            href="https://www.durapest.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 border border-gray-200 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:border-yellow-400 hover:bg-yellow-50 transition-all whitespace-nowrap"
          >
            Visit durapest.ca →
          </a>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="relative bg-black text-white overflow-hidden px-4 sm:px-6 py-24">
        {/* Yellow accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Ready to clear it out?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Need Junk Removed Today?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Call or text {phone} — we cover all of Brampton and the GTA with
              same-day junk removal.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 active:scale-[0.98] transition-all shadow-lg shadow-yellow-400/10 w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call {phone}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 active:scale-[0.98] transition-all w-full md:w-auto"
            >
              Request a Quote Online
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
