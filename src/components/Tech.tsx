const techs = [
  {
    category: "Backend",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Tortoise ORM",
      "REST APIs",
    ],
  },

  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },

  {
    category: "Banco de Dados",
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
    ],
  },

  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "AWS",
      "Azure",
      "GCP",
      "Git",
      "GitHub",
    ],
  },

  {
    category: "Metodologias",
    items: [
      "Scrum",
      "Kanban",
      "Engenharia de Software",
      "Arquitetura de Sistemas",
    ],
  },
]

export default function Tech() {
  return (
    <section
      id="tecnologias"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-16">

          <span className="text-sm uppercase tracking-widest text-emerald-400">
            Tecnologias
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Stack e conhecimentos
          </h2>

        </div>

        {/* GRID */}

        <div className="grid gap-6 md:grid-cols-2">

          {techs.map((tech) => (

            <div
              key={tech.category}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-bold">
                {tech.category}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">

                {tech.items.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[#0f172a] px-4 py-2 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:text-white"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}