import { Typewriter } from 'react-simple-typewriter'

import React from 'react'

const TypeWritter = () => {
    
  return (
    <div className='typewritter'>
    <h1>
      Life is simple{' '}
      <span>
   
        <Typewriter
          words={['Eat', 'Sleep', 'Code', 'Repeat!']}
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
  )
}

export default TypeWritter
