'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: '/services' },
  { label: 'Gallery',      href: '/#gallery' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Areas',        href: '/service-areas' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/contact' },
]

const FAMILY = [
  { label: 'Pest Control & Wildlife Removal', href: 'https://www.durapest.ca' },
  { label: 'Powerwashing',                    href: '#' },
  { label: 'Snow Removal',                    href: '#' },
  { label: 'Junk Removal',                    href: '/' },
]

export default function Header({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Durapest family bar */}
      <div className="bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 shrink-0">
            Part of the Durapest Family
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {FAMILY.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/20 text-xs hidden sm:inline">·</span>}
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[11px] text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Durapest Junk Removal"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-5 font-medium text-sm">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-yellow-600 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone.replace(/-/g, '')}`}
            className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm"
          >
            Call {phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 font-medium text-gray-700 hover:text-yellow-600 border-b border-gray-100 last:border-0 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
