import React from "react";
import './hero.css'


function Hero() {
  return (
    <section className="hero-portfolio" id="hero">
      <div className="hero-container">
        <div className="card-hero">
          <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg" width="180px" alt="Jean Guylane Memiaghe" title="JEaLiFe" />
          <h1 className="font-bold">Jean Guylane</h1>
          <span>Developpeur Front End / Photographe</span>

          <div className="socilal">
            <a href="https://github.com/jealife" target="_blank" rel="noopener noreferrer"><box-icon type='logo' color='#ffffff' name='github' animation='spin-hover' ></box-icon></a>
            <a href="https://www.instagram.com/jealife_pictures/" target="_blank" rel="noopener noreferrer"><box-icon name='instagram' type='logo' color='#ffffff' animation='spin-hover' ></box-icon></a>
            <a href="mailto:jealife.pictures@gmail.com" target="_blank" rel="noopener noreferrer"><box-icon name='envelope' color='#ffffff' animation='spin-hover' ></box-icon></a>
          </div>

          <div className="bottom-cv lg:hidden mt-2">
            <a  href="cv.pdf" download >Voir mon CV</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
