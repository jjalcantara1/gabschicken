import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Home.css';

import wow1 from '../img/wow1.png'
import wow2 from '../img/wow2.png'
import section3bg from '../img/section3bg.png'

const carouselData = [
  { id: 1, title: "Gab's Signature Chicken Inasal", description: "A Filipino classic, Chicken Adobo is a savory and tangy dish where tender chicken pieces are marinated and simmered in a rich blend of soy sauce, vinegar, garlic, and bay leaves. The result is a flavorful dish with a perfect balance of salty, sour, and umami notes, making it an irresistible comfort food.", imgSrc: 'https://pbs.twimg.com/media/FxPiQ9TX0AECxuY.jpg' },
  { id: 2, title: "Special Crispy Pork Kare-kare", description: "Kare-Kare is a traditional Filipino stew known for its rich, creamy peanut sauce. This hearty dish features oxtail, tripe, and a medley of vegetables, including eggplant, green beans, and banana blossoms. The velvety sauce, thickened with ground peanuts and annatto seeds, is complemented by the bold, salty kick of bagoong (fermented shrimp paste) on the side.", imgSrc: 'https://i.pinimg.com/736x/dd/18/b3/dd18b311f3ceaa8579f5c420ead9b4a1.jpg' },
  { id: 3, title: "Gab's Special Halo-Halo", description: "Halo-Halo is a vibrant Filipino dessert that offers a refreshing mix of flavors and textures. A delightful combination of shaved ice, sweetened fruits, jelly, beans, and leche flan is crowned with ube ice cream and drizzled with evaporated milk. Each spoonful is a colorful and satisfying explosion of sweetness, perfect for cooling down on a hot day.", imgSrc: 'https://preview.redd.it/an7kwmy7hba61.jpg?width=640&crop=smart&auto=webp&s=e9e5cff6578cf46e83b3f02603f1d85d3c2e3d06' },
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
                    <button className='carouselbutton'>Check It Out!</button>
                  </div>
                  <img src={item.imgSrc} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
          <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
      </div>
      
        <div className='carouselend'>
        <h1 className='carouselendtext'>100% Delicious, 100% Worth Every Bite</h1>
        <button className='carouselendbutton'>View full menu</button>
        </div>

      <div className='linecolor'>
      </div>

      <div className='section2'>

        <div className='section2container'>

          <div className='image-container'>
            <div>
              <img className='section2image' src={'https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/418936971_863674885455954_5653540081634286195_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4UCrmaXEnwtvuOyPM95A-ergXL68SRQ16uBcvrxJFDXSnIxwvNMPnM4CDPwrHWKLlEitxvANSNlL7sBcQ_3br&_nc_ohc=c4-IHCqMrGMQ7kNvgEjKS7v&_nc_ht=scontent.fcrk1-2.fna&oh=00_AYDPu5lielI8OuqV0EUZPoEGC8p7nocIVekWQuYxNxpmKw&oe=66D27706'} />
            </div>
            <img className='section2imagedesign1' alt='wow' src={wow1} />
            <div>

              <div>
              <img className='section2imagedesign2' alt='lines emphasizing image' src={wow2} />
              </div>

            </div>
          </div>

          <div>
            <h1>Sample text about place</h1>
            <p>sample description about place</p>
            <button className='section2button'>Find Nearest Location</button>
          </div>

        </div>
      </div>

      <div className='linecolor'>
      </div>
      
      <div className='section2endbg' style={{backgroundImage:`url(${section3bg})`}}>
      <div className='section2end'>
        <h1 className='section2endtext'>Smthn abt questions then button for FAQs</h1>
        <button className='section2button2'>Go to FAQs</button>
      </div>
      </div>

      <div className="section3" style={{backgroundImage:`url(${section3bg})`}}>

      <div className="text-content">
        <h1>Something about us smthn yeayeayea</h1>
        <p>Small description about what the place is about. i havent tried it yet pero dapat video ung nasa here ----&gt; </p>
        <button className="section3button">About Us</button>
      </div>

        <div className="image-container2">
          <img
            className="section3image"
            src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/418936971_863674885455954_5653540081634286195_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4UCrmaXEnwtvuOyPM95A-ergXL68SRQ16uBcvrxJFDXSnIxwvNMPnM4CDPwrHWKLlEitxvANSNlL7sBcQ_3br&_nc_ohc=c4-IHCqMrGMQ7kNvgEjKS7v&_nc_ht=scontent.fcrk1-2.fna&oh=00_AYDPu5lielI8OuqV0EUZPoEGC8p7nocIVekWQuYxNxpmKw&oe=66D27706"
            alt="Sample place image"
          />
      </div>
    </div>
    </>
  );
};

export default Home;
