import About from "./components/About"
import BackgroundEffects from "./components/BackgroundEffects"
import CursorGlow from "./components/CursorGlow"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import ScrollProgress from "./components/ScrollProgress"
import Tech from "./components/Tech"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      <ScrollProgress />

      <Loader />

      <BackgroundEffects />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Tech />

      <Footer />

    </div>
  )
}