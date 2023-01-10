import React from 'react'
// import { Link } from 'react-router-dom'

 function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">Textutils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className= "nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className= "nav-link text-light" href="/">About</a>
            </li>
          </ul>
          <div className="form-check form-switch text-light">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
        </div>
      </div>
    </nav>

 )
}

export default Navbar;