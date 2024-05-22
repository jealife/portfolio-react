import React from "react";
import './main.css'
import './sections.css'
import { Link } from 'react-scroll';
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Work from "../work/Work";



export function Sections() {
    return (
        <section className="section px-4">
            <div className='about-section' id="about">
                <article class="section-about container grid " id="about" >
                    <div class="section-about-left">
                        <h3>Photographe -Dévéloppeur web</h3>
                        <h2 class="font-bold text-gray-800 text-left text-4xl pb-9"> A propos de moi</h2>
                        <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg"
                            alt="Jean Guylane Memiaghe" />
                        <div className="skills ">
                            <box-icon type='logo' color='#ff6d00' size="md" name='react'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='html5'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='css3'></box-icon>
                            <box-icon type='logo' color='#ff6d00' size="md" name='php'></box-icon>
                        </div>
                    </div>
                    <div className="section-about-right">
                        <p>
                            Je suis Jean Guylane, développeur web et mobile avec 3 ans d'expérience et passionné de
                            photographie. J'aime créer des interfaces interactives en utilisant les nouvelles technologies Front End.  Mon objectif est de combiner mes compétences en développement
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
                <Services/>
            </article>
            <article className='work-section' id="work">
                <Work/>
            </article>
            <article className='contact-section' id="contact">
                <Contact/>
            </article>
        </section>
    )
}