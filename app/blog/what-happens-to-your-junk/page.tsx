import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Actually Happens to Your Junk After Removal? | DuraJunk',
  description:
    'We don\'t just dump everything in a landfill. Here\'s exactly how we sort, donate, recycle, and responsibly dispose of items removed across the GTA.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Eco-Friendly · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">What Actually Happens to Your Junk After Removal?</h1>
          <p className="text-gray-400 text-lg">Not everything goes to the landfill. Here&apos;s how we handle responsible disposal across the GTA.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>One of the most common questions we get is: &ldquo;Where does everything actually go?&rdquo; It&apos;s a fair question. When you hand over a truckload of furniture and old appliances, you&apos;re trusting us to handle it responsibly — and we take that seriously.</p>
        <p>Here&apos;s the honest answer: not everything goes to the same place, and a significant portion never goes to a landfill at all.</p>

        <h2>Step 1: Sorting at the Truck</h2>
        <p>The process starts during the job itself. As we load items, we&apos;re mentally (and sometimes physically) separating what&apos;s reusable from what isn&apos;t. Items that are clean, functional, and in decent shape are set aside from items that are broken, mouldy, or truly at the end of their useful life.</p>
        <p>This isn&apos;t always possible to do perfectly on-site, but it sets the stage for what happens at the facility.</p>

        <h2>Step 2: Donation</h2>
        <p>Usable furniture, household items, clothing, and working electronics are donated to local charities and organizations whenever possible. In the Brampton and Mississauga area, this includes organizations that provide furnishings for people transitioning out of shelters or setting up their first home.</p>
        <p>Items that typically get donated include:</p>
        <ul>
          <li>Sofas, chairs, and beds in good condition</li>
          <li>Dressers, tables, and shelving</li>
          <li>Kitchen items, dishes, and small appliances</li>
          <li>Clothing and linens</li>
          <li>Working electronics and small appliances</li>
        </ul>
        <p>We&apos;re not able to donate everything — items that are heavily worn, stained, broken, or infested cannot be accepted by donation centres. But when something has life left in it, we make the effort.</p>

        <h2>Step 3: Recycling</h2>
        <p>Ontario has specific programs and requirements for recycling many materials, and we follow them. This includes:</p>
        <ul>
          <li><strong>Appliances:</strong> Fridges, stoves, washers, and dryers contain metals, refrigerants, and other materials that need to be processed at registered facilities, not dumped.</li>
          <li><strong>Electronics:</strong> TVs, computers, monitors, and similar devices contain hazardous materials. We use Ontario&apos;s Electronic Stewardship program for proper recycling.</li>
          <li><strong>Metals:</strong> Steel, aluminum, and other scrap metals are sorted and sent to metal recyclers.</li>
          <li><strong>Cardboard and paper:</strong> Separated and recycled where possible.</li>
          <li><strong>Mattresses:</strong> Processed through mattress recyclers when available.</li>
        </ul>

        <h2>Step 4: Responsible Disposal</h2>
        <p>What can&apos;t be donated or recycled goes to licensed disposal facilities in accordance with Ontario regulations. We don&apos;t illegally dump — ever. Illegal dumping is a serious environmental offence and one of the reasons why hiring a licensed, insured junk removal company matters.</p>
        <p>Even what goes to disposal is handled properly: the facilities we use have environmental standards that reduce the impact of what does end up in the ground.</p>

        <h2>What We Can&apos;t Take</h2>
        <p>There are some items we&apos;re not able to remove, regardless of where they go:</p>
        <ul>
          <li>Hazardous waste (paint, solvents, chemicals, pesticides)</li>
          <li>Propane tanks and compressed gas cylinders</li>
          <li>Asbestos-containing materials</li>
          <li>Medical waste or sharps</li>
          <li>Biological waste</li>
        </ul>
        <p>For hazardous household waste, the Region of Peel and City of Toronto both have dedicated drop-off facilities. We&apos;re happy to point you in the right direction if you have items in these categories.</p>

        <h2>Why This Matters</h2>
        <p>Choosing a responsible junk removal company means less ends up in landfills, more gets a second life through donation, and materials are recycled properly rather than illegally dumped in the community.</p>
        <p>When you hire DuraJunk, you&apos;re not just clearing your space — you&apos;re making sure the stuff you no longer need is handled the right way.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Responsible Junk Removal in Brampton & GTA</h2>
          <p className="text-gray-400 mb-8">Licensed, insured, and committed to eco-friendly disposal. Call for a same-day quote.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
