import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import "./nav.css";
// import App from '../../App';

class Navigation extends Component{


  render() {
    return (
      <Router>
        <header>
          <nav>
            <div className="logo-container">
              <Link className="logo" to="/">
                JEa.
              </Link>
            </div>
            <div className="menu">
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
              <NavLink className="nav-link" to="/#about">
                A propos
              </NavLink>
              <NavLink className="nav-link" to="/#services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/#Work">
                Réalisations
              </NavLink>
            </div>
              <NavLink className="btn-link" to="/#Contact">
                Contact me
              </NavLink>

          </nav>
        </header>
       
      </Router>
    );
  }
}
export default Navigation;
