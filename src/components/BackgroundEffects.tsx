export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* GRADIENTE TOPO */}

      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* GRADIENTE DIREITA */}

      <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* GRADIENTE BAIXO */}

      <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[160px]" />

      {/* GRID */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* VINHETA */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)]" />

    </div>
  )
}