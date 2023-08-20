import React from "react";
import './main.css'
import './sections.css'
import { Link } from 'react-scroll';



export function Section() {
    return (
        <section className="section">
            <div className='about-section' id="about">
                <article class="section-about container grid" id="about">
                    <div class="section-about-left">
                        <h3>Photographe -Dévéloppeur web</h3>
                        <h2 class="section-about-title"> A propos de moi</h2>
                        <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg"
                            alt="Jean Guylane Memiaghe" />

                        <div class="skills ">
                            <box-icon type='logo' color='#ff6d00' size="md" name='react'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='html5'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='css3'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='php'></box-icon>
                        </div>
                    </div>
                    <div class="section-about-right">
                        <p>
                            Je suis Jean Guylane, développeur web et mobile avec 3 ans d'expérience et passionné de
                            photographie. J'aime créer des interfaces interactives en utilisant HTML, CSS, JavaScript  Mon objectif est de combiner mes compétences en développement
                            et ma passion pour la photographie pour créer des projets uniques. Contactez-moi pour discuter de
                            collaborations passionnantes.
                        </p>
                        <div className="btn-about">
                            <Link className="btn-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                                Contact
                            </Link>
                        </div>
                    </div>

                </article>
            </div>
            <article className='services-section' id="services">
                <h1>Services</h1>
            </article>
            <article className='work-section' id="work">
                <h1>Réalistaions</h1>
            </article>
            <article className='contact-section' id="contact">
                <h1>Contact</h1>
            </article>
        </section>
    )
}