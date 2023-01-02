import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <>
      <div className="Hero">
            <div className="hero_container">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eveniet libero consequatur obcaecati vitae! Accusantium minus facilis voluptatum libero ab.</p>

            <div className='typewritter'>
    <h1>
      I'm a {' '}
      <span>
   
        <Typewriter
          words={['web designer', 'ui/ux designer', 'grafic', 'freelance!']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
       
        />
      </span>
    </h1>
  </div>
            </div>
            
      </div>
    </>
  )
}

export default Hero
