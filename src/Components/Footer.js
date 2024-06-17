import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Prahlad Sharma</h4>
      <h4>Copyright &copy; 2024 PS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Prahlad-Sharma" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/prahlad-sharma/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:prahalad8426012@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer