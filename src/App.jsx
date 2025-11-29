import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Bottomeye from './components/Bottomeye'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full mini-h-screen text-white bg-zinc-100'>
      <Navbar/>
      <LandingPage/>
      <Marque />
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Bottomeye/>
      <Footer />
    </div>
    
  )
}

export default App