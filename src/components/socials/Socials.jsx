import React from "react";
import './social.css'


export default function Socials() {
  return (
    <div className="socilal">
      <a
        href="https://github.com/jealife"
        target="_blank"
        rel="noopener noreferrer"
      >
        <box-icon
          type="logo"
          color="#ffffff"
          name="github"
          animation="spin-hover"
        ></box-icon>
      </a>
      <a
        href="https://www.instagram.com/jealife_pictures/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <box-icon
          name="instagram"
          type="logo"
          color="#ffffff"
          animation="spin-hover"
        ></box-icon>
      </a>
      <a
        href="mailto:jealife.pictures@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <box-icon
          name="envelope"
          color="#ffffff"
          animation="spin-hover"
        ></box-icon>
      </a>
    </div>
  );
}
