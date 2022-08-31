import React from "react";
import "./header.css";
import CTA from "./CTA";
import sayma from '../../assets/sayma.png'
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Saima Tanni</h1>
        <h5 className="textlight">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
            <img src={sayma} alt="me" />
        </div>
        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
