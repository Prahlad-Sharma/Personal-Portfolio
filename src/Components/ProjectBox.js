import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
       RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "",
    RogFreeWebsite : "",

    PortfolioDesc:"My personal portfolio website Using React Framework With Javascrip and Tailwind",
    PortfolioGithub:"",
    PortfolioWebsite:"https://americium.in/",
    
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