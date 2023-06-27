import React from 'react'
import AboutImg from './Image/About-img.svg'
import circle1 from "./Image/circle1.svg"
import doublecircle from "./Image/doublecricle.svg"
import orangeline from "./Image/orangeline.svg"
import dottedbox from "./Image/dottedbox.svg"

const About = () => {
  return (
    <section className='aboutsectionwrapper'>
          <img src={circle1} className="circle1" alt="first circle"/>
          <img src={doublecircle} className="doublecircle" alt="double circle"/>
          <h1 className='aboutHeadingText'>About Us</h1>
          <div className='aboutcontainer'>
              <div className="About-img-container">
                  <img className='About-img' src={AboutImg} alt="" />
                  <img className='orangeline' src={orangeline} alt="" />
              </div>
              <div className="about-text">
                  <h1>Crafting elegant,  and <span>user-centric</span> digital experiences</h1>
                  <p className='about-paragraph'>
                      Whitecroft is a  premier luxury software design and development agency specializing in 
                      crafting minimalistic, elegant, and user-centric designs that reflect the true value of your brand.
                      Our team of experts is dedicated to delivering digital experiences that are tailored to your specific
                      needs, giving you an edge over your competitors.
                  </p>
              </div>
          </div>
          <img className='dottedbox' src={dottedbox} alt="" />
    </section>
  )
}

export default About