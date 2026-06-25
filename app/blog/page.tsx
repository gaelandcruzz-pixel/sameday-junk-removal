import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Tips & Guides | Brampton & GTA Blog',
  description:
    'Junk removal tips, pricing guides, and cleanout advice for Brampton, Mississauga, Toronto and the GTA from Durapest Junk Removal.',
}

const POSTS = [
  {
    slug: 'how-much-does-junk-removal-cost-brampton',
    title: 'How Much Does Junk Removal Cost in Brampton?',
    date: 'June 2026',
    excerpt:
      'Junk removal in Brampton is priced by volume — how much space your items take up in our truck. Here\'s a full breakdown of what to expect.',
    tag: 'Pricing',
  },
  {
    slug: '5-signs-time-to-hire-junk-removal',
    title: '5 Signs It\'s Time to Hire a Junk Removal Service',
    date: 'June 2026',
    excerpt:
      'From overflowing garages to estate cleanouts, here are the five most common signs that it\'s time to call a professional junk removal company.',
    tag: 'Tips',
  },
  {
    slug: 'estate-cleanout-guide-brampton',
    title: 'The Complete Guide to Estate Cleanouts in Brampton',
    date: 'June 2026',
    excerpt:
      'Dealing with an estate cleanout is emotionally and physically demanding. This guide walks through what to expect and how to make the process easier.',
    tag: 'Estate Cleanouts',
  },
  {
    slug: 'what-happens-to-your-junk',
    title: 'What Actually Happens to Your Junk After Removal?',
    date: 'June 2026',
    excerpt:
      'We don\'t just dump everything in a landfill. Here\'s how we sort, donate, recycle, and responsibly dispose of items we remove across the GTA.',
    tag: 'Eco-Friendly',
  },
  {
    slug: 'garage-cleanout-tips-brampton',
    title: 'How to Prepare for a Garage Cleanout in Brampton',
    date: 'June 2026',
    excerpt:
      'A little preparation before your garage cleanout appointment makes the whole job faster and cheaper. Here\'s exactly what to do beforehand.',
    tag: 'Garage',
  },
  {
    slug: 'carpet-removal-vs-junk-removal',
    title: 'Carpet Removal vs. Junk Removal: What\'s the Difference?',
    date: 'June 2026',
    excerpt:
      'Many homeowners don\'t realize we handle carpet removal too. Learn the difference between the two services and when you need both.',
    tag: 'Carpet Removal',
  },
]

export default function BlogPage() {
  const phone = '905-782-6332'

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Durapest Junk Removal Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Junk Removal Tips & Guides</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pricing guides, cleanout tips, and local junk removal advice for Brampton, Mississauga, and the GTA.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {POSTS.map(({ slug, title, date, excerpt, tag }) => (
            <article
              key={slug}
              className="border border-gray-100 rounded-2xl p-7 hover:border-yellow-400 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 border border-yellow-100 px-3 py-1 rounded-full">
                  {tag}
                </span>
                <span className="text-xs text-gray-400">{date}</span>
              </div>
              <h2 className="font-bold text-lg mb-3 leading-snug">{title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-yellow-600">Coming soon →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Junk Removed Today?</h2>
          <p className="text-gray-400 mb-8">Same-day junk removal across Brampton, Mississauga, Toronto & the GTA.</p>
          <a
            href={`tel:${phone.replace(/-/g, '')}`}
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
