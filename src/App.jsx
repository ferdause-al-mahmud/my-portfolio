
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Education></Education>
      <Portfolio />
      <Experience />
      <Contact />


    </>
  )
}

export default App
