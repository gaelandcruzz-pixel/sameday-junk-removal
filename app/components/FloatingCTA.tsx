'use client'

import { Phone } from 'lucide-react'

export default function FloatingCTA({ phone }: { phone: string }) {
  return (
    <a
      href={`tel:${phone.replace(/-/g, '')}`}
      className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2.5 bg-[#f76a00] text-white px-5 py-3.5 rounded-full font-bold shadow-lg shadow-black/30 hover:bg-[#ff8c3a] active:scale-95 transition-all"
      aria-label={`Call ${phone}`}
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm">Call Now</span>
    </a>
  )
}
