import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </div>
  )
}

export default App