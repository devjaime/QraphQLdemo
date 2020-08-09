import React from 'react'
import {Link} from 'react-router-dom'

import 'animate.css'
export const Navigation = () => (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#FFF159"}}>
    <Link className="navbar-brand" to="/"><img className="animate__animated animate__heartBeat animate__infinite	infinite" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.8.2/mercadolibre/logo__large_plus.png" alt="Mercado Libre"/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link className="nav-link" to="/">Lista de productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-message">Nuevo Producto</Link>
        </li>
      
      </ul>
      
    </div>
  </nav>
)