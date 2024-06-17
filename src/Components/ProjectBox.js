import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ClockDesc : "Creating a digital clock using HTML, CSS, and JavaScript is a great project to practice For web development skills.",
    ClockGithub : "",
    ClockWebsite : "https://psclock.netlify.app/",

    PortfolioDesc:"My personal portfolio website Using React Framework With Javascrip and Tailwind",
    PortfolioGithub:"",
    PortfolioWebsite:"https://iamps.netlify.app/",
    
    AmericiumDesc:"An App Development Experts With The Proficiency to Develop the Most Unique App Solutions.Experience the Future of App Development.",
    AmericiumGithub:"https://github.com/Prahlad-Sharma/",
    AmericiumWebsite:"https://americium.in/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
  
            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'>Live</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox