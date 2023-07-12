import React from 'react'

import portada1 from '../../assets/images/portada.jpg'
import portada2 from '../../assets/images/Imagen1.png'
import portada3 from '../../assets/images/portada3.png'
import "./card.css";

export default function cards() {
  return (
    
    <div className='cuadricula'><div className="contenedor">
          <div className="card">
              <a href='https://github.com/Anthony-svg/Portafolio' target="_blank" rel="noreferrer">
                  <figure>
                      <img src={portada1} alt="Imagen Portada"></img>
                  </figure>
                  <div className='contenido'>            
                  </div>
              </a>
          </div>
          <h2>Portafolio</h2>
      </div>
          <div className="contenedor">
              <div className="card">
                  <a href='https://orizontel.ec/' target="_blank" rel="noreferrer">
                      <figure>
                          <img src={portada2} alt="Imagen Portada"></img>
                      </figure>
                      <div className='contenido'>               
                      </div>
                  </a>
              </div>
              <h2>Pagina Orizontel</h2>
          </div>
          <div className="contenedor">
              <div className="card">
                  <a href='https://gitlab.com/busesecuador/buses-ecuador-app' target="_blank" rel="noreferrer">
                      <figure>
                          <img src={portada3} alt="Imagen Portada"></img>
                      </figure>
                      <div className='contenido'>            
                      </div>
                  </a>
              </div>
              <h2>Aplicacion para compra de boletos</h2>
          </div>
          </div>
  )
}
