import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
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


const Menu = () => {
    const categories = ["All", "Appetizer", "Grilled", "Fried", "Combo", "Special", "Promos"];
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const menuItems = [
        { title: "A1", description: "Sisig Tokwa", price: "₱199", image: A1, category: "Appetizer" },
        { title: "A2", description: "Calamares", price: "₱229", image: A2, category: "Appetizer" },
        { title: "A3", description: "Pork Sisig", price: "₱299", image: A3, category: "Appetizer" },
        { title: "A4", description: "Lechon Kawali", price: "₱279", image: A4, category: "Appetizer" },
        { title: "A5", description: "Tokwa't Baboy", price: "₱319", image: A5, category: "Appetizer" },
        { title: "A6", description: "Stuffed Pusit", price: "Price vary on size", image: A6, category: "Appetizer" },
        { title: "G1", description: "Inasal Legs", price: "₱199", image: G1, category: "Grilled" },
        { title: "G2", description: "Inasal Pecho", price: "₱199", image: G2, category: "Grilled" },
        { title: "G3", description: "Pork Barbecue", price: "₱229", image: G3, category: "Grilled" },
        { title: "G4", description: "Pork Belly", price: "₱249", image: G4, category: "Grilled" },
        { title: "G5", description: "Pork Spareribs", price: "₱279", image: G5, category: "Grilled" },
        { title: "G6", description: "T-Bone Steak", price: "₱289", image: G6, category: "Grilled" },
        { title: "G7", description: "Stuffed Pusit", price: "Price vary on size", image: G7, category: "Grilled" },
        { title: "F1", description: "Calamares", price: "₱188", image: F1, category: "Fried" },
        { title: "F2", description: "Breaded Pork Chop", price: "₱198", image: F2, category: "Fried" },
        { title: "F3", description: "Honey Glazed Chicken", price: "₱248", image: F3, category: "Fried" },
        { title: "F4", description: "Chicken Ala Gab", price: "₱258", image: F4, category: "Fried" },
        { title: "F5", description: "Chicken Cordon Bleu", price: "₱278", image: F5, category: "Fried" },
        { title: "C1", description: "Inasal & Pork Barbecue", price: "₱268", image: C1, category: "Combo" },
        { title: "C2", description: "Inasal & Pork Sisig", price: "₱278", image: C2, category: "Combo" },
        { title: "C3", description: "Inasal & Pork Belly", price: "₱288", image: C3, category: "Combo" }, 
        { title: "C4", description: "Bab's Super Meal(Inasal, Pork Sisig, and Pork Barbecue)", price: "₱328", image: C4, category: "Combo" },
        { title: "S1", description: "Chopsuey", price: "₱248", image: S1, category: "Special" },
        { title: "S2", description: "Beef Pares", price: "₱258", image: S2, category: "Special" },
        { title: "S3", description: "Crispy Kare-Kare", price: "₱268", image: S3, category: "Special" },
        { title: "S4", description: "Crispy Pata", price: "₱648", image: S4, category: "Special" },
        { title: "S5", description: "Moroccan Chicken", price: "₱249", image: S5, category: "Special" },
        { title: "Sisig Tokwa with 1 Bucket of Beers", description: "Sisig Tokwa with 1 Bucket of Beers", price: "₱499", image: promo1, category: "Promos" },
        { title: "Pork Sisig with 1 Bucket of Beers", description: "Pork Sisig with 1 Bucket of Beers", price: "₱599", image: promo2, category: "Promos" },
        { title: "Crispy Pata with 1 Bucket of Beers", description: "Crispy Pata with 1 Bucket of Beers", price: "₱959", image: promo3, category: "Promos" },
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
            padding: '30px 0',
            minHeight: '100vh',
            color: '#FFD54F',
            textAlign: 'center',
        },
        categoryContainer: {
            backgroundColor: '#FFD54F',
            borderRadius: '50px',
            padding: '10px 0',
            margin: '0 auto',
            width: '90%', // Adjusted width for mobile
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            marginTop: '20px',
            maxWidth: '1200px',
            flexWrap: 'wrap',
            gap: '10px', // Added gap for spacing between items
        },
        categoryButton: {
            backgroundColor: 'transparent',
            color: '#4E342E',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 20px',
            fontSize: '1em',
            fontWeight: 'bold',
            borderRadius: '30px',
            transition: 'background-color 0.3s ease',
            margin: '5px', // Added margin for spacing
        },
        activeCategoryButton: {
            backgroundColor: '#4E342E',
            color: '#FFD54F',
        },
        dropdownToggle: {
            backgroundColor: '#FFD54F',
            color: '#4E342E',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            marginBottom:'20px',
            marginTop:'20px',
            width: '200px',
        },
        dropdownMenu: {
            backgroundColor: '#FFD54F',
            border: '2px solid #4E342E',
            borderRadius: '10px',
            width:'200px',
        },
        dropdownItem: {
            color: '#4E342E',
            fontWeight: 'bold',
        },
        dropdownItemActive: {
            backgroundColor: '#4E342E',
            color: '#FFD54F',
        },
        menuItem: {
            backgroundColor: '#FFD54F',
            border: '2px solid #4E342E',
            borderRadius: '10px',
            padding: '15px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            color: '#4E342E',
            cursor: 'pointer',
            marginBottom: '30px',
            borderRadius:'30px',
        },
        menuItemImage: {
            width: '300px',
            height: '200px',
            borderRadius: '30px',
            marginBottom: '10px',
        },
        menuItemTitle: {
            fontWeight: 'bold',
            marginTop: '10px',
            fontSize: '1.2em',
        },
        menuItemDescription: {
            color: '#4E342E',
            fontSize: '1em',
        },
        menuItemPrice: {
            color: '#C62828',
            fontSize: '1.5em',
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
            backgroundColor: '#FFD54F',
            border: '2px solid #4E342E',
            borderRadius: '10px',
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
            width: '350px',
            height: '300px',
            borderRadius: '30px',
        },
        popupTitle: {
            fontSize: '1.5em',
            fontWeight: 'bold',
            marginTop: '15px',
        },
        popupDescription: {
            fontSize: '1.2em',
            color: '#4E342E',
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
            fontSize: '24px',
            position: 'absolute',
            top: '10px',
            right: '10px',
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
    };
    

    return (
        <><Header />
        
        <div style={styles.pageContainer}>
            <Container>
                <Form.Control
                    type="text"
                    placeholder="Search menu..."
                    style={{
                        ...styles.searchInput,
                        paddingLeft: '40px', // Adjust this value to increase or decrease the spacing
                    }}
                    value={searchTerm}
                    onChange={handleSearchChange} />

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
                                >
                                    {category}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <div style={styles.categoryContainer}>
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
                                            style={styles.carouselImage} /* Apply styles to ensure uniform image size */ />
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
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={styles.menuItemImage} />
                                <h4 style={styles.menuItemTitle}>{item.title}</h4>
                                <p style={styles.menuItemDescription}>{item.description}</p>
                                <p style={styles.menuItemPrice}>{item.price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {showPopup && selectedItem && (
                    <div style={styles.popupOverlay} onClick={handleClosePopup}>
                        <div style={styles.popup} onClick={e => e.stopPropagation()}>
                            <span style={styles.closeButton} onClick={handleClosePopup}>
                                &times;
                            </span>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                style={styles.popupImage} />
                            <h2 style={styles.popupTitle}>{selectedItem.title}</h2>
                            <p style={styles.popupDescription}>{selectedItem.description}</p>
                            <p style={styles.popupPrice}>{selectedItem.price}</p>
                        </div>
                    </div>
                )}
            </Container>
        </div></>
    );
};

export default Menu;
