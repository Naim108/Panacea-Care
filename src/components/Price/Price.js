import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Price.css'

const Price = () => {
    return (
        <div className="container">
            <h1 className="service-name">Pricing</h1>
            <h2 className="fw-bold fs-5">We offer low price for any medical test</h2>
            <p className="fw-bold">Nothing in this world is more precious than your health. To preserve this, a timely health check-up should be undertaken</p>
            <div className="row mb-5">
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title className="fw-bold text-design">Basic</Card.Title>
    <Card.Text>
      <h1 className="fw-bold service-name">$100</h1>
      <p>Per Month</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Blood Sugar Fasting</ListGroupItem>
    <ListGroupItem>Urine Routine</ListGroupItem>
    <ListGroupItem>Lipid Profile</ListGroupItem>
    <Card.Body>
        <button className="details-btn">Get Started</button>
    </Card.Body>
  </ListGroup>
</Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title className="fw-bold text-design">Advanced</Card.Title>
    <Card.Text>
      <h1 className="fw-bold service-name">$300</h1>
      <p>Per Month</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Blood Sugar Fasting</ListGroupItem>
    <ListGroupItem>Urine Routine</ListGroupItem>
    <ListGroupItem>Lipid Profile</ListGroupItem>
    <Card.Body>
        <button className="details-btn">Get Started</button>
    </Card.Body>
  </ListGroup>
</Card>
                </div>
                <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title className="fw-bold text-design">Premium</Card.Title>
    <Card.Text>
      <h1 className="fw-bold service-name">$500</h1>
      <p>Per Month</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Blood Sugar Fasting</ListGroupItem>
    <ListGroupItem>Urine Routine</ListGroupItem>
    <ListGroupItem>Lipid Profile</ListGroupItem>
    <Card.Body>
        <button className="details-btn">Get Started</button>
    </Card.Body>
  </ListGroup>
</Card>
                </div>
            </div>
        </div>
    );
};

export default Price;