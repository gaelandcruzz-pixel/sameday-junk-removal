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

export default function Header({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
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
