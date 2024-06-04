import Header from './Header/Header.jsx'
import Home from './home/Home.jsx'
import About from './about/About.jsx'
import Skills from './skills/Skills.jsx'
import Education from './education/Education.jsx'
import Contact from './contact/Contact.jsx'
import Footer from './footer/Footer.jsx'
import Scrollup from './scrollup/Scrollup.jsx'
import Projects from './projects/Projects.jsx'
function App() {
  return(
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  )

}

export default App
