import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/project1_portfolio_3.png'
import IMG2 from '../../assests/ventureforge.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Vritual Voicemail Assistant: Lavaro',
    github: 'https://github.com/maiza989/Lavaro'
  },
  {
    id: 2,
    image: IMG2,
    title: 'VentureForge',
    github: 'https://github.com/Root-Beer-Floating-Point/VentureForge_AF_JM_MA'
  }
];
const portfolio = () => {
  return (
    <section id='portfilio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) => {
            return(
              <article key={id}className='portfolio__item'>
                <div>
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href="" className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default portfolio