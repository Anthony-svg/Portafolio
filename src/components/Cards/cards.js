import React from 'react'

import portada from '../../assets/images/portada.jpg'
import "./card.css";

export default function cards() {
  return (
    
    <div className='cuadricula'><div className="contenedor">
          <div className="card">
              <a href='https://github.com/Anthony-svg/Portafolio' target="_blank" rel="noreferrer">
                  <figure>
                      <img src={portada} alt="Imagen Portada"></img>
                  </figure>
                  <div className='contenido'>
                      <h3>Portafolio</h3>
                  </div>
              </a>
          </div>
      </div>
      <div className="contenedor">
              <div className="card">
                  <a href='https://github.com/Anthony-svg/Portafolio' target="_blank" rel="noreferrer">
                      <figure>
                          <img src={portada} alt="Imagen Portada"></img>
                      </figure>
                      <div className='contenido'>
                          <h3>Portafolio</h3>
                      </div>
                  </a>
              </div>
          </div>
          <div className="contenedor">
              <div className="card">
                  <a href='https://github.com/Anthony-svg/Portafolio' target="_blank" rel="noreferrer">
                      <figure>
                          <img src={portada} alt="Imagen Portada"></img>
                      </figure>
                      <div className='contenido'>
                          <h3>Portafolio</h3>
                      </div>
                  </a>
              </div>
          </div>
          </div>
  )
}
