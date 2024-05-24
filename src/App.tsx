import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ParticlesComponent from "./components/ParticleComponent"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return (<>
   <ParticlesComponent />
    <Header />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </>)
}

export default App