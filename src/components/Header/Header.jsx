import React from "react"
import logo from "./Images/Whitecroft.svg"
import { Link } from "react-scroll"
import { useState } from "react"

const Header = () =>{

    const [openNav, setOpenNav] = useState("nav")
    const [menu, setMenu] = useState("bx-menu")
    const toggleNav = () => {
        if(openNav === "nav" && menu === "bx-menu"){
            setOpenNav('nav openNav')
            setMenu("bx-x")
        } else{  
            setOpenNav('nav')
            setMenu('bx-menu')
        }
    }

    return(
        <header className="header">
            <div className="headerWrapper">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              <img src={logo} alt="" />   
            </Link>
                <nav className={openNav}>
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About us</Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="clients" spy={true} smooth={true} offset={50} duration={500}>Clients</Link>
                        </li>
                    </ul>
                    <button className="button">
                            <Link to="workwithus" spy={true} smooth={true} offset={50} duration={500}>Work with us</Link>
                    </button>
                </nav>
                <i className={`bx ${menu}`} onClick={toggleNav}></i>
            </div>
        </header>
    )
}

export default Header