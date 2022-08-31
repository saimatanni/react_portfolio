import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
const Contact = () => {

  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k866b1h', 'template_1hlz3wg', form.current, 'uy90rx9VKuPasRO_U')
        e.target.reset()
    };
  
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>saimatanni60@gmail.com</h5>
            <a href="mailto:saimatanni60@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>saimatanni36@gmail.com</h5>
            <a href="https://m.me/sayma.alam.773" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801955770873" target='_blank'>Send a Message</a>
          </article>
        </div>

        {/* ----------------end of contact options------------- */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder="Your Full Name" required/>
          <input type="email"  name='email' placeholder="Your Email" required/>
          <textarea type="text"  name='message'  rows='7' placeholder="Your Message" required/>

          <button className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
