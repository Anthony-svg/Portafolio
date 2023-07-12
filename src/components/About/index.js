import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import curriculum from '../../assets/archives/curriculum.pdf'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'e', 'r', 'c', 'a',' ', 'd', 'e',' ', 'm', 'i']}
              idx={15}
            />
          </h1>
          <p>Hola mi nombre es Anthony y este es mi portafolio, quiero llegar a ser un gran desarrollador full-stack y para ello tengo he adquirido conocimientos de varios lenguajes de programación como lo son Xamarin, C#, Javascript, Typescript, Java, etc. Soy un estudiante de ingeniería en software apasionado por el desarrollo de soluciones tecnológicas innovadoras. Mi objetivo es adquirir un profundo conocimiento en el campo de la ingeniería de software y aplicarlo para resolver desafíos complejos y mejorar la calidad de vida de las personas a través de la tecnología.</p>
          <br></br>
          <p>Mis hobbies son ejercitarme, escuchar musica, ver e-sports y peliculas. Estoy emocionado por aplicar mis habilidades y conocimientos en el mundo laboral, enfrentar nuevos desafíos y contribuir al desarrollo de soluciones innovadoras. Mi objetivo es trabajar en un entorno colaborativo donde pueda seguir creciendo profesionalmente y tener un impacto significativo en el campo de la ingeniería de software. Dentro de este portafolio podras encontrar una seccion con algunos proyectos de los cuales he formado parte del desarollo.</p>
              <a href={curriculum} className='flat-button' download><faDownload />Descargar cv</a>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
