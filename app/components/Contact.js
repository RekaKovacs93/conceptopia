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
    <div className="md:min-h-screen flex flex-col items-center md:justify-center md:pt-0 pt-20 md:pb-20 mx-10">
      <h1 className="font text-center text-4xl my-10 md:pt-20">Indulj el a változás útján még ma!

      </h1>
      <h1 className="md:mx-20 text-center text-xl my-10">Az első lépés egy egyszerű, de egy annál fontosabb beszélgetés. Derítsd ki, hogyan segíthetünk céljaid elérésében, és hogyan lehetünk partnereid a növekedésben.
Foglalj egy ingyenes konzultációt, ahol egy telefonos vagy online konzultáció keretein belül átbeszéljük mire van szükséged ahhoz, hogy vállalkozásod a következő szintre lépjen. 
Ne hagyd ki ezt a lehetőséget! A konzultáció díjmentes, és semmilyen kötelezettséggel nem jár.


      </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center space-y-4 pb-20 ">
          
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