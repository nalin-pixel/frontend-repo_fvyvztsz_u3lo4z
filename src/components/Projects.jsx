export default function Projects() {
  const projects = [
    {
      title: 'Neon Commerce',
      tag: 'E‑commerce Platform',
      size: 'lg',
      desc: 'Headless storefront with real-time inventory and AI recommendations.'
    },
    {
      title: 'Flux OS',
      tag: 'Cloud Dashboard',
      size: 'tall',
      desc: 'Telemetry, alerting and orchestration for multi‑region clusters.'
    },
    {
      title: 'Signal Studio',
      tag: 'Brand & Web',
      size: 'wide',
      desc: 'Design system + marketing site with global localization.'
    },
    {
      title: 'Edge AI Kit',
      tag: 'ML Tooling',
      size: 'sm',
      desc: 'Vision models packaged for edge devices with offline sync.'
    },
    {
      title: 'Pulse Mobile',
      tag: 'iOS/Android',
      size: 'sm',
      desc: 'Cross‑platform app with secure messaging and payments.'
    },
    {
      title: 'Atlas API',
      tag: 'Platform',
      size: 'tall',
      desc: 'Unified API gateway with auth, rate limiting and analytics.'
    }
  ]

  const sizeToClasses = (size) => {
    switch (size) {
      case 'lg':
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      default:
        return '';
    }
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_15%_0%,rgba(99,102,241,0.08),transparent),radial-gradient(700px_300px_at_85%_10%,rgba(236,72,153,0.07),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Selected projects</h2>
          <p className="mt-3 text-white/70">A few recent builds across product, platform, and brand.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[180px] gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${sizeToClasses(p.size)}`}
            >
              {/* decorative gradient media */}
              <div className="absolute inset-0">
                <div className="absolute -inset-8 opacity-60 group-hover:opacity-80 transition-opacity bg-[conic-gradient(at_70%_30%,#60a5fa_0deg,#a78bfa_120deg,#f472b6_240deg,#22d3ee_360deg)] blur-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60" />
              </div>

              <div className="relative h-full p-5 flex flex-col justify-end">
                <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/80">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-sm text-white/70 line-clamp-2">{p.desc}</p>
              </div>

              {/* subtle shine on hover */}
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 [mask-image:radial-gradient(120px_60px_at_20%_0%,black,transparent)] bg-white/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
