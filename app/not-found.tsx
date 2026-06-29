import type { Metadata } from 'next'
import { Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found | DuraJunk',
}

export default function NotFound() {
  const phone = '905-782-6332'
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[#f76a00] font-bold text-xs uppercase tracking-widest mb-4">404</p>
        <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Try one of the links below or give us a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
          <a
            href={`tel:${phone.replace(/-/g, '')}`}
            className="inline-flex items-center justify-center gap-2 bg-[#f76a00] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#ff8c3a] transition-colors"
          >
            <Phone className="w-4 h-4" /> Call {phone}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <a href="/services" className="hover:text-white transition-colors">Services</a>
          <a href="/service-areas/brampton" className="hover:text-white transition-colors">Brampton</a>
          <a href="/service-areas/mississauga" className="hover:text-white transition-colors">Mississauga</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </main>
  )
}
