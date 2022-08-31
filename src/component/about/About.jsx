import React from "react";
import "./about.css";
import about_me from "../../assets/about_me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderUserLine } from "react-icons/ri";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>about Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me_image">
            <img src={about_me} alt="about__me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working </small>
            </article>

            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3+ worldwide</small>
            </article>

            <article className="about__card">
              <RiFolderUserLine className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
