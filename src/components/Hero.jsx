import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(147,51,234,0.35),transparent),radial-gradient(900px_500px_at_120%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_-20%_40%,rgba(251,146,60,0.25),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80">
            Trusted Technology Partner
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Afsona Group
          </h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed">
            We build modern digital products and scalable systems for companies that want to move fast with confidence. Minimal design. Enterprise reliability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-medium px-5 py-3 hover:bg-slate-100 transition-colors">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white text-sm font-medium px-5 py-3 hover:bg-white/10 transition-colors">
              What we do
            </a>
          </div>
        </div>
      </div>

      {/* soft fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  )
}
