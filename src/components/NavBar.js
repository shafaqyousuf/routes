import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Album">Album</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Photos">Photos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Todos">Todos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
export default NavBar;