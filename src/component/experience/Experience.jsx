import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Develpment</h3>
          <div className="experience__content">
           

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>React js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Material UI</h4>
              <small className="text-light">Experienced</small>
              </div>
           
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React Hooks</h4>
              <small className="text-light">Experienced</small>
              </div>
            
            </article>
          
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Develpment</h3>
          <div className="experience__content">
           

           

          
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React Hooks</h4>
              <small className="text-light">Experienced</small>
              </div>
            
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React redux</h4>
              <small className="text-light">Experienced</small>
              </div>
            
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Tailwind Css</h4>
              <small className="text-light">Experienced</small>
              </div>
          
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Rest API</h4>
              <small className="text-light">Experienced</small>
              </div>
          
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Git</h4>
              <small className="text-light">Experienced</small>
              </div>
          
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Swagger</h4>
              <small className="text-light">Experienced</small>
              </div>
          
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Vs  Code</h4>
              <small className="text-light">Experienced</small>
              </div>
          
            </article>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Experience;
