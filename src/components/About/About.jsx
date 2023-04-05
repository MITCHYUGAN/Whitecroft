import React from 'react'
import AboutImg from './Image/About-img.svg'

const About = () => {
  return (
    <section className='aboutsectionwrapper'>
          <h1 className='aboutHeadingText'>About Us</h1>
          <div className='aboutcontainer'>
              <div className="About-img-container">
                  <img className='About-img' src={AboutImg} alt="" />
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
    </section>
  )
}

export default About