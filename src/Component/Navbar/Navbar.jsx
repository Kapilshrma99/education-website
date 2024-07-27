import {useEffect, useState} from "react"
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu from "../../assets/menu-icon.png"

import { Link } from 'react-scroll'
const Navbar = () => {
  const [sticky,setsticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50?setsticky(true):setsticky(false)
    })
  },[])
const [mobilemenue,setmobilemenue]=useState(false)
  const toggltMenu=()=>{
    mobilemenue?setmobilemenue(false):setmobilemenue(true)
  }
  return (
    <nav className={`container ${sticky?"dark-nav":null}`}>
        <img src={logo} alt=" kapil" className="logo"/>
        <ul className={mobilemenue?``:`hide-mobile-menu`}>
            <li>  <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to="Programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
        </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggltMenu}/>
    </nav>
  )
}

export default Navbar
