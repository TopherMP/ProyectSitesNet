import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropCart } from './DropCart';

export function Header({ HeaderCart, HeaderTotal }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">SitesNet</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="ms-3">
          <DropCart cart={HeaderCart} total={HeaderTotal} />
        </div>
      </div>
    </nav>
  );
}
