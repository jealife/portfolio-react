import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#111928] w-full h-full p-4 rounded-lg">
      <form
        action="https://submit-form.com/FeSKleb8b"
        className="flex flex-col gap-2 w-ful"
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
