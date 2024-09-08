import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Button, Form, Card } from 'react-bootstrap';
import MenuCategory from '../components/MenuCategory';
import MenuItem from '../components/MenuItem';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import A1 from '../img/A1.jpg';
import A2 from '../img/A2.jpg';
import A3 from '../img/A3.jpg';
import A4 from '../img/A4.jpg';
import A5 from '../img/A5.jpg';
import A6 from '../img/A6.jpg';
import C1 from '../img/C1.jpg';
import C2 from '../img/C2.jpg';
import C3 from '../img/C3.jpg';
import C4 from '../img/C4.jpg';
import F1 from '../img/F1.jpg';
import F2 from '../img/F2.jpg';
import F3 from '../img/F3.jpg';
import F4 from '../img/F4.jpg';
import F5 from '../img/F5.jpg';
import G1 from '../img/G1.jpg';
import G2 from '../img/G2.jpg';
import G3 from '../img/G3.jpg';
import G4 from '../img/G4.jpg';
import G5 from '../img/G5.jpg';
import G6 from '../img/G6.jpg';
import G7 from '../img/G7.jpg';
import S1 from '../img/S1.jpg';
import S2 from '../img/S2.jpg';
import S3 from '../img/S3.jpg';
import S4 from '../img/S4.jpg';
import S5 from '../img/S5.jpg';
import promo1 from '../img/promo1.png';
import promo2 from '../img/promo2.png';
import promo3 from '../img/promo3.png';

import './Menu.css'


