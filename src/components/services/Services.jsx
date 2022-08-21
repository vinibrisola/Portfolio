import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Font Awesome</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend and Mobile</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React Js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React-Native</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bootstrap 5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sass</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Git</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Node JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mysql</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Express.JS</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
