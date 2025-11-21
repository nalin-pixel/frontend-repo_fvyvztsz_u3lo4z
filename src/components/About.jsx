export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">About Afsona Group</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We are a multidisciplinary team focused on building elegant, high-performance digital products. Our approach blends strategy, design, and engineering into a streamlined process that keeps teams aligned and shipping.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            From early-stage concepts to enterprise platforms, we partner closely with clients to deliver measurable outcomes and long-term value.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-2xl" />
          <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900" />
        </div>
      </div>
    </section>
  )
}
