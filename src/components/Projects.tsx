import FadeUp from "./ui/FadeUp"

export default function Projects() {
  return (
    <section
      id="projetos"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <FadeUp>

          <div className="mb-16">

            <span className="text-sm uppercase tracking-widest text-emerald-400">
              Projetos
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Projetos e aplicações práticas
            </h2>

          </div>

        </FadeUp>

        <div className="space-y-12">

          {/* MÃOS À OBRA */}

          <FadeUp delay={0.1}>

            <div
              className="
                group overflow-hidden rounded-[2.5rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-all duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:shadow-[0_0_80px_rgba(16,185,129,0.08)]
              "
            >

              <div className="grid lg:grid-cols-2">

                {/* CONTEÚDO */}

                <div className="flex flex-col justify-center p-10 lg:p-14">

                  <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    Projeto Fullstack
                  </span>

                  <h3 className="mt-8 text-4xl font-bold">
                    Mãos à Obra
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-zinc-400">
                    Aplicação fullstack desenvolvida
                    com foco em engenharia de software,
                    arquitetura backend e integração
                    de sistemas.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    Construído utilizando FastAPI,
                    PostgreSQL, React, Docker
                    e TypeScript.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {[
                      "FastAPI",
                      "React",
                      "PostgreSQL",
                      "Docker",
                      "TypeScript",
                    ].map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full border border-white/10
                          bg-white/5 px-4 py-2 text-sm text-zinc-300
                          transition hover:border-emerald-500/30
                          hover:text-white
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                {/* IMAGENS */}

                <div className="grid gap-4 p-4">

                  <div className="overflow-hidden rounded-[2rem] border border-white/10">

                    <img
                      src="/maos-a-obra_dashboardADM.png"
                      alt="Dashboard administrativo"
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-white/10">

                    <img
                      src="/maos-a-obra_login.png"
                      alt="Tela de login"
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </FadeUp>

          {/* CONTROLE FINANCEIRO */}

          <FadeUp delay={0.2}>

            <div
              className="
                group overflow-hidden rounded-[2.5rem]
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-all duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:shadow-[0_0_80px_rgba(6,182,212,0.08)]
              "
            >

              <div className="grid lg:grid-cols-2">

                {/* CONTEÚDO */}

                <div className="flex flex-col justify-center p-10 lg:p-14">

                  <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Integração com APIs
                  </span>

                  <h3 className="mt-8 text-4xl font-bold">
                    Controle Financeiro
                  </h3>

                  <p className="mt-8 text-lg leading-8 text-zinc-400">
                    Aplicação desenvolvida para
                    gerenciamento financeiro com
                    integração frontend/backend
                    e consumo de APIs REST.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    Projeto focado em consumo
                    de APIs, experiência do usuário,
                    persistência de dados e integração
                    utilizando Python com FastAPI.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "Python",
                      "FastAPI",
                      "MongoDB",
                    ].map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full border border-white/10
                          bg-white/5 px-4 py-2 text-sm text-zinc-300
                          transition hover:border-cyan-500/30
                          hover:text-white
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                {/* IMAGENS */}

                <div className="grid gap-4 p-4">

                  <div className="overflow-hidden rounded-[2rem] border border-white/10">

                    <img
                      src="/controle_financeiro.png"
                      alt="Controle Financeiro"
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-white/10">

                    <img
                      src="/controle_financeiro1.png"
                      alt="Controle Financeiro"
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                </div>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  )
}