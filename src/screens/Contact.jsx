import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import { FaInstagram, FaFacebook, FaLink, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import './Contact.css';

import section3bg from '../img/section3bg.png'

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
      <div className='contactdiv' style={{
        // backgroundImage:`url(${section3bg})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        backgroundColor: '#0a5c36',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'white',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '80%',
          flexWrap: 'wrap',
        }}>
          <aside style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '40px' }}>
            <div style={{
              position: 'relative',
              width: 'fit-content',
              borderRadius: '50%',
              boxShadow: '-4px -4px 0px 5px #FFBD59',
              zIndex: 1,
              marginLeft: '-150px',
            }}>
              <img
                src="https://cdn.discordapp.com/attachments/1216019980852658216/1280760643888222250/download.webp?ex=66d940cc&is=66d7ef4c&hm=51c1f09b06ad94a44081f32f386dfc6c3a27157a72333a31cfcd0e7d5f39d994&"
                style={{ borderRadius: '50%', maxWidth: '30rem', margin: 'auto' }}
              />
            </div>
            <div style={{
              position: 'relative',
              width: 'fit-content',
              borderRadius: '50%',
              boxShadow: '-4px -4px 0px 5px #FFBD59',
              zIndex: 2,
              marginTop: '-100px',
              marginLeft: '120px',
            }}>
              <img
                src="https://cdn.discordapp.com/attachments/1216019980852658216/1280760643888222250/download.webp?ex=66d940cc&is=66d7ef4c&hm=51c1f09b06ad94a44081f32f386dfc6c3a27157a72333a31cfcd0e7d5f39d994&"
                style={{ borderRadius: '50%', maxWidth: '20rem', margin: 'auto' }}
              />
            </div>
          </aside>

          <section style={{ maxWidth: '500px', textAlign: 'left' }}>
            <p style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              textShadow: '4px 4px #04371F, 6px 6px #ff5757',
              marginBottom: '30px',
              color: '#FFBD59',
              textDecoration: 'underline',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: '"Lobster", cursive',
              fontWeight: '700',
              fontStyle: 'normal',
            }}>GET IN TOUCH!</p>
            <div style={{ marginBottom: '20px', paddingLeft: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5rem' }}>
                <FaPhone style={{ marginRight: '15px', color: '#FFBD59'  }} />
                <span style={{ color: 'white', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F'  }}>0966 163 7748</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaEnvelope style={{ marginRight: '15px', color: '#FFBD59' }} />
                <span style={{ color: 'white', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F' }}>gabs.chickeninasal@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaInstagram style={{ marginRight: '15px', color: '#FFBD59' }} />
                <a href="https://www.instagram.com/gabs.chickeninasal/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F' }}>Instagram</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaFacebook style={{ marginRight: '15px', color: '#FFBD59' }} />
                <a href="https://www.facebook.com/Gabs.ChickenInasal/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F' }}>Facebook</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaLink style={{ marginRight: '15px', color: '#FFBD59' }} />
                <a href="https://linktr.ee/gabs.chickeninasal?fbclid=IwY2xjawE8BEtleHRuA2FlbQIxMAABHUzN0IjfBz1eKl6B1-SfFIanv8iZV17huGmOWigOHx5JZPm86IU0QylSBQ_aem_K8LR6d5MFF0-VYj8ra50Nw" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F' }}>Linktree</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaMapMarkerAlt style={{ marginRight: '15px', color: '#FFBD59' }} />
                <span style={{ color: 'white', fontFamily: '"Itim", sans-serif', fontWeight: '400', fontStyle: 'normal', color: '#FFBD59', textShadow: '2px 2px #04371F' }}>The Shoppes at Infinity, Brgy. Pulung Maragul, Angeles City, Philippines</span>
              </div>
            </div>
          </section>
        </div>

        <div style={{
          marginTop: '3rem',
          borderBottom: '0.23rem dotted #FFBD59',
          width: '85%'
        }}></div>

        <div><h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              textShadow: '4px 4px #04371F, 6px 6px #ff5757',
              // marginBottom: '30px',
              marginTop: '3rem',
              color: '#FFBD59',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: '"Lobster", cursive',
              fontWeight: '700',
              fontStyle: 'normal',
            }}>Send us a Message!</h1></div>

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
