import React from "react";


export default function Socials() {
  return (
    <div className="w-full  flex items-center justify-center gap-3 ">
      <a
        href="https://github.com/jealife"
        target="_blank"
        rel="noopener noreferrer"
      >
        <box-icon
          size="md"
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
          size="md"
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
          size="md"
          name="envelope"
          color="#ffffff"
          animation="spin-hover"
        ></box-icon>
      </a>
    </div>
  );
}
