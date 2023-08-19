import React from 'react'
import './side.css'


function Side() {
    return (
        <div className="side">
                <div className="top-side">
                    <h2>Jean</h2>
                    <span>Developpeur Front End / Photographe</span>
                </div>
                <div className="midle-side">
                    <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg" alt="Jean Guylane" height="210px" />
                    <span>jealife.pictures@gmail.com</span>
                    <span>  2023 Jealife, tous droits reservés </span>
                    <div className="social">

                    </div>
                </div>
                <div className="bottom-side">
                    <a href="#" className="cv-download">CV</a>
                </div>
        </div>
    )
}

export default Side
