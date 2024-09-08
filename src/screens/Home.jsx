import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';

import wow1 from '../img/wow1.png'
import wow2 from '../img/wow2.png'
import section3bg from '../img/section3bg.png'
import contact2 from '../img/contact2.jpg'
import gablocation from '../img/gablocation.jpg'
import gabsiginasal from '../img/gabsiginasal.jpg'
import gabpares from '../img/gabpares.jpg'
import gabkalamares from '../img/gabkalamares.jpg'

const carouselData = [
  { id: 1, title: "Gab's Signature Chicken Inasal", description: "Gab's Signature Chicken Inasal is a mouthwatering Filipino grilled chicken, marinated in a special blend of spices and grilled to perfection. Juicy, flavorful, and uniquely satisfying, it's a dish that brings comfort and delight in every bite.", image: gabsiginasal  },
  { id: 2, title: "Gab's Savory Beef Pares", description: "Gab's Savory Beef Pares is a Filipino classic featuring tender beef simmered in a rich, flavorful sauce, perfectly balanced with sweet and savory notes. Served with garlic rice, it's a comforting and hearty dish that brings warmth and satisfaction to every bite.", image: gabpares },
  { id: 3, title: "Gab's Fried Calamares", description: "Gab's Fried Calamares features tender squid rings, lightly breaded and fried to golden perfection, served with a side of steamed rice. This satisfying dish combines crispy textures with savory flavors, making it a hearty and delicious seafood meal that's perfect for any occasion.", image: gabkalamares },
  // Add more slides as needed
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <div id='section1'>
        <button className="prev" onClick={prevSlide}>&lt;</button>
          <div className="carousel">
            <div className="carousel-content" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {carouselData.map((item, index) => (
                <div
                  className="carousel-slide"
                  key={item.id}
                >
                  <div className="text">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <Link to={"/menu"} onClick={scrollToTop}>
                    <button className='carouselbutton'>Check It Out!</button>
                    </Link>
                  </div>
                  <img src={item.image} alt={item.title}/>
                </div>
              ))}
            </div>
          </div>
          <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
      </div>
      
        <div className='carouselend'>
        <h1 className='carouselendtext'>100% Delicious, 100% Worth Every Bite</h1>
        <Link to={"/menu"} onClick={scrollToTop}>
        <button className='carouselendbutton' >View full menu</button>
        </Link>
        </div>

      <div className='linecolor'>
      </div>

      <div className='section2'>

        <div className='section2container'>

          <div className='image-container'>
            <div>
              <img className='section2image' src={gablocation} />
            </div>
            <img className='section2imagedesign1' alt='wow' src={wow1} />
            <div>

              <div>
              <img className='section2imagedesign2' alt='lines emphasizing image' src={wow2} />
              </div>

            </div>
          </div>

          <div>
            <h1>Where taste meets comfort.</h1>
            <p>Enjoy a cozy atmosphere and delicious food, where every meal feels like a comforting treat. Perfect for relaxing and savoring good flavors.</p>
            <Link to={"/contact"}>
            <button className='section2button'>Find Nearest Location</button>
            </Link> 
          </div>

        </div>
      </div>

      <div className='linecolor'>
      </div>
      
      <div className='section2endbg' style={{backgroundImage:`url(${section3bg})`}}>
      <div className='section2end'>
        <h1 className='section2endtext'>Have any questions? Head to the FAQs</h1>
        <Link to={"/faqs"} onClick={scrollToTop}>
        <button className='section2button2'>Go to FAQs</button>
        </Link>
      </div>
      </div>

      <div className="section3" style={{backgroundImage:`url(${section3bg})`}}>

      <div className="text-content">
        <h1>Get in touch — where comfort and great food await!</h1>
        <p>Have a question or craving? Contact us and experience a place where comfort and delicious food come together. We're here to make your visit special!</p>
        <Link to={"/contact"} onClick={scrollToTop}>
        <button className="section3button">Contact Us</button>
        </Link>
      </div>

        <div className="image-container2">
          <img
            className="section3image"
            src={contact2}
            alt="Sample place image"
          />
      </div>
    </div>
    </>
  );
};

export default Home;
