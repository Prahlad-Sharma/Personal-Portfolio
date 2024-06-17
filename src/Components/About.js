import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'data-aos="zoom-in-up"
          data-aos-duration="1000">
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Prahlad Sharma</b> and I am from Jaipur (Rajasthan).
            I'm a <b>Web developer</b> and i i completed my graduation in BBA from rajsathan university. <br/><br/>
            
            I have done an internship as a Web Developer at Americium which is a Tech startup. I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do cricket, you can check out some of my shots here <a href="https://www.instagram.com/prahladhacker" target='_blank'>Instagram.</a>
          </p>
        </div>

        
        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      
        
        <Skills/>
        
      
      
    </>
  )
}

export default About