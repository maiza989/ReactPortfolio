import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desgin</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>test</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESGIN */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>test</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESGIN */}
        <article className="service">
          <div className="service__head">
            <h3>Program Applications</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>test</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESGIN */}
      </div>
    </section>
  )
}

export default Services