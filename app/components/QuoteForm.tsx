'use client'

import { useState } from 'react'

type Status = 'idle' | 'pending' | 'success' | 'error'

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('pending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-6 text-center">
        <p className="text-green-600 font-bold text-xl mb-2">Quote request sent!</p>
        <p className="text-gray-600">We'll be in touch within the hour.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        className="w-full border p-3 rounded-lg"
        placeholder="Your name"
        required
      />
      <input
        name="phone"
        className="w-full border p-3 rounded-lg"
        placeholder="Phone number"
        required
      />
      <input
        name="city"
        className="w-full border p-3 rounded-lg"
        placeholder="City"
        required
      />
      <textarea
        name="message"
        className="w-full border p-3 rounded-lg"
        placeholder="What needs to be removed?"
        rows={4}
        required
      />
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please call us at 905-782-6332.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'pending'}
        className="w-full bg-black text-white p-3 rounded-lg font-bold disabled:opacity-60"
      >
        {status === 'pending' ? 'Sending...' : 'Submit Quote Request'}
      </button>
    </form>
  )
}
