import React from 'react';
import ProjectBox from './ProjectBox';
import Portfolio from '../images/Portfolio.png';
import Clock from '../images/clock.png';
import AmericiumImage from '../images/Americium.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading' data-aos="zoom-in"
          data-aos-duration="1000">My <b>Projects</b></h1>
      <div className='project'data-aos="flip-right"
          data-aos-duration="1000" >
        <ProjectBox projectPhoto={AmericiumImage} projectName="Americium" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={Clock} projectName="Clock" />
      
      </div>

    </div>
  )
}

export default Projects