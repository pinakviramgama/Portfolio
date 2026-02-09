import { useState } from 'react'
import "./App.css"
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Extracurriculars from './Components/Extracurricular'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Components/Project'
import Skills from './Components/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <br /> <br /> <br />
      <About/>
      <Skills />
      <Experience />
      <Projects />
      <Extracurriculars/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
