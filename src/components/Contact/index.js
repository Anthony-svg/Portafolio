import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ibkyjwx', 'template_fdca3en', form.current, 'zVIBM20DX_BaL7Wl9')
      .then(
        () => {
          console.log("se envio la info");
          e.target.reset();
        },
        () => {
          console.log("No se envio la info");
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Enviame un mensaje a mi correo y me contactare contigo lo mas pronto posible
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">Enviar</button> 
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Anthony Melendez,
          <br />
          Ecuador,
          <br />
          Ambato <br />
          <br />
          <span>anthony.melendez07.am@gmail.com</span>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
