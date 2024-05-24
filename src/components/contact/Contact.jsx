import React from "react";
import Socials from "../socials/Socials";

export default function Contact() {
  return (
    <div className="bg-[#111928] py-10 sm:py-16 lg:py-24 rounded-3xl w-full ">
      <div className="text-slate-50  py-5 max-w-xl mx-auto text-center">
        <h2 className=" text-gray-50 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
          Contatcez moi
        </h2>
      </div>
      <form
        action="https://submit-form.com/FeSKleb8b"
        className="grid gap-2 px-4 mx-auto max-w-xl sm:px-6 lg:px-8"
      >
        <input
          type="hidden"
          name="_redirect"
          value="portfolio-react-jean.vercel.app"
        />
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-[#ff6d00] rounded-lg text-slate-50 py-2 px-4   "
        >
          Envoyer
        </button>
      </form>
      <div className="pt-7 w-full max-w-lg">
        <Socials />
      </div>
    </div>
  );
}
