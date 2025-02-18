'use client'

// pages/contact.js
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('Sending...');

    // Replace with your EmailJS Service ID, Template ID, and User ID
    emailjs
      .send(
        'service_naqizrb',
        'template_wot32gr',
        formData,
        'sLfOzIu9QJRFNOEJw'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error);
          setStatus('Error sending message.');
        }
      );
  };

  return (
    <div className="md:min-h-screen flex flex-col items-center md:justify-center md:pt-0 pt-20 md:pb-20">
      <h1 className="font text-center text-4xl my-10 md:pt-20">Ingyenes Konzultáció – Kezdd el a változást még ma!
      </h1>
      <h1 className="mx-20 text-center  my-10">Most van itt az idő, hogy te is lépéseket tegyél a vállalkozásod sikeréért. Az első lépés egy egyszerű, de fontos beszélgetés. Tudd meg, hogyan segíthetünk a céljaid elérésében, és hogyan válhatunk igazi partnerekké a növekedésedhez.
Foglalj egy ingyenes konzultációt, ahol személyesen átbeszélhetjük, mire van szükséged ahhoz, hogy vállalkozásod a következő szintre lépjen. A beszélgetés során nem csupán kérdéseidre adunk válaszokat, hanem közösen kidolgozunk egy olyan tervet, ami valóban segíti a fejlődésedet.
Ne hagyd ki ezt a lehetőséget! A konzultáció ingyenes, és semmi sem kötelez, csak a sikeres jövődből építhetünk.

      </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center space-y-4 pb-20 md:pb-0">
          
          <div className="flex flex-col items-start w-full">
            <label className="mb-1 font">Név</label>
            <input
              className="w-full h-10 textarea rounded-lg px-4"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="flex flex-col items-start w-full">
            <label className="mb-1 font">Email</label>
            <input
              className="w-full h-10 textarea rounded-lg px-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <div className="flex flex-col items-start w-full">
            <label className="mb-1 font">Üzenet</label>
            <textarea
              className="w-96 h-40 textarea rounded-lg px-4 py-2"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
  
          <button className="my-4 rounded-lg " type="submit">Küldés</button>
  
        </div>
      </form>
      
      <p>{status}</p>
    </div>
  );
}  