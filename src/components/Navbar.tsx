import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  {
    name: "Sobre",
    href: "#sobre",
  },

  {
    name: "Projetos",
    href: "#projetos",
  },

  {
    name: "Tecnologias",
    href: "#tecnologias",
  },

  {
    name: "Contato",
    href: "#contato",
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        {/* LOGO */}

        <a
          href="#"
          className="text-xl font-bold tracking-wide text-white"
        >
          Everton Sanches
        </a>

        {/* DESKTOP */}

        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="
                text-sm text-zinc-300
                transition
                hover:text-white
              "
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            flex items-center justify-center
            rounded-xl border border-white/10
            bg-white/5 p-2
            text-white
            md:hidden
          "
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          overflow-hidden transition-all duration-300 md:hidden
          ${
            open
              ? "max-h-96 border-t border-white/10"
              : "max-h-0"
          }
        `}
      >
        <div className="bg-[#020617]/95 px-6 py-6 backdrop-blur-xl">

          <nav className="flex flex-col gap-6">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  text-base text-zinc-300
                  transition hover:text-white
                "
              >
                {link.name}
              </a>

            ))}

          </nav>

        </div>

      </div>

    </header>
  )
}