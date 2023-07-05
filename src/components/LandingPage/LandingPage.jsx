import React from 'react'
import { Link } from "react-scroll"
import landingImg from "./Image/landing-img.png"
import landingImgShape from "./Image/landing-img-shape.png"
import PlayOutline from "./Image/PlayOutline.svg"

const LandingPage = () => {
  return (
    <div className='landing-page' id='home'>
        <div className="landing-contents">
            <div className="landing-text">
                <h1><span>Elevate</span> Your Brand to New Heights</h1>
                <p className='landing-paragraph'>
                    Whitecroft is a premier luxury software design and development 
                    agency specializing in crafting minimalistic, elegant, and 
                    user-centric designs that reflect the true value of your brand
                </p>
                <div className='buttons'>
                    <Link to="workwithus" spy={true} smooth={true} offset={50} duration={500}>
                        <button className='button'>Work with us</button>
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                        <button className='button button-outline'>
                            <p>Portfolio reel</p>
                            <img className='playOutline' src={PlayOutline} alt="" />
                        </button>  
                    </Link>
                </div>
            </div>
            <div className="landing-img-container">
                <img className='landing-img' src={landingImg} alt="" />
                <img className='landing-shape' src={landingImgShape} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage