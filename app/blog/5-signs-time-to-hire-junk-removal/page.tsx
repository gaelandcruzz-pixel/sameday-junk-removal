import type { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: '5 Signs It\'s Time to Hire a Junk Removal Service | DuraJunk',
  description:
    'Overflowing garage? Just finished a renovation? Moving? Here are the 5 signs it\'s time to stop putting it off and hire a junk removal service in Brampton.',
}

const phone = '905-782-6332'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-black text-white px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest mb-4">Tips · June 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">5 Signs It&apos;s Time to Hire a Junk Removal Service</h1>
          <p className="text-gray-400 text-lg">Most people wait longer than they should. Here&apos;s how to know when it&apos;s time to call.</p>
        </div>
      </section>

      <article className="px-4 sm:px-6 py-16 max-w-3xl mx-auto prose prose-lg prose-gray">
        <p>Clutter has a way of sneaking up on you. A few items become a pile, a pile becomes a room, and suddenly you&apos;re turning down invitations because you&apos;re embarrassed to have people over. Sound familiar? Here are five signs it&apos;s time to stop putting it off and book a junk removal pickup.</p>

        <h2>1. You Haven&apos;t Parked in Your Garage in Over a Year</h2>
        <p>The garage is the most common casualty of accumulated junk. It starts with one item that doesn&apos;t have a home inside the house, then another, and before long it&apos;s a storage unit you pay property taxes on.</p>
        <p>If you can&apos;t park your car in your garage — the thing it was literally built for — that&apos;s a clear sign. A professional garage cleanout typically takes 2–3 hours and can clear years of accumulation in a single visit.</p>

        <h2>2. You&apos;re Moving or Downsizing</h2>
        <p>Moving is the ultimate forcing function. You suddenly have to look at everything you own and decide whether it&apos;s worth paying to transport. The answer is usually no for a lot of it.</p>
        <p>Hiring a junk removal service before your movers arrive means you&apos;re not paying your moving company to haul things you&apos;re going to throw out at the other end. It also means you arrive at your new home with only the things you actually want there.</p>
        <p>If you&apos;re downsizing specifically — from a family home into something smaller — the math gets even clearer. You physically cannot bring everything. Getting professional help sorting and removing the excess makes the whole transition smoother.</p>

        <h2>3. You&apos;ve Inherited an Estate</h2>
        <p>Dealing with a loved one&apos;s belongings after they pass is one of the hardest things a family goes through. You&apos;re grieving, you&apos;re overwhelmed, and you&apos;re suddenly responsible for an entire household of possessions on top of everything else.</p>
        <p>An estate cleanout is not a job for a weekend with some garbage bags. A full house can take days of solo effort. A professional junk removal crew can clear an entire property in a fraction of the time, handling everything with care and discretion.</p>
        <p>We&apos;ve done many estate cleanouts in Brampton and the GTA, and we treat every job with the respect it deserves.</p>

        <h2>4. You Just Finished a Renovation</h2>
        <p>Renovation debris — drywall scraps, old lumber, tile, carpet, broken fixtures — is heavy, awkward, and time-consuming to dispose of legally. You can&apos;t put most of it in your regular recycling bin, and hauling multiple truck loads to the dump yourself eats an entire weekend.</p>
        <p>This is exactly what junk removal is for. One call, one visit, and all the debris is gone. You get to enjoy your freshly renovated space without the pile of rubble still sitting in the driveway.</p>

        <h2>5. Your Storage Unit Costs More Per Month Than the Stuff Inside Is Worth</h2>
        <p>Storage units in the GTA cost $100–$300+ per month. Do the math: if you&apos;ve been renting a unit for two years, you&apos;ve spent $2,400–$7,200+ storing items you haven&apos;t touched in two years.</p>
        <p>Most people are surprised to discover that 80% of what&apos;s in their storage unit isn&apos;t worth keeping. One junk removal visit empties the unit, ends the monthly cost, and often recoupes its price within the first month of savings.</p>

        <h2>You Don&apos;t Have to Do It Alone</h2>
        <p>The common thread in all five situations above is that the problem feels too big to tackle on your own — so you don&apos;t tackle it at all. That&apos;s completely normal. That&apos;s also exactly what junk removal services exist for.</p>
        <p>You don&apos;t have to lift a single item. Text us photos, get a price, and our crew handles everything. Most jobs are done in under three hours.</p>
      </article>

      <section className="bg-black text-white px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Clear It Out?</h2>
          <p className="text-gray-400 mb-8">Same-day junk removal across Brampton, Mississauga, Toronto & the GTA.</p>
          <a href={`tel:${phone.replace(/-/g, '')}`} className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors">
            <Phone className="w-5 h-5" /> Call {phone}
          </a>
        </div>
      </section>
    </main>
  )
}
