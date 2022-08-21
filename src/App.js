import React, { useState , useEffect } from 'react'
import Banner from "./components/Banner"
import Header from "./components/Header"
import NavMobile from "./components/NavMobile"
import Experience from './components/Experience';
import Video from './components/Video';
import Headset from "./components/Headsets"
import Testimonial from './components/Testimonial';
import Explore from "./components/Explore"
// import Animate on Scroll
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  const [navbarMobile, setNavbarMobile] = useState(false)

  useEffect(() =>{
    Aos.init({
      duration:2500,
      delay:400
    })
  })
  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavbarMobile={setNavbarMobile} />
      <Banner />
      {/* Mobile nav */}
      <div className={`${navbarMobile ? "right-0" : "left-full"}
      fixed top-0 bottom-0 w-48 transition-all 	 `}>
        <NavMobile setNavbarMobile={setNavbarMobile} />
      </div>
      <Experience />
      <Video />
      <Headset />
      <Testimonial />
      <Explore />
    </div>
  )
}

export default App