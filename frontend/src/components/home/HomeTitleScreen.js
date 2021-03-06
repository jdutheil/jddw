import { useEffect, useState } from 'react'

//import TypingAnimation from '../animations/TypingAnimation'
import TypingAnimation from '@jddw/typing-animation'

import './HomeTitleScreen.scss'

const HomeTitleScreen = () => {
  const titles = [
    'Fullstack',
    'ReactJs',
    'Symfony',
    'HTML5 CSS3',
    'Javascript',
    'NodeJs',
  ]

  return (
    <div className='title-screen'>
      <h1 className='title-screen__static-title'>Développeur web freelance</h1>
      <h2 className='title-screen__animated-title'>
        <TypingAnimation words={titles} />
      </h2>

      <h5 className='title-screen__edito'>
        Je vous accompagne dans toutes les étapes de votre projet web.
      </h5>
    </div>
  )
}

export default HomeTitleScreen
