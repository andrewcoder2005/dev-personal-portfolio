import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Navbar from "./layout/Navbar"

function App(){
  return(
      <div className="min-h-screen overflow-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
    </main>
  </div>
  )
  
}


export default App
