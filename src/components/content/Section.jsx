import React from "react";
import './main.css'



export function Section() {
    return (
        <section className="section">
            <div className='about-section' id="about">
                <h1>About</h1>
            </div>
            <div className='services-section' id="services">
                <h1>Services</h1>
            </div>
            <div className='work-section' id="work">
                <h1>Réalistaions</h1>
            </div>
            <div className='contact-section' id="contact">
            <h1>Contact</h1>
            </div>
        </section>
    )
}