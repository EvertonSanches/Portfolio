import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-[#020617]
          "
        >

          <div className="text-center">

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-5xl font-black tracking-tight
                text-white md:text-7xl
              "
            >
              Everton Sanches
            </motion.h1>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
                mx-auto mt-6 h-[2px]
                bg-gradient-to-r
                from-emerald-400
                to-cyan-400
              "
            />

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}