const Menu = () => {
    const categories = ["All", "Appetizer", "Grilled", "Fried", "Combo", "Special", "Promos", "Drinks"];
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const menuItems = [
        { title: "A1", description: "Sisig Tokwa", detaildescription: "1 plate of sisig tokwa", price: "₱199", image: A1, category: "Appetizer" },
        { title: "A2", description: "Calamares", detaildescription: "1 plate of calamares", price: "₱229", image: A2, category: "Appetizer" },
        { title: "A3", description: "Pork Sisig", detaildescription: "1 plate of pork sisig", price: "₱299", image: A3, category: "Appetizer" },
        { title: "A4", description: "Lechon Kawali", detaildescription: "1 plate of lechon kawali", price: "₱279", image: A4, category: "Appetizer" },
        { title: "A5", description: "Tokwa't Baboy", detaildescription: "1 plate of tokwa't baboy", price: "₱319", image: A5, category: "Appetizer" },
        { title: "A6", description: "Stuffed Pusit", detaildescription: "1 piece stuffed pusit", price: "Price vary on size", image: A6, category: "Appetizer" },
        { title: "G1", description: "Inasal Legs", detaildescription: "1 piece chicken inasal legs with unlimited gab's rice and special drinks ", price: "₱199", image: G1, category: "Grilled" },
        { title: "G2", description: "Inasal Pecho", detaildescription: "1 piece chicken inasal pecho with unlimited gab's rice and special drinks ", price: "₱199", image: G2, category: "Grilled" },
        { title: "G3", description: "Pork Barbecue", detaildescription: "1 piece pork barbecue with unlimited gab's rice and special drinks ", price: "₱229", image: G3, category: "Grilled" },
        { title: "G4", description: "Pork Belly", detaildescription: "1 piece pork belly with unlimited gab's rice and special drinks ", price: "₱249", image: G4, category: "Grilled" },
        { title: "G5", description: "Pork Spareribs", detaildescription: "1 piece pork spareribs with unlimited gab's rice and special drinks ", price: "₱279", image: G5, category: "Grilled" },
        { title: "G6", description: "T-Bone Steak", detaildescription: "1 piece t-bone steak with unlimited gab's rice and special drinks ", price: "₱289", image: G6, category: "Grilled" },
        { title: "G7", description: "Stuffed Pusit", detaildescription: "1 piece stuffed pusit with unlimited gab's rice and special drinks ", price: "Price vary on size", image: G7, category: "Grilled" },
        { title: "F1", description: "Calamares", detaildescription: "1 plate of calamares with unlimited gab's rice and special drinks", price: "₱188", image: F1, category: "Fried" },
        { title: "F2", description: "Breaded Pork Chop", detaildescription: "1 piece breaded pork chop with unlimited gab's rice and special drinks", price: "₱198", image: F2, category: "Fried" },
        { title: "F3", description: "Honey Glazed Chicken", detaildescription: "1 piece honey glazed chicken with unlimited gab's rice and special drinks", price: "₱248", image: F3, category: "Fried" },
        { title: "F4", description: "Chicken Ala Gab", detaildescription: "1 piece chicken ala gab with unlimited gab's rice and special drinks", price: "₱258", image: F4, category: "Fried" },
        { title: "F5", description: "Chicken Cordon Bleu", detaildescription: "1 chicken cordon bleu with unlimited gab's rice and special drinks", price: "₱278", image: F5, category: "Fried" },
        { title: "C1", description: "Inasal & Pork Barbecue", detaildescription: "1 piece chicken inasal and pork barbecue with unlimited gab's rice and special drinks", price: "₱268", image: C1, category: "Combo" },
        { title: "C2", description: "Inasal & Pork Sisig", detaildescription: "1  chicken inasal and pork sisig with unlimited gab's rice and special drinks", price: "₱278", image: C2, category: "Combo" },
        { title: "C3", description: "Inasal & Pork Belly", detaildescription: "1 piece chicken inasal and pork belly with unlimited gab's rice and special drinks", price: "₱288", image: C3, category: "Combo" }, 
        { title: "C4", description: "Gab's Super Meal", detaildescription: "1 plate of pork sisig, chicken inasal and pork barbecue with unlimited gab's rice and special drinks", price: "₱328", image: C4, category: "Combo" },
        { title: "S1", description: "Chopsuey", detaildescription: "1 plate of chopsuey with unlimited gab's rice and special drinks", price: "₱248", image: S1, category: "Special" },
        { title: "S2", description: "Beef Pares", price: "₱258", detaildescription: "1 bowl of beef pares with unlimited gab's rice and special drinks", image: S2, category: "Special" },
        { title: "S3", description: "Crispy Kare-Kare", detaildescription: "1 bowl of crispy kare-kare with unlimited gab's rice and special drinks", price: "₱268", image: S3, category: "Special" },
        { title: "S4", description: "Crispy Pata", detaildescription: "1 whole crispy pata with unlimited gab's rice and special drinks", price: "₱648", image: S4, category: "Special" },
        { title: "S5", description: "Moroccan Chicken", detaildescription: "1 piece moroccan chicken with unlimited gab's rice and special drinks", price: "₱249", image: S5, category: "Special" },
        { title: "P1", description: "Sisig Tokwa with 1 Bucket of Beers", detaildescription: "1 plate of sisig tokwa and 1 bucket of beers", price: "₱499", image: promo1, category: "Promos" },
        { title: "P2", description: "Pork Sisig with 1 Bucket of Beers", detaildescription: "1 plate of pork sisig and 1 bucket of beers", price: "₱599", image: promo2, category: "Promos" },
        { title: "P3", description: "Crispy Pata with 1 Bucket of Beers", detaildescription: "1 whole crispy pata and 1 bucket of beers", price: "₱959", image: promo3, category: "Promos" },
    ];

    const filteredItems = menuItems
        .filter(item => activeCategory === "All" || item.category === activeCategory) // Include all items if "All" is selected
        .filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Check title for the search term
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) // Check description for the search term
        );        

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

    const styles = {
        pageContainer: {
            backgroundColor: '0A5C36',
            padding: '1.875rem 0',
            minHeight: '100vh',
            color: '#FFD54F',
            textAlign: 'center',
        },
        categoryContainer: {
            backgroundColor: '#ffbd59',
            borderRadius: '3rem',
            // padding: '.5rem',
            margin: '0 auto',
            width: '100%', // Adjusted width for mobile
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            marginTop: '1.25rem',
            maxWidth: '75rem',
            flexWrap: 'wrap',
            // gap: '.5rem', // Added gap for spacing between items
        },
        categoryButton: {
            backgroundColor: 'transparent',
            color: '#4E342E',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 20px',
            fontSize: '1.2rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 700, 
            fontStyle: 'bold', 
            borderRadius: '30px',
            transition: 'background-color 0.3s ease-in-out',
            margin: '1rem', // Added margin for spacing
        },
        activeCategoryButton: {
            backgroundColor: '#783F1D',
            color: 'white',
        },
        dropdownToggle: {
            backgroundColor: '#ffbd59',
            color: '#4E342E',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            marginBottom:'20px',
            marginTop:'20px',
            width: '200px',
            fontSize: '1.2rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 700, 
            fontStyle: 'bold', 
        },
        dropdownMenu: {
            backgroundColor: '#ffbd59',
            border: '2px solid #783F1D',
            borderRadius: '1.5rem',
            width:'200px',
            fontSize: '1.2rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 700, 
            fontStyle: 'bold', 
        },
        dropdownItem: {
            color: '#4E342E',
            fontWeight: 'bold',
        },
        dropdownItemActive: {
            backgroundColor: '#4E342E',
            color: 'white',
        },
        menuItem: {
            position: 'relative',
            backgroundColor: '#ffbd59',
            border: '.15rem solid #4E342E',
            padding: '15px',
            textAlign: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            color: '#4E342E',
            cursor: 'pointer',
            width: '100%',
            height: '95%', 
            maxWidth: '27rem',
            maxHeight: '27rem', 
            marginBottom: '30px',
            borderRadius:'30px',
            // overflow: 'hidden',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }
        },
        priceTag: {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: '1.9em',
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: '1.8',
            paddingInline: '2.3em',
            paddingBottom: '0.5em',
            backgroundColor: '#BD1550',
            borderImage: 'conic-gradient(#0008 0 0) 51%/0.5em',
            clipPath: 'polygon(100% calc(100% - 0.5em), 100% 100%, calc(100% - 0.5em) calc(100% - 0.5em), 0.5em calc(100% - 0.5em), 0 100%, 0 calc(100% - 0.5em), 999px calc(100% - 0.5em - 999px), calc(100% - 999px) calc(100% - 0.5em - 999px))',
            transform: 'translate(calc((1 - cos(45deg)) * 100%), -100%) rotate(45deg)',
            transformOrigin: '0% 100%',
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis',  
            maxWidth: '220px', 
        },
        menuItemImage: {
            width: '100%',
            height: '70%',
            maxHeight: '15rem',
            borderRadius: '1.2rem',
            marginBottom: '10px',
            border: '.15rem solid #4E342E',
            objectFit: 'cover',
            display: 'block',
        },
        menuItemTitle: {
            fontWeight: 'bold',
            marginTop: '10px',
            fontSize: '2rem',
            color: 'black',
            fontFamily: '"Itim", cursive', 
            fontWeight: 700, 
            fontStyle: 'bold', 
            textOverflow: 'ellipsis', // Add ellipsis to overflow text
            overflow: 'hidden', // Hide overflow text
            whiteSpace: 'nowrap', // Prevent text from wrapping
        },
        menuItemDescription: {
            color: 'black',
            fontSize: '1.35rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 100, 
            fontStyle: 'normal',
            textOverflow: 'ellipsis', // Add ellipsis to overflow text
            overflow: 'hidden', // Hide overflow text
            whiteSpace: 'nowrap', // Prevent text from wrapping 
        },
        menuItemPrice: {
            color: '#C62828',
            fontSize: '0em',
            fontWeight: 'bold',
        },
        searchInput: {
            marginBottom: '20px',
            marginTop: '20px',
            width: '90%', // Adjusted width for mobile
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid #4E342E',
            borderRadius: '30px',
            padding: '10px',
            color: '#4E342E',
        },
        popupOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
        },
        popup: {
            position: 'fixed',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffbd59',
            border: '.15rem solid #4E342E',
            borderRadius: '2rem',
            padding: '30px',
            zIndex: 1000,
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
            width: '100%', // Adjusted width for mobile
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'auto', // Changed to auto to handle overflow
            textAlign: 'center',
            position: 'relative', // Ensure close button can be positioned absolutely
        },
        popupImage: {
            width: '100%',
            height: '90%',
            maxHeight: '20rem',
            borderRadius: '1.2rem',
        },
        popupTitle: {
            marginTop: '15px',
            fontSize: '2.5rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 700, 
            fontStyle: 'bold', 
            color: 'black',
        },
        popupDescription: {
            fontSize: '1.5rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 400, 
            fontStyle: 'bold', 
            color: 'black',
            marginTop: '10px',
        },
        popupDetailDescription: {
            fontSize: '1.3rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 400, 
            fontStyle: 'bold', 
            color: 'black',
            marginTop: '10px',
        },
        popupPrice: {
            fontSize: '1.5em',
            color: '#C62828',
            fontWeight: 'bold',
            marginTop: '10px',
        },
        closeButton: {
            color: 'red',
            fontSize: '3rem',
            position: 'absolute',
            top: '-21px',
            right: '5px',
            cursor: 'pointer',
        },
        carouselContainer: {
            marginTop: '30px',
            marginBottom: '40px',
        },
        carouselImage: {
            width: '100%',
            height: '90%', // Adjusted height for mobile
            objectFit: 'cover',
            borderRadius:'30px',
        },
        drinksContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between', // Space evenly between cards
            gap: '0px', // Gap between the cards
            padding: '-5px',
          },
          drinksCard: {
            position: 'relative',
            backgroundColor: '#ffbd59',
            border: '.15rem solid #4E342E',
            padding: '10px',
            textAlign: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            color: '#4E342E',
            width: '100%',  // Adjust to 100% of the parent div (30%)
            height: 'auto',
            maxWidth: '27rem',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          },
        drinksPriceTag: {
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: '0.9em',
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: '1.6',
            paddingInline: '2.2em',
            paddingBottom: '0.5em',
            backgroundColor: '#BD1550',
            borderImage: 'conic-gradient(#0008 0 0) 51%/0.5em',
            clipPath: 'polygon(100% calc(100% - 0.5em), 100% 100%, calc(100% - 0.5em) calc(100% - 0.5em), 0.5em calc(100% - 0.5em), 0 100%, 0 calc(100% - 0.5em), 999px calc(100% - 0.5em - 999px), calc(100% - 999px) calc(100% - 0.5em - 999px))',
            transform: 'translate(calc((1 - cos(45deg)) * 100%), -100%) rotate(45deg)',
            transformOrigin: '0% 100%',
            whiteSpace: 'nowrap',
        },
        drinksCardTitle:{
            color: 'black',
            fontSize: '1.35rem',
            fontFamily: '"Itim", cursive', 
            fontWeight: 100, 
            fontStyle: 'normal'
        }
    };
    

    return (
        <><Header />
        <h2 className="mb-4 menu-title">Menu</h2>
        
        <div style={styles.pageContainer}>
            <Container>
                <Form.Control
                    type="text"
                    placeholder="Search menu..."
                    style={{
                        ...styles.searchInput,
                        paddingLeft: '3rem',
                        fontFamily: '"Itim", cursive', 
                        fontWeight: 700, 
                        fontStyle: 'bold',
                        fontSize: '1.2rem',
                        maxWidth: '80%',
                    }}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='menusearchbar'/>

                {isMobile ? (
                    <Dropdown>
                        <Dropdown.Toggle style={styles.dropdownToggle}>
                            {activeCategory || "Select a Category"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={styles.dropdownMenu}>
                            {categories.map((category, index) => (
                                <Dropdown.Item
                                    key={index}
                                    style={activeCategory === category ? styles.dropdownItemActive : styles.dropdownItem}
                                    onClick={() => setActiveCategory(category)}

                                    className='categorydditem'
                                >
                                    {category}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <div style={styles.categoryContainer} >
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                style={{
                                    ...styles.categoryButton,
                                    ...(activeCategory === category ? styles.activeCategoryButton : {}),
                                }}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                )}

                {activeCategory === null && (
                    <div style={styles.carouselContainer}>
                        <Carousel>
                            {menuItems
                                .filter(item => item.category === 'Promos')
                                .map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt={item.title}
                                            style={styles.carouselImage} />
                                        <Carousel.Caption>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <p>{item.price}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                    </div>
                )}

                <Row>
                    {filteredItems.map((item, index) => (
                        <Col key={index} md={4} sm={6} xs={12}>
                            <div
                                style={styles.menuItem}
                                onClick={() => handleItemClick(item)}
                                className='menucard'
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={styles.menuItemImage} />
                                <h4 style={styles.menuItemTitle}>{item.title}</h4>
                                <p style={styles.menuItemDescription}>{item.description}</p>
                                <div style={styles.priceTag}>{item.price}</div>
                            </div>
                        </Col>
                    ))}
                </Row>


                {(activeCategory === "Drinks" || activeCategory === "All") && (
    <div style={styles.drinksContainer}>
        {[
        { title: 'Soda', price: 30 },
        { title: 'Bottled Water', price: 30 },
        { title: 'Houseblend Iced Tea', price: 80 },
        { title: 'Calamansi Juice', price: 80 },
        { title: 'Buko in a Shell', price: 80 },
        { title: 'San Miguel Apple', price: 75 },
        { title: 'San Miguel Light', price: 75 },
        { title: 'Pale Pilsen', price: 75 },
        { title: 'Red Horse', price: 75 },
        { title: 'Bucket', price: 400 },
        { title: 'Assorted Bucket', price: 420 },
        { title: 'Pitcher Iced Tea', price: 120 },
        { title: 'Coke (1.5L)', price: 150 },
        { title: 'Black Gulaman', price: 100 },
        { title: 'Citrus Trio', price: 120 }
        ].map((drink, index) => (
        <div key={index} style={{ flexBasis: '32%', marginBottom: '20px' }}> {/* Adjust sizing to 30% to fit 3 cards */}
            <Card style={styles.drinksCard}>
                <div style={styles.drinksPriceTag}>
                    ₱{drink.price}
                </div>
                <Card.Body>
                    <Card.Title style={styles.drinksCardTitle}>
                        {drink.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
        ))}
    </div>
)}
                {showPopup && selectedItem && (
                    <div style={styles.popupOverlay} onClick={handleClosePopup} className='popupoverlay'>
                        <div style={styles.popup} onClick={e => e.stopPropagation()} className='menupopup'>
                            <span style={styles.closeButton} onClick={handleClosePopup} className='popupclose'>
                                &times;
                            </span>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                style={styles.popupImage} />
                            <h2 style={styles.popupTitle}>{selectedItem.title}</h2>
                            <p style={styles.popupDescription}>{selectedItem.description}</p>
                            <p style={styles.popupDetailDescription}>{selectedItem.detaildescription}</p>
                            <p style={styles.popupPrice}>{selectedItem.price}</p>
                        </div>
                    </div>
                )}
            </Container>
        </div></>
    );
};

export default Menu;
