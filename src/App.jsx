import { useState } from "react"
import About from "./Component/About/About"
import Campus from "./Component/Campus/Campus"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Program from "./Component/Programms/Program"
import Testimonial from "./Component/Testimonial/Testimonial"
import Title from "./Component/Title/Title"
import Video from "./Component/video/Video"
function App() {
  const [play,setplay]=useState(false)

  return (
    <>
      <Navbar /> 
      <Hero/>
      
      <div className="container">
      <hr />
      <Title subTitle="Our Program" title="What we offer"/>
      <hr />
      <Program/>
      <hr />
      <About setplay={setplay}/>
      <hr />
      <Title subTitle="Gallery" title="Campus photos"/>
      <Campus/>
      <Title subTitle="Testimonial" title="What a student says?"/>
      <Testimonial/>
      <Title subTitle="Contact us" title="Get in touch"/>
      <Contact/>
      <Footer/>
      <Video play={play} setplay={setplay}/>
      </div>
    </>
  )
}

export default App
