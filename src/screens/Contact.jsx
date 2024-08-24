import React from 'react';
import Header from '../components/Header';

const Contact = () => {
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
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          flexWrap: 'wrap',
        }}>
          <aside style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              className="a"
              src="src\img\promo3.png"
              alt="Avatar"
              style={{ borderRadius: '50%', maxWidth: '400px', zIndex: 1, transform: 'translate(0px, -90px)' }}
            />
            <img
              className="b"
              src="img/2X2 picture TVillena.png"
              alt="Avatar"
              style={{ borderRadius: '50%', maxWidth: '400px', position: 'absolute', top: '50px', left: '50px', zIndex: 2, transform: 'translate(20px, 90px)' }}
            />
          </aside>

          <section style={{ marginLeft: '20px' }}>
            <p style={{ fontSize: '3em', color: 'white', textDecoration: 'underline' }}>GET IN TOUCH!</p>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em', color: 'white' }}>
              <img src="img/promo1.png" alt="phone" style={{ width: '60px', marginRight: '15px' }} /> Phone No.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em', color: 'white' }}>
              <img src="img/promo1.png" alt="email" style={{ width: '60px', marginRight: '15px' }} /> Gmail
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em', color: 'white' }}>
              <img src="img/promo1.png" alt="linktr" style={{ width: '60px', marginRight: '15px' }} /> Linktr
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em', color: 'white' }}>
              <img src="img/promo1.png" alt="location" style={{ width: '60px', marginRight: '15px' }} /> Location
            </div>
          </section>
        </div>
        {/* Ensure the map is placed at the bottom */}
        <div style={{
          marginTop: 'auto', 
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
}

export default Contact;
