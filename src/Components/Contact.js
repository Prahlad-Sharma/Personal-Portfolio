import React from 'react';
import u from './mail_icon.svg';
import location_icon from './location_icon.svg';
import call_icon from './call_icon.svg';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key belo

    formData.append("access_key", "7b35309b-61fd-4c00-8e38-8dc528737f7d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left" data-aos="fade-right"
          data-aos-duration="1000">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={u} alt="" /> <p>Prahladiam@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+918426012042</p>
                </div>
                <div className="contact-detail">
                    <img src= {location_icon}alt="" /> <p>Jaipur,Rajasthan</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left"
          data-aos-duration="1000">
            <label htmlFor="" autoComplete="off" required>Your Name</label>
            <input type="text" placeholder='Enter your name'autoComplete="off" required name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' autoComplete="off" required name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' autoComplete="off" required></textarea>
            <button type='submit' className="contact-submit" data-aos="zoom-in-in"
          data-aos-duration="1000">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
