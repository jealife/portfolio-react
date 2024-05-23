import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#111928] w-full h-auto py-14 flex flex-col items-center justify-center px-8 rounded-lg ">
      <div className="text-slate-50 text-left  py-5 max-w-lg w-full">
        <h2 className="font-bold text-gray-50 text-left text-4xl pb-9">
          Contatcez moi
        </h2>
      </div>
      <form
        action="https://submit-form.com/FeSKleb8b"
        className="flex flex-col gap-2 w-full max-w-lg "
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
        <button type="submit" className="mt-4 bg-[#ff6d00] rounded-lg text-slate-50 py-2 px-4   ">Send</button>
      </form>
    </div>
  );
}
