import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import BackgroundEffects from "./components/BackgroundEffects"
import CursorGlow from "./components/CursorGlow"
export default function App() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <BackgroundEffects />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Footer />
      <Experience />
    </main>
  )
}