import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import { FaInstagram, FaFacebook, FaLink, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import './Contact.css'; // Import the external stylesheet
import contact1 from '../img/contact1.jpg'; // Import image
import contact2 from '../img/contact2.jpg'; // Import image

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
      <div className='contact-container'>
        <div className='contact-content'>
          <aside className='contact-aside'>
            <div className='contact-image-wrapper'>
              <img src={contact1} className='contact-image-large' alt="Contact 1" />
            </div>
            <div className='contact-image-wrapper contact-image-wrapper-small'>
              <img src={contact2} className='contact-image-small' alt="Contact 2" />
            </div>
          </aside>

          <section className='contact-info'>
            <p className='contact-title'>GET IN TOUCH!</p>
            <div className='contact-details'>
              <div className='contact-detail'>
                <FaPhone className='contact-icon' />
                <span>0966 163 7748</span>
              </div>
              <div className='contact-detail'>
                <FaEnvelope className='contact-icon' />
                <span>gabs.chickeninasal@gmail.com</span>
              </div>
              <div className='contact-detail'>
                <FaInstagram className='contact-icon' />
                <a href="https://www.instagram.com/gabs.chickeninasal/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div className='contact-detail'>
                <FaFacebook className='contact-icon' />
                <a href="https://www.facebook.com/Gabs.ChickenInasal/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
              <div className='contact-detail'>
                <FaLink className='contact-icon' />
                <a href="https://linktr.ee/gabs.chickeninasal?fbclid=IwY2xjawE8BEtleHRuA2FlbQIxMAABHUzN0IjfBz1eKl6B1-SfFIanv8iZV17huGmOWigOHx5JZPm86IU0QylSBQ_aem_K8LR6d5MFF0-VYj8ra50Nw" target="_blank" rel="noopener noreferrer">Linktree</a>
              </div>
              <div className='contact-detail'>
                <FaMapMarkerAlt className='contact-icon' />
                <span>The Shoppes at Infinity, Brgy. Pulung Maragul, Angeles City, Philippines</span>
              </div>
            </div>
          </section>
        </div>

        <div className='contact-divider'></div>

        <h1 className='contact-form-title'>Send us a Message!</h1>

         {/* Contact Form and Google Maps Section */}
         <div style={{
          display: 'flex',
          width: '80%',
          justifyContent: 'space-between',
          marginTop: '40px',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
        }}>
          <div style={{
            width: '50%',
            paddingRight: '20px',
          }}>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15403.605586809059!2d120.6062787!3d15.1637589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3a302589ca9%3A0x587cf7ff464998be!2sThe%20Shoppes%20at%20Infinity!5e0!3m2!1sen!2sph!4v1693813665187!5m2!1sen!2sph"
              style={{ width: '100%', height: '500px', borderRadius: '2rem', border: '2px solid #783F1D' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{
            width: '70%',
            backgroundColor: '#783e1dcb', // Semi-transparent white background
            padding: '20px',
            borderRadius: '2rem',
            // border: '2px solid #783F1D'
          }}>
            <form onSubmit={sendMail}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ textShadow: '2px 2px #04371F', fontWeight: 'bold', display: 'block', marginBottom: '5px', fontFamily: '"Itim", sans-serif', fontWeight: '700', fontStyle: 'normal', color: '#FFBD59', fontSize: '1.2rem' }} htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', borderRadius: '1.5rem', border: '1px solid #ccc' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ textShadow: '2px 2px #04371F', color: 'white', fontWeight: 'bold', display: 'block', fontWeight: 'bold', display: 'block', marginBottom: '5px', fontFamily: '"Itim", sans-serif', fontWeight: '700', fontStyle: 'bold', color: '#FFBD59', fontSize: '1.2rem' }} htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px', borderRadius: '1.5rem', border: '1px solid #ccc' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ textShadow: '2px 2px #04371F', color: 'white', fontWeight: 'bold', display: 'block', marginBottom: '5px', fontWeight: 'bold', display: 'block', marginBottom: '5px', fontFamily: '"Itim", sans-serif', fontWeight: '700', fontStyle: 'normal', color: '#FFBD59', fontSize: '1.2rem' }} htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{ width: '100%', padding: '10px', borderRadius: '1.5rem', border: '1px solid #ccc' }}
                  required
                />
              </div>
              <button type="submit" style={{
                backgroundColor: '#FFBD59',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '2rem',
                cursor: 'pointer',
                fontSize: '1.2em',
                fontFamily: '"Itim", sans-serif',
                fontWeight: '700',
                fontStyle: 'normal',
              }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;