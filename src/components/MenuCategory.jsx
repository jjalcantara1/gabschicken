import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const MenuCategory = ({ categories, activeCategory, setActiveCategory }) => {
    return (
        <ButtonGroup className="d-flex justify-content-center">
            {categories.map(category => (
                <Button
                    key={category}
                    variant={category === activeCategory ? 'dark' : 'outline-dark'}
                    onClick={() => setActiveCategory(category)}
                    className="mx-2"
                >
                    {category}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default MenuCategory;
