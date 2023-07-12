import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A', 'n', 't', 'h', 'o', 'n', 'y']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _15`}>,</span>
            <br />
            <span className={`${letterClass} _16`}>M</span>
            <span className={`${letterClass} _17`}>e</span>
            <span> </span>
            <span className={`${letterClass} _18`}>l</span>
            <span className={`${letterClass} _19`}>l</span>
            <span className={`${letterClass} _20`}>a</span>
            <span className={`${letterClass} _21`}>m</span>
            <span className={`${letterClass} _22`}>o</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Desarrollador Front End / Desarrollador Back End</h2>
          <div>
          <Link to="/contacto" className="flat-button">
            Contactame
          </Link>  
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
