import React from "react";
import "./portfolio.css";
import qhi from "../../assets/qhi.png";
import pm from "../../assets/pm.png";
import ps from "../../assets/ps.png";
import web from "../../assets/web.png";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      Image: qhi,
      title: "Quality Home Image Dashboard and Schedule Visualisation",
      github: "https://github.com",
      demo: "http://qhi.demo.devsstream.com/",
    },
    {
      id: 2,
      Image: pm,
      title: "Project Management system ",
      github: "https://github.com",
      demo: "http://pm.demo.devsstream.com/",
    },
    {
      id: 3,
      Image: ps,
      title: "Card Acquiring for SME’s ",
      github: "https://github.com",
      demo: "https://eboard.demo.devsstream.com/",
    },
    {
      id: 3,
      Image: web,
      title: "Card Acquiring for SME’s ",
      github: "https://github.com",
      demo: "http://qhi.demo.devsstream.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,Image,title,github,demo}) =>{
          return (
            <article key={id} className="portfolio__items">
            <div className="portfolio__items__image">
            <img src={Image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item__cta">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Git Hub
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          )
        })}
      

       
      </div>
    </section>
  );
};

export default Portfolio;
