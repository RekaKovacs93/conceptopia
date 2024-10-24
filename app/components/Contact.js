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
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font text-center text-4xl my-10">Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center space-y-4">
          
          <div className="flex flex-col items-start w-full">
            <label className="mb-1 font">Name</label>
            <input
              className="w-full h-10 textarea rounded-lg pl-4"
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
              className="w-full h-10 textarea rounded-lg pl-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <div className="flex flex-col items-start w-full">
            <label className="mb-1 font">Message</label>
            <textarea
              className="w-96 h-40 textarea rounded-lg pl-4"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
  
          <button className="mt-4 rounded-lg" type="submit">Send</button>
  
        </div>
      </form>
      
      <p>{status}</p>
    </div>
  );
}  