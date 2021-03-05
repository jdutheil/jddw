import { useEffect, useState } from 'react'

import './HomeTitleScreen.scss'

const HomeTitleScreen = () => {
  const titles = [
    'fullstack',
    'ReactJs',
    'Symfony',
    'HTML5 CSS3',
    'Javascript',
    'NodeJs',
  ]
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [waiter, setWaiter] = useState(0)

  const [readBackWay, setReadBackWay] = useState(false)

  useEffect(() => {
    const interval = setInterval(updateTitle, 100)

    return () => {
      clearInterval(interval)
    }
  }, [currentCharIndex, waiter, readBackWay])

  const updateTitle = () => {
    if (currentCharIndex == -1) {
      if (waiter > 0) {
        setWaiter(waiter - 1)
      } else {
        if (readBackWay) {
          setReadBackWay(false)

          setCurrentTitle('')
          setCurrentCharIndex(0)
        } else {
          setReadBackWay(true)
          setCurrentCharIndex(titles[currentTitleIndex].length - 1)
        }
      }

      return
    }

    const char = titles[currentTitleIndex].charAt(currentCharIndex)

    if (readBackWay) {
      setCurrentTitle(currentTitle.substring(0, currentTitle.length - 1))
    } else {
      setCurrentTitle(currentTitle + char)
    }

    if (readBackWay) {
      if (currentCharIndex > 0) {
        setCurrentCharIndex(currentCharIndex - 1)
      } else {
        setCurrentCharIndex(-1)
        updateCurrentTitleIndex()
      }
    } else {
      if (currentCharIndex < titles[currentTitleIndex].length - 1) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        setWaiter(10)
        setCurrentCharIndex(-1)
      }
    }
  }

  const updateCurrentTitleIndex = () => {
    if (currentTitleIndex < titles.length - 1) {
      setCurrentTitleIndex(currentTitleIndex + 1)
    } else {
      setCurrentTitleIndex(0)
    }
  }

  return (
    <div className='title-screen'>
      <h1 className='title-screen__static-title'>Développeur web freelance</h1>
      <h2 className='title-screen__animated-title'>
        {currentTitle} <span className='title-screen__animated-cursor'>|</span>
      </h2>

      <h5 className='title-screen__edito'>
        Je vous accompagne dans toutes les étapes de votre projet web.
      </h5>
    </div>
  )
}

export default HomeTitleScreen
