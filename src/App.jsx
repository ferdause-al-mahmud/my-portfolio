
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
