import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mattress Disposal in Brampton | Durapest Junk Removal',
  description:
    'Can\'t put a mattress in the garbage? Here\'s how mattress disposal works in Brampton and the GTA — and the fastest way to get it out of your home.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Mattress Removal · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Mattress Disposal in Brampton: What You Need to Know</h1>
          <p className="text-gray-400 text-lg">You can&apos;t put it in the garbage. Here&apos;s what to do instead.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>Mattresses are one of the most awkward items to get rid of. They&apos;re too big for regular garbage pickup, too heavy to carry alone, and most donation centres won&apos;t take them. If you&apos;ve ever stood in a bedroom doorway holding one end of a queen mattress wondering what to do next, you already know the problem.</p>
        <p>Here&apos;s how mattress disposal actually works in Brampton and the GTA, and the simplest way to handle it.</p>

        <h2>Why You Can&apos;t Just Leave It at the Curb</h2>
        <p>In Brampton and across Peel Region, mattresses are not accepted in regular garbage collection. They&apos;re too large for waste trucks to process and they take up enormous space in landfills. If you leave a mattress at the curb, you&apos;ll likely get a bylaw notice — and the mattress will still be sitting there.</p>
        <p>The Region of Peel does accept mattresses at the Peel Waste Management Centre in Brampton, but you&apos;ll need to haul it there yourself, which means a truck or van, a helper to carry it, and a trip to the facility during operating hours.</p>

        <h2>Donation — When It&apos;s Possible</h2>
        <p>Some mattresses can be donated, but the bar is high. Most charities and organizations in Brampton require mattresses to be:</p>
        <ul>
          <li>Free of stains, tears, or visible wear</li>
          <li>No older than 5–7 years</li>
          <li>Free of any sign of pests or odour</li>
        </ul>
        <p>If your mattress meets these criteria, local organizations like the Salvation Army or habitat restore sometimes accept them — call ahead to confirm before making the trip.</p>
        <p>Most mattresses being disposed of don&apos;t meet this bar. If yours is being replaced because it&apos;s worn out, stained, or old, donation isn&apos;t the right path.</p>

        <h2>Mattress Recycling in Ontario</h2>
        <p>Mattresses are actually highly recyclable — up to 90% of materials (steel springs, foam, fabric) can be recovered. Ontario has a mattress recycling program, and licensed junk removal companies use registered facilities to ensure mattresses are processed properly rather than dumped.</p>
        <p>When you hire Durapest, your mattress goes to a recycling facility, not a landfill — which is both better for the environment and required by Ontario waste disposal regulations.</p>

        <h2>The Fastest Option: Same-Day Pickup</h2>
        <p>The easiest way to get rid of a mattress in Brampton is to book a junk removal pickup. We carry it out, load it, and take it to the appropriate facility. You don&apos;t need a truck, a helper, or a trip to the dump.</p>
        <p>We remove single mattresses as well as full bedroom sets — if you&apos;re replacing a bed and want the frame, box spring, and mattress all removed at once, that&apos;s a common job for us.</p>

        <h2>How Much Does Mattress Removal Cost in Brampton?</h2>
        <ul>
          <li><strong>Single mattress:</strong> $60–$100 depending on size and location (main floor vs. basement)</li>
          <li><strong>Mattress + box spring:</strong> $80–$130</li>
          <li><strong>Full bedroom set (mattress, frame, dresser):</strong> Priced as a standard load — $150–$250 depending on volume</li>
        </ul>
        <p>Text us a photo and we&apos;ll give you an exact price before we arrive.</p>

        <h2>Getting a Mattress Out of a Tight Space</h2>
        <p>Narrow hallways, tight staircases, and small elevators are the enemy of mattress removal. A few tips:</p>
        <ul>
          <li>Stand the mattress on its side — it&apos;s easier to manoeuvre through doorways vertically</li>
          <li>Flex the mattress slightly around corners (this works for foam, not innerspring)</li>
          <li>Clear the path before the crew arrives — any furniture in the hallway slows the job</li>
        </ul>
        <p>Our two-person crew handles this every week. If it fits through the door when you moved in, we can get it out.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Mattress Pickup in Brampton — Same Day</h2>
          <p className="text-gray-400 mb-8">Text photos or call for a fast quote. We handle the heavy lifting.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-[#f64028] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f87a63] transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
