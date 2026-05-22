export default function About() {
  return (
    <section
      id="sobre"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">

          <span className="text-sm uppercase tracking-widest text-emerald-400">
            Sobre mim
          </span>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight">
            Desenvolvedor focado em backend,
            APIs e engenharia de software.
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">
              Desenvolvimento Backend
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Desenvolvimento de APIs REST utilizando
              Python com FastAPI, integração de sistemas,
              autenticação JWT, arquitetura backend
              e modelagem de aplicações.
            </p>

          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">
              Banco de Dados
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Experiência prática com PostgreSQL
              e MongoDB, incluindo modelagem,
              integração com ORMs e persistência
              de dados em aplicações web.
            </p>

          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">
              Frontend e Integração
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Construção de interfaces modernas,
              consumo de APIs, componentização
              e integração frontend/backend
              utilizando React e TypeScript.
            </p>

          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">
              Engenharia de Software
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Participação em projetos práticos
              aplicando conceitos de engenharia
              de software, metodologias ágeis,
              Docker e tecnologias cloud.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}