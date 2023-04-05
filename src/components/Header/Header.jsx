import React from "react"
import logo from "./Images/Whitecroft.svg"
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
            <img src={logo} alt="" />
                <nav className={openNav}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#about">About us</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#clients">Clients</a>
                        </li>
                    </ul>
                    <button className="button">Work with us</button>
                </nav>
                <i className={`bx ${menu}`} onClick={toggleNav}></i>
            </div>
        </header>
    )
}

export default Header