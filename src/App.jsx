import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Tecknologies from './component/Tecknologies'
import Projects from './component/Projects'
import Contact from './component/Contact'


function App() {

  
  return (
    <div className='overflow-x-hidden  antialiased   '>
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div class='absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'></div>

    </div>
    <div className='container mx-auto px-8'>

    <Navbar />
    <Hero />
    <About />
    <Tecknologies />
    <Projects />
    <Contact />
    </div>

    

    

    
 
    
    </div>
  )
}

export default App