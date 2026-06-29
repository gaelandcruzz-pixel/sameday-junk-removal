import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare for a Garage Cleanout in Brampton | DuraJunk',
  description:
    'A little preparation before your garage cleanout makes the job faster and cheaper. Here\'s exactly what to do before the junk removal crew arrives in Brampton.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Garage Cleanouts · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">How to Prepare for a Garage Cleanout in Brampton</h1>
          <p className="text-gray-400 text-lg">A little prep goes a long way. Here&apos;s what to do before the crew arrives.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>The garage cleanout is one of the most satisfying jobs we do — but it&apos;s also one of the most common sources of last-minute stress for homeowners. The crew arrives, and suddenly you realize you haven&apos;t decided what you&apos;re keeping, items are blocking the entrance, or you can&apos;t find the thing you definitely wanted to save.</p>
        <p>A bit of preparation the day before makes the whole job smoother, faster, and often cheaper. Here&apos;s exactly what to do.</p>

        <h2>Step 1: Do a First Pass on Your Own</h2>
        <p>Before the crew arrives, spend 30–60 minutes walking through the garage and making quick decisions. You don&apos;t need to move anything yet — just mentally categorize.</p>
        <p>Ask yourself for each item:</p>
        <ul>
          <li>Have I used this in the last two years?</li>
          <li>Would I buy this again today?</li>
          <li>Does someone else in my household want this?</li>
        </ul>
        <p>If the answer to all three is no, it&apos;s going. Don&apos;t overthink it. The item has already served its purpose — holding onto it longer doesn&apos;t change that.</p>

        <h2>Step 2: Create a Clear &ldquo;Keep&rdquo; Zone</h2>
        <p>Identify a spot — the driveway, a corner of the garage, or inside the house — where everything you&apos;re keeping will go. Move those items there before the crew arrives.</p>
        <p>This does two things: it protects items you want to keep from being accidentally removed, and it gives the crew a clear picture of what needs to go. Anything not in the &ldquo;keep&rdquo; zone is fair game.</p>

        <h2>Step 3: Clear a Path to the Back</h2>
        <p>Junk removal crews work fastest when they can move freely. If there&apos;s a path to walk through the garage — even just one person wide — items at the back can be reached and removed without having to move everything forward first.</p>
        <p>You don&apos;t need the whole garage cleared. Even creating access to the back wall cuts down the job time significantly.</p>

        <h2>Step 4: Know What You Have That&apos;s Hazardous</h2>
        <p>Garages are common storage spots for materials junk removal companies can&apos;t legally take: old paint cans, solvents, pesticides, propane tanks, and similar items. These need to go through proper hazardous waste channels.</p>
        <p>Set those items aside before the crew arrives. In Peel Region, you can drop off household hazardous waste at the Peel Environmental Centre in Brampton. We&apos;ll remind you of this if we spot anything, but identifying it beforehand keeps the job moving.</p>

        <h2>Step 5: Decide on Larger Items That Might Have Value</h2>
        <p>Old tools, bikes, sporting equipment, and workshop machinery sometimes have resale value. If you&apos;re unsure, quickly check Facebook Marketplace or Kijiji prices the day before. If it&apos;s worth selling, pull it out. If the hassle isn&apos;t worth the $30–$50 you might get for it, let it go.</p>

        <h2>Day-Of Tips</h2>
        <ul>
          <li><strong>Be home or send a trusted person.</strong> Someone needs to confirm what goes and what stays. Decisions made on the spot are slower than decisions made the night before.</li>
          <li><strong>Open the garage door before the crew arrives.</strong> Sounds obvious, but it saves five minutes on every job.</li>
          <li><strong>Have a hose or broom ready.</strong> After the junk is out, a quick sweep and rinse makes the empty space feel immediately usable.</li>
          <li><strong>Take a before photo.</strong> You&apos;ll want it when your partner doesn&apos;t believe you actually did it.</li>
        </ul>

        <h2>What We Handle That You Might Not Expect</h2>
        <p>Beyond the obvious — broken furniture, old appliances, garbage bags of junk — here are things we regularly remove from Brampton garages that homeowners are sometimes surprised we take:</p>
        <ul>
          <li>Old tires (additional disposal fee applies)</li>
          <li>Broken concrete or patio stones (small amounts)</li>
          <li>Old bikes, exercise equipment, and power tools</li>
          <li>Lumber scraps and renovation debris</li>
          <li>Broken shelving and storage units</li>
          <li>Old car parts and accessories</li>
          <li>Bagged garbage you haven&apos;t been able to get rid of</li>
        </ul>

        <h2>How Long Does a Garage Cleanout Take?</h2>
        <p>Most garage cleanouts in Brampton take 1–3 hours with our two-person crew, depending on how full it is and how much access we have. A well-prepared garage (keep pile identified, path cleared) typically takes 30–60 minutes less than an unprepared one.</p>
        <p>We&apos;ll give you an accurate time estimate when you call or text photos.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Garage Cleanout in Brampton</h2>
          <p className="text-gray-400 mb-8">Same-day and next-day availability. Text photos for an upfront price.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
