import React, { useState } from 'react';
import { Card, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header'; // Import Header component
import './FAQs.css'; // Import custom CSS
import faq from '../img/faq.jpg'; // Import image

const FAQs = () => {
  // State to manage the visibility of each FAQ
  const [open, setOpen] = useState([false, false, false, false]);

  // Questions and Answers
  const faqs = [
    {
      question: "When are you open?",
      answer: `
        <div class="faq-columns">
          <div class="column">
            <p>Monday: 3 PM to 10 PM</p>
            <p>Tuesday: 11 AM to 10 PM</p>
            <p>Wednesday: 11 AM to 10 PM</p>
            <p>Thursday: 11 AM to 10 PM</p>
          </div>
          <div class="column">
            <p>Friday: 11 AM to 11 PM</p>
            <p>Saturday: 11 AM to 11 PM</p>
            <p>Sunday: 11 AM to 11 PM</p>
          </div>
        </div>
      `,
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes, we offer delivery via Grab Food Delivery.",
    },
    {
      question: "Can I place bulk or scheduled orders?",
      answer: "Yes, you can contact us for bulk and scheduled orders at 0966 163 7748.",
    },
    {
      question: "Do you serve alcoholic beverages?",
      answer: "Yes, see our menu for the available options.",
    },
    {
      question: "Are pets allowed?",
      answer: "Yes",
    },
  ];

  // Handle card toggle
  const handleToggle = (index) => {
    setOpen(open.map((o, i) => (i === index ? !o : o)));
  };

  return (
    <>
      <Header /> {/* Include the Header component */}
      <Container className="mt-5 mb-5 faq-container">
        <Row className="align-items-center">
          {/* Left side image with a rounded border */}
          <Col md={5} className="d-flex justify-content-center mb-4">
            <img
              src={faq}
              alt="FAQ Illustration"
              className="faq-image"
              style={{
                maxWidth: '100%',
                height: 'auto',
                border: '3px solid #FFBD59', // Border color matches the FAQ title
                borderRadius: '15px', // Rounded corners
              }}
            />
          </Col>
          {/* Right side FAQs */}
          <Col md={7}>
            <h2 className="mb-4 faq-title">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-3 border-0 faq-question-card">
                <Card.Header className="p-0 bg-white border-0">
                  <Button
                    variant="link"
                    onClick={() => handleToggle(index)}
                    aria-controls={`faq-collapse-${index}`}
                    aria-expanded={open[index]}
                    className="w-100 text-start faq-question-button"
                  >
                    {faq.question}
                    <span style={{ float: 'right' }}>+</span>
                  </Button>
                </Card.Header>
                <Collapse in={open[index]}>
                  <Card.Body
                    id={`faq-collapse-${index}`}
                    className="px-3 py-2 faq-answer"
                  >
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </Card.Body>
                </Collapse>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <br/>
    </>
  );
};

export default FAQs;
