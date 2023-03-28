import React from "react"
import logo from "./Images/Whitecroft.svg"

// const header = HeaderCss.header
// const headerWrapper = HeaderCss.headerWrapper
// const workBtn = HeaderCss.workBtn


const Header = () =>{
    return(
        <header className="header">
            <div className="headerWrapper">
            <img src={logo} alt="" />
                <nav className="">
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
                    <button className="workBtn">Work with us</button>
                </nav>
            </div>
        </header>
    )
}

export default Header