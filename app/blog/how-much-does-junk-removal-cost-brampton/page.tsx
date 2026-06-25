import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Junk Removal Cost in Brampton? | 2026 Pricing Guide',
  description:
    'Junk removal in Brampton costs between $100–$600+ depending on volume. Get a full 2026 pricing breakdown for furniture, appliances, garage cleanouts and more.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Pricing Guide · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">How Much Does Junk Removal Cost in Brampton?</h1>
          <p className="text-gray-400 text-lg">A full breakdown of what to expect — by load size, item type, and job complexity.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>If you've never hired a junk removal company before, pricing can feel like a mystery. This guide breaks down exactly how Brampton junk removal is priced, what affects the cost, and what you can expect to pay in 2026.</p>

        <h2>How Junk Removal Pricing Works</h2>
        <p>Junk removal is priced by <strong>volume</strong> — how much space your items take up in the truck. It's not priced by weight or by the number of items. This means a single large sectional sofa costs more to remove than five small boxes, simply because it takes up more truck space.</p>
        <p>Most companies (including us) use a truck that holds roughly <strong>15–16 cubic yards</strong> of material. Your job is priced as a fraction of that truck.</p>

        <h2>2026 Junk Removal Price Ranges in Brampton</h2>
        <div className="not-prose overflow-x-auto mb-8">
          <table className="w-full border border-gray-200 rounded-xl text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-bold">Load Size</th>
                <th className="text-left p-4 font-bold">Typical Items</th>
                <th className="text-left p-4 font-bold">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Minimum load (¼ truck)', '2–3 large bags, a small sofa, a few boxes', '$100 – $175'],
                ['Half truck', 'Furniture set, appliances, garage partial cleanout', '$250 – $350'],
                ['Three-quarter truck', 'Basement or garage full cleanout', '$350 – $475'],
                ['Full truck', 'Full room or multi-room cleanout, large estate', '$500 – $650+'],
              ].map(([size, items, price]) => (
                <tr key={size} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{size}</td>
                  <td className="p-4 text-gray-600">{items}</td>
                  <td className="p-4 font-bold text-yellow-700">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What Affects the Price</h2>
        <h3>1. Volume</h3>
        <p>The biggest factor. The more truck space your items take, the more it costs. Text us photos and we can give you an accurate estimate before we arrive.</p>
        <h3>2. Weight</h3>
        <p>Heavy items like concrete, soil, or large appliances take more effort to load and cost more to dispose of. Most standard household junk isn't affected by this.</p>
        <h3>3. Accessibility</h3>
        <p>Items on the ground floor or in a garage are the easiest to remove. Basement items require carrying up stairs. Upper-floor items require more labour. These factors may add a small fee.</p>
        <h3>4. Type of material</h3>
        <p>Most household items are included in standard pricing. Some materials — like electronics, tires, and certain appliances — have additional disposal fees due to recycling regulations in Ontario.</p>
        <h3>5. Same-day vs. scheduled</h3>
        <p>Same-day junk removal is available at standard pricing when slots are open. Scheduling in advance (next-day or later in the week) sometimes gives you more flexibility on timing.</p>

        <h2>Junk Removal vs. Renting a Bin</h2>
        <p>Many people compare junk removal to renting a bin. Here's the difference:</p>
        <ul>
          <li><strong>Bin rental</strong> costs $300–$450+ for a week, plus you do all the loading yourself, and there are strict rules about what you can put in.</li>
          <li><strong>Junk removal</strong> means we do all the loading and hauling. No permit needed. No waiting a week. Done in hours.</li>
        </ul>
        <p>For most residential jobs, junk removal is faster, easier, and often comparable in total cost once you factor in your time.</p>

        <h2>How to Get an Accurate Quote</h2>
        <p>The fastest way to get a price is to <strong>text us photos</strong> of what needs to go. We'll respond with a clear, upfront price — no surprises on the day of the job.</p>
        <p>You can also fill out the quote form on our website, or call us directly at {phone}.</p>

        <h2>Frequently Asked Questions</h2>
        <h3>Is there a minimum charge for junk removal in Brampton?</h3>
        <p>Yes. Most junk removal companies, including us, have a minimum load charge (typically around $100–$150) to cover the cost of showing up and disposing of even a small amount of material.</p>
        <h3>Do you charge extra for heavy items like fridges?</h3>
        <p>Large appliances like fridges, stoves, and washers have a small additional disposal fee due to Ontario recycling regulations. We'll tell you the exact price before we start.</p>
        <h3>What payment methods do you accept?</h3>
        <p>We accept cash, e-transfer, and most major credit cards.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get an Upfront Quote Today</h2>
          <p className="text-gray-400 mb-8">Text us photos or call for a same-day junk removal quote in Brampton and the GTA.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
