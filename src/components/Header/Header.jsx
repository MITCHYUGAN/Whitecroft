import React from "react"
import logo from "./Images/Whitecroft.svg"
import { useState } from "react"

// const header = HeaderCss.header
// const headerWrapper = HeaderCss.headerWrapper
// const workBtn = HeaderCss.workBtn


const Header = () =>{

    const [openNav, setOpenNav] = useState("nav")

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
                <i class='bx bx-menu' 
                    onClick={() => {
                        if(openNav === "nav"){
                            setOpenNav('openNav')
                        } else{
                            setOpenNav('nav')
                        }
                    }
                }></i>
            </div>
        </header>
    )
}

export default Header