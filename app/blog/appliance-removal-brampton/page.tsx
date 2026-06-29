import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appliance Removal in Brampton & GTA | DuraJunk',
  description:
    'Old fridge, stove, washer, or dryer? Here\'s how appliance removal and disposal works in Brampton — what it costs, what to expect, and how to book same-day pickup.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Appliance Removal · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Appliance Removal in Brampton & GTA</h1>
          <p className="text-gray-400 text-lg">Old fridge, washer, stove? We pick it up same day — no truck needed on your end.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>Appliances are heavy, awkward, and can&apos;t go in the regular garbage. Getting an old fridge or washer out of your home requires a dolly, someone strong enough to help, a truck to haul it, and a licensed facility to drop it off. Or — you call us and we handle all of it.</p>

        <h2>What Appliances We Remove</h2>
        <p>We remove all major household appliances:</p>
        <ul>
          <li>Refrigerators and freezers (including those containing refrigerant)</li>
          <li>Stoves and ovens (gas and electric)</li>
          <li>Washers and dryers</li>
          <li>Dishwashers</li>
          <li>Microwaves (countertop and over-range)</li>
          <li>Air conditioners (window and portable units)</li>
          <li>Water heaters and furnaces (call for pricing)</li>
        </ul>

        <h2>What Happens to Old Appliances</h2>
        <p>Appliances can&apos;t legally go to a regular landfill in Ontario. They contain refrigerants, heavy metals, and other materials that require proper processing. When we remove an appliance, it goes to a licensed appliance recycler — not a dump.</p>
        <p>Steel, copper wiring, aluminum, and other metals are extracted and recycled. Refrigerants are captured and safely processed. This is how it&apos;s supposed to work — and it&apos;s what licensed junk removal companies do.</p>

        <h2>Do I Need to Disconnect the Appliance First?</h2>
        <p>For most appliances, yes — the appliance should be unplugged and disconnected before we arrive. Here&apos;s a quick guide:</p>
        <ul>
          <li><strong>Fridge / Freezer:</strong> Unplug, empty the contents, and defrost 24 hours before pickup if possible</li>
          <li><strong>Washer:</strong> Disconnect the water hoses from the wall (have a towel ready — there&apos;s usually residual water)</li>
          <li><strong>Dryer (electric):</strong> Unplug from the wall</li>
          <li><strong>Dryer (gas):</strong> Gas disconnection should be done by a licensed technician — we can still remove it once it&apos;s disconnected</li>
          <li><strong>Stove (gas):</strong> Same — have a technician disconnect the gas line first</li>
          <li><strong>Dishwasher:</strong> Turn off the water supply and disconnect the drain hose</li>
        </ul>
        <p>If you&apos;re not sure how to disconnect something, let us know when you book and we can advise.</p>

        <h2>What It Costs</h2>
        <p>Appliance removal pricing in Brampton depends on the size and type:</p>
        <ul>
          <li><strong>Small appliance (microwave, window AC):</strong> $50–$80</li>
          <li><strong>Medium appliance (washer, dryer, stove, dishwasher):</strong> $80–$130</li>
          <li><strong>Large appliance (fridge, chest freezer):</strong> $100–$150</li>
          <li><strong>Multiple appliances:</strong> Priced as a load — almost always cheaper per item than individual pickups</li>
        </ul>
        <p>There is an additional disposal fee for fridges and freezers containing refrigerant, as required by Ontario regulations. We&apos;ll tell you the exact price upfront.</p>

        <h2>Getting Appliances Out of Tight Spaces</h2>
        <p>Basement appliances and second-floor laundry rooms are our most common challenges. The key is having a clear path — move anything in the hallway or stairwell before we arrive. We bring dollies and equipment to handle heavy items safely without damaging your walls or floors.</p>

        <h2>Same-Day Appliance Removal in Brampton</h2>
        <p>We offer same-day and next-day appliance removal across Brampton, Mississauga, Toronto, and the GTA. Text us a photo of what needs to go and we&apos;ll give you a price and confirm a pickup time — usually within minutes.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Same-Day Appliance Removal in Brampton</h2>
          <p className="text-gray-400 mb-8">Text photos for an upfront price. We handle the disconnection check, heavy lifting, and disposal.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-[#f76a00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#ff8c3a] transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
