const experiences = [
  {
    title: "Projeto de Extensão • Estácio",
    period: "2026 • Atual",
    description:
      "Participação como instrutor em um curso introdutório de lógica de programação com Python, auxiliando alunos nos primeiros contatos com desenvolvimento de software.",
  },

  {
    title: "Projeto Fullstack • Mãos à Obra",
    period: "2026",
    description:
      "Desenvolvimento de aplicação fullstack utilizando FastAPI, PostgreSQL, React, Docker e arquitetura baseada em APIs REST.",
  },

  {
    title: "Aplicações Web e APIs",
    period: "2025 • Atual",
    description:
      "Construção de projetos focados em integração frontend/backend, consumo de APIs, banco de dados relacionais e desenvolvimento de aplicações modernas.",
  },
]

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-20">

          <span className="text-sm uppercase tracking-widest text-emerald-400">
            Experiência
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Jornada e evolução
          </h2>

        </div>

        <div className="relative">

          {/* LINHA */}

          <div className="absolute top-0 left-4 h-full w-px bg-white/10" />

          <div className="space-y-14">

            {experiences.map((experience) => (

              <div
                key={experience.title}
                className="relative pl-14"
              >

                {/* PONTO */}

                <div className="absolute top-2 left-0 h-8 w-8 rounded-full border border-emerald-500/30 bg-emerald-500/10" />

                <div className="rounded-4xl border border-white/10 bg-white/5 p-8">

                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                    <h3 className="text-2xl font-semibold">
                      {experience.title}
                    </h3>

                    <span className="text-sm text-emerald-400">
                      {experience.period}
                    </span>

                  </div>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {experience.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}