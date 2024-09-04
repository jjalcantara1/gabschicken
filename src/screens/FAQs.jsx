import React, { useState } from 'react';
import { Card, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
const FAQs = () => {
  // State to manage the visibility of each FAQ
  const [open, setOpen] = useState([false, false, false, false]);

  // Questions and Answers
  const faqs = [
    {
      question: "When are you open?",
      answer: `
        Monday: 3 PM to 10 PM
        Tuesday: 11 AM to 10 PM
        Wednesday: 11 AM to 10 PM
        Thursday: 11 AM to 10 PM
        Friday: 11 AM to 11 PM
        Saturday: 11 AM to 11 PM
        Sunday: 11 AM to 11 PM
      `,
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes, we offer delivery via Grab Food Delivery.",
    },
    {
      question: "Can I place bulk or scheduled orders?",
      answer: "Yes, you can contact us for bulk and scheduled orders at +639253571460.",
    },
    {
      question: "Do you accept cashless payments?",
      answer: "Yes, we accept cashless payments via GCash.",
    },
  ];

  // Handle card toggle
  const handleToggle = (index) => {
    setOpen(open.map((o, i) => (i === index ? !o : o)));
  };

  return (
    <><Header />
    <Container className="mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Row className="justify-content-center">
        <Col md={8}>  {/* Adjust column width to center the content */}
          {faqs.map((faq, index) => (
            <Card className="mb-4" key={index}>
              <Card.Header>
                <Button
                  variant="link"
                  onClick={() => handleToggle(index)}
                  aria-controls={`faq-collapse-${index}`}
                  aria-expanded={open[index]}
                  style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}  
                >
                  {faq.question}
                </Button>
              </Card.Header>
              <Collapse in={open[index]}>
                <Card.Body id={`faq-collapse-${index}`}>
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </Card.Body>
              </Collapse>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  ); 
};

export default FAQs;
