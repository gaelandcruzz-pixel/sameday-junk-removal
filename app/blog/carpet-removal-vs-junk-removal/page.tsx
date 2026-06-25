import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Carpet Removal vs. Junk Removal: What\'s the Difference? | Durapest',
  description:
    'Ripping out old carpet is heavy, awkward work. Here\'s how carpet removal fits into a junk removal job — and why most Brampton homeowners hire one crew to handle both.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Carpet Removal · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Carpet Removal vs. Junk Removal: What&apos;s the Difference?</h1>
          <p className="text-gray-400 text-lg">You don&apos;t need two separate crews. Here&apos;s how it all works together.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>When homeowners in Brampton are renovating a room or clearing out a property, one question comes up often: &ldquo;Can you handle the carpet too, or is that a different company?&rdquo; It&apos;s a fair question. Carpet removal sits in an in-between space — it&apos;s not quite standard junk removal, but it&apos;s not flooring installation either.</p>
        <p>Here&apos;s how we think about it, and what to expect when carpet is part of your job.</p>

        <h2>What Is Standard Junk Removal?</h2>
        <p>Standard junk removal is loading and hauling items that are already loose and movable: furniture, appliances, boxes, bags, old electronics. The crew picks it up, carries it to the truck, and disposes of it. No tools required on your end.</p>
        <p>Carpet removal is different because the carpet is attached to the floor. It needs to be cut, pulled up, rolled, and then carried out — which is labour-intensive in a way that a couch or dresser isn&apos;t.</p>

        <h2>What Carpet Removal Actually Involves</h2>
        <p>For most residential properties, a full carpet removal job looks like this:</p>
        <ol>
          <li><strong>Cut the carpet into strips.</strong> Full-room carpet is far too heavy and awkward to roll and carry in one piece. We cut it into manageable sections — usually 3–4 foot widths across the length of the room.</li>
          <li><strong>Pull up the strips.</strong> Each section is rolled tightly, taped, and stacked for removal.</li>
          <li><strong>Remove the underpad.</strong> The foam or felt underpad underneath the carpet is usually stapled or tacked down and comes up separately.</li>
          <li><strong>Pull the tack strips (if requested).</strong> The thin wooden strips nailed around the perimeter of the room hold the carpet in place. These can be removed if you&apos;re installing hardwood or tile — but they need to come up carefully to avoid gouging the subfloor.</li>
          <li><strong>Load and haul.</strong> Everything gets loaded out in rolls. Carpet and underpad are bulky and heavy — a single room easily fills a quarter of a truck.</li>
        </ol>

        <h2>What&apos;s Usually Underneath</h2>
        <p>One of the most common surprises in carpet removal is what&apos;s underneath. In Brampton and the GTA, many homes built in the 1970s–1990s have original hardwood floors that were carpeted over at some point. Removing the carpet can reveal floors in surprisingly good condition — especially in rooms that weren&apos;t heavily trafficked.</p>
        <p>We&apos;ve done many jobs where the homeowner expected to see a rough subfloor and found refinishable hardwood instead. The photos on our website are from exactly this kind of job.</p>

        <h2>When to Combine Carpet Removal With Junk Removal</h2>
        <p>The most efficient approach — and the most common one we see — is to do both in the same visit:</p>
        <ul>
          <li>You&apos;re clearing out a room or whole property AND the carpet needs to go</li>
          <li>You&apos;re preparing a home for sale and want it completely cleared and defloored</li>
          <li>You&apos;ve just had hardwood floors installed in part of the house and need the old carpet cleared from the remaining rooms</li>
          <li>An estate cleanout that includes carpet in bad condition (pet stains, odour, heavy wear)</li>
        </ul>
        <p>Combining both services in one visit means one crew, one trip, one invoice — and it&apos;s typically less expensive than booking two separate jobs.</p>

        <h2>What It Costs</h2>
        <p>Carpet removal is typically priced per room or per square foot, added on top of any standard junk removal work. Rough estimates:</p>
        <ul>
          <li><strong>Single room (bedroom, living room):</strong> $80–$150 for carpet removal and haul-away</li>
          <li><strong>Full main floor:</strong> $250–$450 depending on layout and accessibility</li>
          <li><strong>Whole house (multi-room, stairs included):</strong> $400–$700+</li>
        </ul>
        <p>Stairs add time and difficulty — carpet on stairs is tacked individually on every step and riser. If your job includes stair carpet, let us know when you call.</p>

        <h2>What We Can&apos;t Do</h2>
        <p>Carpet removal is not flooring installation. We remove what&apos;s there — we don&apos;t install new flooring, refinish hardwood, or repair subfloor damage. If your floor needs work after the carpet comes up, you&apos;ll need a separate flooring contractor for that step. We&apos;re happy to leave the space clean and ready for the next trade.</p>

        <h2>The Short Answer</h2>
        <p>You don&apos;t need two different companies. Carpet removal and junk removal pair naturally together — and doing both in one visit is faster and more cost-effective than splitting the work. Call or text us photos of what you&apos;re working with and we&apos;ll give you an accurate price for the full job.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Carpet Removal &amp; Junk Removal in Brampton</h2>
          <p className="text-gray-400 mb-8">One crew handles everything. Text photos for an upfront price — same-day availability.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
