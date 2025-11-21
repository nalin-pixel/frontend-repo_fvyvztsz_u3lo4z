export default function Features() {
  const features = [
    {
      title: 'Strategy & Design',
      desc: 'Brand systems, product strategy, UX/UI and design systems crafted for clarity.'
    },
    {
      title: 'Engineering',
      desc: 'Web apps, APIs, mobile and cloud-native platforms built with best practices.'
    },
    {
      title: 'AI & Automation',
      desc: 'Practical AI integrations, data pipelines, and workflow automations that scale.'
    }
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.08),transparent),radial-gradient(600px_300px_at_80%_10%,rgba(236,72,153,0.07),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-white/70">End-to-end capabilities, delivered with a minimal, modern approach.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 mb-4 opacity-90 group-hover:opacity-100" />
              <h3 className="text-white font-medium tracking-tight">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
