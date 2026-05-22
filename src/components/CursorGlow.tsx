import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="
        pointer-events-none fixed inset-0 z-30 hidden lg:block
      "
    >
      <div
        className="
          absolute h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-emerald-500/10
          blur-[140px]
          transition-transform duration-75
        "
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  )
}