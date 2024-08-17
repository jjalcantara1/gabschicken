import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuCategory from '../components/MenuCategory';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    const categories = ["Promos", "Appetizer", "Grilled", "Fried", "Combo"];
    const [activeCategory, setActiveCategory] = useState("Promos");

    const menuItems = [
        { title: "Pork Sisig with 1 Bucket of Beers", description: "Pork Sisig with 1 Bucket of Beers", price: "₱599", image: "/path/to/image1.jpg", category: "Promos" },
        { title: "Sisig Tokwa with 1 Bucket of Beers", description: "Sisig Tokwa with 1 Bucket of Beers", price: "₱499", image: "/path/to/image2.jpg", category: "Promos" },
        { title: "Crispy Pata with 1 Bucket of Beers", description: "Crispy Pata with 1 Bucket of Beers", price: "₱959", image: "/path/to/image3.jpg", category: "Promos" },
        { title: "Item 4", description: "Description 4", price: "₱XXX", image: "/path/to/image4.jpg", category: "Appetizer" },
        { title: "Item 5", description: "Description 5", price: "₱XXX", image: "/path/to/image5.jpg", category: "Appetizer" },
        { title: "Item 6", description: "Description 6", price: "₱XXX", image: "/path/to/image6.jpg", category: "Grilled" },
        // Add more items as needed
    ];

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    return (
        <Container>
            <MenuCategory categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Row className="mt-4">
                {filteredItems.map((item, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                        <MenuItem item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;
