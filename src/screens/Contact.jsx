import React from 'react';
import Header from '../components/Header';
import { FaInstagram, FaFacebook, FaLink, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
              boxShadow: '-4px -4px 0px 5px rgba(212,161,37,1)', // Adjusted shadow for larger size
              zIndex: 1,
              marginLeft: '-50px',
            }}>
              <img
                src="https://cdn.discordapp.com/attachments/1237242418794074223/1278356725073842257/SaveClip.App_447243121_950513916772050_8557574923951589759_n.jpg?ex=66d081f9&is=66cf3079&hm=5953e8fa13320f815395d928a44a7549121a9f3f7166b52659bb230c17747fd0&"
                style={{ borderRadius: '50%', maxWidth: '240px', margin: 'auto' }} // Increased size by 20%
              />
            </div>
            <div style={{
              position: 'relative',
              width: 'fit-content',
              borderRadius: '50%',
              boxShadow: '-4px -4px 0px 5px rgba(212,161,37,1)', // Adjusted shadow for larger size
              zIndex: 2,
              marginTop: '-48px', // Adjusted positioning
              marginLeft: '120px', // Adjusted positioning for larger image
            }}>
              <img
                src="https://cdn.discordapp.com/attachments/1237242418794074223/1278356725543469181/SaveClip.App_291691932_181520910981838_8318319657057865379_n.jpg?ex=66d081fa&is=66cf307a&hm=738bec6b844bde83d75640c4526ac52add1627aa3cf9119a33552162a28ee2ff&"
                style={{ borderRadius: '50%', maxWidth: '240px', margin: 'auto' }} // Increased size by 20%
              />
            </div>
          </aside>

          <section style={{ maxWidth: '500px', textAlign: 'left' }}>
            <p style={{
              fontSize: '3em',
              fontWeight: 'bold',
              textShadow: '2px 2px #d4a125',
              marginBottom: '30px',
              color: '#FFD700',
              textDecoration: 'underline',
            }}>GET IN TOUCH!</p>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaPhone style={{ marginRight: '15px' }} />
                <span style={{ color: 'white' }}>+63966 163 7748 / +63925 357 1460</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaEnvelope style={{ marginRight: '15px' }} />
                <span style={{ color: 'white' }}>gabs.chickeninasal@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaInstagram style={{ marginRight: '15px' }} />
                <a href="https://www.instagram.com/gabs.chickeninasal/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaFacebook style={{ marginRight: '15px' }} />
                <a href="https://www.facebook.com/Gabs.ChickenInasal/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaLink style={{ marginRight: '15px' }} />
                <a href="https://linktr.ee/gabs.chickeninasal?fbclid=IwY2xjawE8BEtleHRuA2FlbQIxMAABHUzN0IjfBz1eKl6B1-SfFIanv8iZV17huGmOWigOHx5JZPm86IU0QylSBQ_aem_K8LR6d5MFF0-VYj8ra50Nw" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Linktree</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', fontSize: '1.5em' }}>
                <FaMapMarkerAlt style={{ marginRight: '15px' }} />
                <span style={{ color: 'white' }}>The Shoppes at Infinity, Brgy. Pulung Maragul, Angeles City, Philippines</span>
              </div>
            </div>
          </section>
        </div>

        <div style={{
          marginTop: '40px', // Added space before the Google Maps iframe
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
