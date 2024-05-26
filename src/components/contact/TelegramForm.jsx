import React, { useState } from 'react';

const TelegramForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    // Remplacer 'YOUR_BOT_TOKEN' par le jeton de votre bot Telegram
    const url = `https://api.telegram.org/6351511365:AAFqpLA_eGvu6eCrA5a1xufGxAlEyhpYFDs/sendMessage`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: '1402636953', // Remplacer 'YOUR_CHAT_ID' par l'ID de votre chat Telegram
        text: `Nom: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      }),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log('Message envoyé avec succès');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.error('Erreur lors de l\'envoi du message');
        }
      })
      .catch((error) => {
        console.error('Erreur réseau', error);
      });
  };

  return (
    <div className="bg-[#111928] py-10 sm:py-16 lg:py-24 rounded-3xl w-full ">
      <div className="text-slate-50  py-5 max-w-xl mx-auto text-center">
        <h2 className=" text-gray-50 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
          Contatcez moi
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
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
          placeholder="Name"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
          value={name} onChange={(event) => setName(event.target.value)}
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
          value={email} onChange={(event) => setEmail(event.target.value)}
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 rounded-md text-[#171f2f] "
          value={message} onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-[#ff6d00] rounded-lg text-slate-50 py-2 px-4   "
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default TelegramForm;
