import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/textform">Textform</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboute">About</Link>
              </li>y
              
            



            </ul>
            <div className={`custom-control custom-switch text-${props.mode==='light'? 'dark':'light'}`}>
                <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
              </div>
            <div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
