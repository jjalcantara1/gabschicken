import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Restaurant</h1>
      <nav>
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
