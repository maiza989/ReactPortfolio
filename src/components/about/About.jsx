import React from 'react'
import './about.css'
import ME from '../../assests/me_fun.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsFolderPlus} from 'react-icons/bs'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="about_me"/>
          </div>
        </div>
        <div className="about__contect">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className='about__icon'/>
              <h5>Experience</h5>
              <small>New Graduate of bachelor's Degree</small>
            </article>
            <article className="about__card">
              <BsFolderPlus className='about__icon'/>
              <h5>Projects</h5>
              <small>+20 completed</small>
            </article>
            
          </div> 
          <p>
          My name is Maitham Alghamgham and I graduated with a bachelor's degree of art. Majoring in computer science and a minor in mathematics from Bellarmine University. I am aiming for a career as a software engineer or security professional or front-end development. I love using the software skills I learned to solve a problem. I get excited when I work on a project and my code works at the end. I love learning new skills and techniques to implement in my practices. I am passionate about software development and eager to learn new technologies that lead to more effective solutions to problems in the virtual world and real world. Building new things is one of my motives.

          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about