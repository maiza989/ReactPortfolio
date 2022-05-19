import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me_grad.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 >Hello I'm</h5>
        <h1>Maitham Alghamhgam</h1>
        <h5 className="text-light"> Fullstack Developer </h5>
        
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <div className="me__img">
          <img src={ME} alt="me" />
          </div>
        </div>
 
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header