'use client'

import { useState } from 'react';
import style from './contactForm.module.scss'

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    setLoading(true);
    // Simulate API call or any asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSend(true);
    // Simulate another asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSend(false);
    setLoading(false);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h4>Contacto</h4>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">
        {loading ? (send ? "Mensaje Enviado" : "Cargando...") : "enviar"}
      </button>
    </form>
  );
};

