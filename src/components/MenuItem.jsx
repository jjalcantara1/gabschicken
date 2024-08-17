import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

const MenuItem = ({ item }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card onClick={handleShow} className="cursor-pointer">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <img src={item.image} alt={item.title} className="img-fluid me-4" style={{ width: '50%' }} />
                    <div>
                        <h4>{item.title}</h4>
                        <h5>{item.price}</h5>
                        <p>{item.description}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MenuItem;
