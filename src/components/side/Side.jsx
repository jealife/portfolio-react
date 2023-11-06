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
                    <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jean Guylane" height="210px" />
                    <span>jealife.pictures@gmail.com</span>
                    <span>  2023 ©Jealife, tous droits reservés </span>
                    <div className="social">

                    </div>
                </div>
                <div className="bottom-side">
                    <a href="../../assets/docs/cv.pdf" download className="cv-download">Voir mon CV</a>
                </div>
        </div>
    )
}

export default Side
