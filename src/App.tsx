import './app.css'
import About from './components/About'
import Aside from './components/Aside'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Work from './components/Work'

function App() {
  return (
    <>
      <Header />
      <Aside />
      <main>
        <Home />
        <About />
        <Experience />
        <Work />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
