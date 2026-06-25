import React from 'react'
import dataProyectos from '../../data/portfolio.json';
import './card.css'

export default function Cards() {
  return (
    <div className="cuadricula">
      {dataProyectos.map((data) => (
        <div className="contenedor" key={data.id}>
          <div className="card">
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img
                  src={data.portada}
                  alt={data.titulo}
                />
              </figure>
              <div className="contenido"></div>
            </a>
          </div>
          <h2>{data.titulo}</h2>
        </div>
      ))}
    </div>
  );
}
