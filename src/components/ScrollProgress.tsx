import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="
        fixed left-0 top-0 z-[9999]
        h-[3px] w-full origin-left
        bg-gradient-to-r
        from-emerald-400
        via-cyan-400
        to-violet-400
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  )
}