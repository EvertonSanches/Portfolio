export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <span className="text-sm uppercase tracking-widest text-emerald-400">
              Contato
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Vamos construir algo juntos.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Atualmente focado em desenvolvimento
              backend com Python e FastAPI,
              integração de APIs e engenharia
              de software.
            </p>

          </div>

          <div className="flex flex-col gap-4">

            {/* EMAIL */}

            <a
              href="mailto:evertonsanches3@outlook.com"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/30 hover:bg-emerald-500/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6m-18 8h18V8l-9 6-9-6v8z"
                  />
                </svg>

              </div>

              <div>

                <p className="font-medium">
                  E-mail
                </p>

                <p className="text-zinc-400">
                  evertonsanches3@outlook.com
                </p>

              </div>

            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/EvertonSanches"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 008.207 22.95c.6.112.793-.262.793-.582v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.303 3.492.996.108-.775.418-1.304.762-1.603-2.665-.303-5.466-1.332-5.466-5.928 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23A11.44 11.44 0 0112 6.317c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.608-2.805 5.62-5.478 5.918.43.37.814 1.102.814 2.222v3.293c0 .323.19.699.8.58A11.502 11.502 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
                </svg>

              </div>

              <div>

                <p className="font-medium">
                  GitHub
                </p>

                <p className="text-zinc-400">
                  github.com/EvertonSanches
                </p>

              </div>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/everton-sanches-b3bb3519b/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.07V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
                </svg>

              </div>

              <div>

                <p className="font-medium">
                  LinkedIn
                </p>

                <p className="text-zinc-400">
                  linkedin.com/in/everton-sanches-b3bb3519b
                </p>

              </div>

            </a>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-zinc-500">

          © 2026 Everton Sanches Araujo Paiva Nunes.
          Desenvolvido com React, TypeScript e TailwindCSS.

        </div>

      </div>
    </footer>
  )
}