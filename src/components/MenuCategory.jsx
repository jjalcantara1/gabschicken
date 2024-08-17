import React from 'react';
import { Nav } from 'react-bootstrap';

const MenuCategory = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <Nav variant="tabs" activeKey={activeCategory} onSelect={(selectedKey) => setActiveCategory(selectedKey)}>
            {categories.map((category, index) => (
                <Nav.Item key={index}>
                    <Nav.Link eventKey={category}>{category}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
};

export default MenuCategory;
