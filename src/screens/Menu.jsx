import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
import MenuCategory from '../components/MenuCategory';
import MenuItem from '../components/MenuItem';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
    const categories = ["Appetizer", "Grilled", "Fried", "Combo", "Promos"];
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const menuItems = [
        { title: "Pork Sisig with 1 Bucket of Beers", description: "Pork Sisig with 1 Bucket of Beers", price: "₱599", image: "https://cdn.discordapp.com/attachments/752710332555722822/1274075950111526914/440096245_854456160029670_5983124491670944527_n.jpg?ex=66c197f1&is=66c04671&hm=e99ecfb416e440936ed4fedddc6f786d473d9edf422f59a3407cfe883985ac28&", category: "Promos" },
        { title: "Sisig Tokwa with 1 Bucket of Beers", description: "Sisig Tokwa with 1 Bucket of Beers", price: "₱499", image: "https://cdn.discordapp.com/attachments/1216019980852658216/1274401912174805073/screenshot-1723911440391.png?ex=66c21ec5&is=66c0cd45&hm=1db7c3d8d3aa17fbb9189595b5bf0a7a7939274183bc55b7d77e60ce82d14454&", category: "Promos" },
        { title: "Crispy Pata with 1 Bucket of Beers", description: "Crispy Pata with 1 Bucket of Beers", price: "₱959", image: "/path/to/image3.jpg", category: "Promos" },
        { title: "Bucket of Beers", description: "Crispy Pata with 1 Bucket of Beers", price: "₱959", image: "/path/to/image3.jpg", category: "Fried" },
    ];

    const filteredItems = menuItems
        .filter(item => item.category === activeCategory)
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
            backgroundColor: '#004225',
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
            width:'100px',
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
        },
        menuItemImage: {
            width: '150px',
            height: '150px',
            borderRadius: '10px',
            objectFit: 'cover',
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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFD54F',
            border: '2px solid #4E342E',
            borderRadius: '10px',
            padding: '20px',
            zIndex: 1000,
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
            width: '90%', // Adjusted width for mobile
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'hidden',
            textAlign: 'center',
            transition: 'opacity 0.3s ease',
        },
        popupImage: {
            width: '150px',
            height: '150px',
            borderRadius: '10px',
            objectFit: 'cover',
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
            height: '500px', // Adjusted height for mobile
            objectFit: 'cover',
        },
    };
    

    return (
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
                    onChange={handleSearchChange}
                />

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
                                            style={styles.carouselImage} /* Apply styles to ensure uniform image size */
                                        />
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
                                    style={styles.menuItemImage}
                                />
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
                                style={styles.popupImage}
                            />
                            <h2 style={styles.popupTitle}>{selectedItem.title}</h2>
                            <p style={styles.popupDescription}>{selectedItem.description}</p>
                            <p style={styles.popupPrice}>{selectedItem.price}</p>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Menu;
