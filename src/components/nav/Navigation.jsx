import React, { Component } from "react";
import "./nav.css";
import { Link } from 'react-scroll';

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <header>
        <nav>
          <div className="logo-container">
            <Link className="logo" to="hero" spy={true} smooth={true} offset={-70} duration={500}>
              <box-icon name='code' color='#ff6d00' size="md" animation='spin'></box-icon>
            </Link>
          </div>
          <div className={this.state.clicked ? "menu showMenu " : "menu"}>
            <Link className="nav-link" activeClass="active" to="hero" spy={true} smooth={true} offset={-70} duration={500}>
              Accueil
            </Link>
            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              A propos
            </Link>
            <Link className="nav-link" activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
              Services
            </Link>
            <Link className="nav-link" activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}>
              Réalisations
            </Link>
            <Link className="btn-link btn-menu" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              Contact me
            </Link>
          </div>
          <Link className="btn-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact me
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <box-icon color='#ff6d00' size="md" name={this.state.clicked ? "x" : "menu"}></box-icon>
          </div>
        </nav>
      </header>
    );
  }
}
export default Navigation;
