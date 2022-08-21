import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Spotify with NEXT.JS 12.0',
    github: 'https://github.com/vinibrisola/spotifyClone',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Create a salon and barbershop scheduling app',
    github: 'https://github.com/vinibrisola/Check-Your-Time',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Create a neural network using JavaScript with no libraries',
    github: 'https://github.com/vinibrisola/self-drivinf-car',
    demo: 'https://github.com',
  },
]










const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blalnk'>Github</a>
                </div>
              </article>
            )
          })
        }


      </div >
    </section >
  )
}

export default Portfolio
