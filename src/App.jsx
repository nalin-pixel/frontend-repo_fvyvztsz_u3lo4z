import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle background texture */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(99,102,241,0.15),transparent),radial-gradient(900px_500px_at_-10%_10%,rgba(236,72,153,0.12),transparent),radial-gradient(900px_500px_at_110%_20%,rgba(56,189,248,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Afsona Group. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
