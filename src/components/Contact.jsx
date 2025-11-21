import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we will be in touch soon!')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Let’s talk</h2>
          <p className="mt-3 text-white/70">Tell us a bit about your project. We’ll get back within 1–2 business days.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required placeholder="Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30" />
          <input required type="email" placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30" />
          <input placeholder="Company" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30 md:col-span-2" />
          <textarea required placeholder="Project details" rows="5" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30 md:col-span-2" />
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-medium px-6 py-3 hover:bg-slate-100 transition-colors">
              Send message
            </button>
            <p className="text-emerald-300/80 text-sm">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
