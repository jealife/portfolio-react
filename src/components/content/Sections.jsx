import React from "react";
import './main.css'
import './sections.css'
import { Link } from 'react-scroll';
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Work from "../work/Work";
import Testimonials from "../testimonials/Testimonials";
import TelegramForm from "../contact/TelegramForm";



export function Sections() {
    return (
        <section className="section lg:px-5  gap-10  px-2 ">
            <div className='about-section flex flex-col items-center justify-center w-full lg:mt-52 ' id="about">
                <article class="section-about container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-[#111928] lg:px-10 px-6 py-14 rounded-3xl w-full " >
                    <div class="section-about-left">
                        <h3>Photographe -Dévéloppeur web</h3>
                        <h2 class="font-bold text-gray-200 text-left text-4xl pb-9"> A propos de moi</h2>
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
                        <p className=" text-slate-300 ">
                            Je suis Jean Guylane, développeur web et mobile avec 3 ans d'expérience et passionné de
                            photographie. J'aime créer des interfaces interactives en utilisant les nouvelles technologies Front End.  
                            Mon objectif est de combiner mes compétences en développement
                            et ma passion pour la photographie pour créer des projets uniques. Contactez-moi pour discuter de
                            collaborations passionnantes.
                        </p>
                        <div className="btn-about hidden">
                            <Link className="btn-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                                Contact
                            </Link>
                        </div>
                    </div>

                </article>
            </div>
            <article className='services-section min-h-screen' id="services">
                <Services/>
            </article>
            <article className='work-section grid place-content-center' id="work">
                <Work/>
            </article>
            {/* <Testimonials/> */}
            <article className='contact-section min-h-screen w-full flex flex-col items-center justify-center' id="contact" >
                <Contact/>
                {/* <TelegramForm/> */}
            </article>
        </section>
    )
}