import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import { FaInstagram, FaFacebook, FaLink, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs.send(
      'service_0aow9oi', 
      'template_j6c8q1i', 
      formData, 
      'cClutocTfQhJrBk4B'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send the email:', err);
      alert('There was an error sending your message. Please try again later.');
    });
  };

  return (
    <>
      <Header />
      <div style={{
        backgroundColor: '#0a5c36',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'white',
      }}>
        {/* Contact Information */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '80%',
          flexWrap: 'wrap',
        }}>
          {/* Aside Section */}
          <aside style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px' }}>
            {/* Your images here */}
          </aside>

          {/* Contact Details */}
          <section style={{ maxWidth: '500px', textAlign: 'left' }}>
            {/* Your contact details here */}
          </section>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendMail} style={{ width: '80%', maxWidth: '500px', marginTop: '40px', textAlign: 'left' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ fontSize: '1.2em' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '1em', borderRadius: '5px', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ fontSize: '1.2em' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', fontSize: '1em', borderRadius: '5px', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ fontSize: '1.2em' }}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              style={{ width: '100%', padding: '10px', fontSize: '1em', borderRadius: '5px', border: 'none' }}
            ></textarea>
          </div>
          <button type="submit" style={{
            padding: '10px 20px',
            fontSize: '1.2em',
            color: '#0a5c36',
            backgroundColor: '#d4a125',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>Send Message</button>
        </form>

        {/* Google Maps */}
        <div style={{
          marginTop: '40px',
          width: '100%',
          height: '400px',
          marginBottom: '20px'
        }}>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15403.605586809059!2d120.6062787!3d15.1637589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3a302589ca9%3A0x587cf7ff464998be!2sThe%20Shoppes%20at%20Infinity!5e0!3m2!1sen!2sph!4v1724505025375!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
