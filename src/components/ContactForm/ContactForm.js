import React, { useState } from "react";
import './ContactForm.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <section id="contactform">
      <div id="contact-information">
        <h3 className="contact-titles">Mes coordonnées</h3>
        <div className="contact-box">
          <img src={location} alt="location" className="contact-icons" />
          <p className="contact-data">Brabant-Wallon</p>
        </div>
        <div className="contact-box">
          <img src={email} alt="email" className="contact-icons" />
          <p className="contact-data">pauline.dero@gmail.com</p>
        </div>
        <div className="contact-box">
          <img src={phone} alt="phone" className="contact-icons" />
          <p className="contact-data">0473 47 77 21</p>
        </div>
      </div>
      <div id="social" className="social-box">
        <h3 className="contact-titles">Mes réseaux</h3>
        <a href="https://www.linkedin.com/in/pauline-de-ro-9a377847/" className="reset">
          <img src={github} alt="github" className="social-icon" />
        </a>
        <a href="https://github.com/paulinedero" className="reset">
          <img src={linkedin} alt="linkedin" className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
