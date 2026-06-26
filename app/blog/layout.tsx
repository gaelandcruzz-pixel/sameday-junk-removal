import { Phone } from 'lucide-react'

const phone = '905-782-6332'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="sticky bottom-0 z-40 bg-black border-t border-white/10 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <p className="text-white text-sm font-medium hidden sm:block">
            Same-day junk removal across Brampton & the GTA
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${phone.replace(/-/g, '')}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#f64028] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#f87a63] transition-colors"
            >
              <Phone className="w-4 h-4" /> Call {phone}
            </a>
            <a
              href="/contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center border border-white/25 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
