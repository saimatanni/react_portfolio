import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
           
          </ul>
        </article>

        {/* ------------------2nd one---------------- */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
            <li>
              <BsCheck className='service__list__icon'/>
            <p>different devices or viewports (primarily based on their sizes).</p>
            </li>
           
          </ul>
        </article>

        {/* --------3rd one---------------- */}
      </div>
    </section>
  )
}

export default Services