import React from "react";
import './hero.css'
import Socials from "../socials/Socials";


function Hero() {
  return (
    <section className="hero-portfolio" id="hero">
      <div className="hero-container">
        <div className="card-hero">
          <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg" width="180px" alt="Jean Guylane Memiaghe" title="Jean Guylane Memiaghe" />
          <h1 className="font-bold">Jean Guylane</h1>
          <span>Developpeur Front End / Photographe</span>
          <div className="flex items-center">

            <Socials />
          </div>

          <div className="bottom-cv lg:hidden mt-2">
            <a href="cv.pdf" download >Voir mon CV</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
