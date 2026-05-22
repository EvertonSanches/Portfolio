export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">

        {/* FOTO */}

        <div className="flex justify-center md:justify-start">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-500/30 to-cyan-500/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-full border border-white/10">

              <img
                src="/perfil.jpg"
                alt="Everton Sanches"
                className="h-80 w-80 object-cover md:h-[500px] md:w-[500px]"
              />

            </div>

          </div>

        </div>

        {/* TEXTO */}

        <div>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Backend • APIs • Engenharia de Software
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Everton Sanches

            <br />

            <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Araujo Paiva Nunes
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Desenvolvedor focado em backend com Python,
            FastAPI e arquitetura de software,
            construindo aplicações web modernas,
            APIs REST e integrações fullstack.
          </p>

          {/* BOTÕES */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projetos"
              className="rounded-2xl bg-emerald-500 px-8 py-4 text-center font-semibold text-black transition hover:scale-105"
            >
              Ver Projetos
            </a>

            <a
              href="https://github.com/EvertonSanches"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>

          </div>

          {/* STATS */}

          <div className="mt-16 grid grid-cols-3 gap-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <h3 className="text-3xl font-bold text-emerald-400">
                3+
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Projetos práticos
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <h3 className="text-3xl font-bold text-cyan-400">
                FastAPI
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Backend principal
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">

              <h3 className="text-3xl font-bold text-white">
                Fullstack
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Desenvolvimento web
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}