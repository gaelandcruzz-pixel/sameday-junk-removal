import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Renovation Debris Removal in the GTA | DuraJunk',
  description:
    'Drywall, lumber, tiles, old flooring — renovation debris can\'t go in the regular bin. Here\'s how post-renovation cleanup works in Brampton and across the GTA.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Renovation Cleanup · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Renovation Debris Removal in the GTA</h1>
          <p className="text-gray-400 text-lg">The renovation is done. Now get rid of everything that came out.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>Finishing a renovation is satisfying — but there&apos;s always a pile of debris left behind. Drywall scraps, old lumber, torn-out tiles, carpet, broken fixtures, and bags of rubble that have no place in your regular garbage bin. Getting rid of it takes a truck, multiple trips, and time you probably don&apos;t have at the end of a renovation project.</p>
        <p>This is one of the most common jobs we do across Brampton and the GTA. Here&apos;s how it works.</p>

        <h2>What Counts as Renovation Debris</h2>
        <p>We remove all post-renovation waste, including:</p>
        <ul>
          <li>Drywall and plaster scraps</li>
          <li>Old lumber, trim, and baseboards</li>
          <li>Ceramic and porcelain tile</li>
          <li>Old flooring — hardwood, laminate, vinyl plank</li>
          <li>Carpet and underpad</li>
          <li>Old cabinetry and countertops</li>
          <li>Broken fixtures — sinks, toilets, bathtubs</li>
          <li>Old doors and windows (frames included)</li>
          <li>Insulation (non-asbestos)</li>
          <li>Bags and boxes of mixed renovation waste</li>
        </ul>

        <h2>What We Can&apos;t Take</h2>
        <p>There are two materials we can&apos;t remove from renovation jobs:</p>
        <ul>
          <li><strong>Asbestos-containing materials:</strong> Homes built before 1990 may have asbestos in floor tiles, ceiling tiles, insulation, or pipe wrap. If you suspect asbestos, it needs to be tested and abated by a licensed contractor before removal.</li>
          <li><strong>Lead paint:</strong> Similarly, if lead paint has been disturbed during the renovation, proper containment and disposal is required before we can haul debris from that area.</li>
        </ul>
        <p>For everything else — standard renovation waste — we&apos;re equipped to handle it.</p>

        <h2>Bin Rental vs. Junk Removal for Renovation Debris</h2>
        <p>Many homeowners default to renting a bin for renovation projects. Here&apos;s the honest comparison:</p>
        <ul>
          <li><strong>Bin rental</strong> makes sense if you&apos;re generating debris continuously over multiple weeks and need somewhere to throw things as the work progresses. You pay $350–$500+ for a week, plus you do all the loading yourself.</li>
          <li><strong>Junk removal</strong> makes more sense for a single cleanup at the end of a project. We show up, load everything, and it&apos;s gone in a few hours. No permit needed, no scheduling a bin delivery and pickup window, no weight limit surprises.</li>
        </ul>
        <p>For most residential renovations — a bathroom reno, kitchen update, or basement finish — a single junk removal visit at the end is faster and often cheaper than renting a bin.</p>

        <h2>How Much Does Renovation Debris Removal Cost?</h2>
        <p>Pricing is based on volume and weight. Renovation debris is typically heavier than household junk, so here&apos;s a rough guide:</p>
        <ul>
          <li><strong>Small bathroom reno (tiles, vanity, fixtures):</strong> $150–$250</li>
          <li><strong>Single room renovation:</strong> $200–$350</li>
          <li><strong>Kitchen gut (cabinets, counters, flooring):</strong> $300–$500</li>
          <li><strong>Full basement or multi-room reno:</strong> $450–$700+</li>
        </ul>
        <p>Heavy materials like concrete, tile, and drywall cost more per volume than lightweight debris. Text photos and we&apos;ll give you an accurate quote.</p>

        <h2>Getting Debris Out Efficiently</h2>
        <p>The fastest jobs are ones where debris is already bagged or piled in one spot — a garage, driveway, or staging area near the exit. If everything is scattered across multiple rooms and floors, the job takes longer. Even an hour of pre-stacking before the crew arrives can cut the job time (and cost) significantly.</p>
        <p>We&apos;re also equipped to go room by room if needed — so if the debris is spread through a full renovation, just tell us and we&apos;ll work through it.</p>

        <h2>Same-Day Service Across the GTA</h2>
        <p>We offer same-day and next-day renovation debris removal across Brampton, Mississauga, Toronto, Vaughan, Oakville, and the wider GTA. Call or text us photos of what needs to go — we respond fast and show up ready to work.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Post-Renovation Cleanup Across the GTA</h2>
          <p className="text-gray-400 mb-8">One call, one visit, all the debris gone. Text photos for an upfront quote.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-[#f76a00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff8c3a] transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
