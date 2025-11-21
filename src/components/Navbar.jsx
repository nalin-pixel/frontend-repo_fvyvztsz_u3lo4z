import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30"></div>
              <span className="text-white font-semibold tracking-tight">Afsona Group</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 text-sm font-medium px-4 py-2 hover:bg-slate-100 transition-colors">
                Get in touch
              </a>
            </nav>

            <button aria-label="Open menu" onClick={() => setOpen(true)} className="md:hidden text-white/90">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-4 top-4">
            <button aria-label="Close menu" className="p-2 rounded-full bg-white/10 text-white" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mx-4 mt-24 rounded-2xl border border-white/10 bg-slate-900/80">
            <div className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/90 text-base py-2" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-medium px-4 py-3" onClick={() => setOpen(false)}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
