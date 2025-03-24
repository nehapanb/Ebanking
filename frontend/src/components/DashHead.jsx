import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashHead = () => {
  return (
    <Container fluid
      className="d-flex flex-column justify-content-center align-items-start vh-100"
    >
      <Row className="w-100 d-flex flex-column align-items-start">
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-start">
          <Button variant="primary" className="w-75 py-3" as={Link} to="balance">
            Balance Inquiry
          </Button>
        </Col>
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-start">
          <Button variant="success" className="w-75 py-3" as={Link} to="deposit">
            Deposit Amount
          </Button>
        </Col>
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-start">
          <Button variant="warning" className="w-75 py-3" as={Link} to="withdraw">
            Withdraw Amount
          </Button>
        </Col>
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-start">
          <Button variant="info" className="w-75 py-3" as={Link} to="statement">
            Mini Statement
          </Button>
        </Col>
        <Col xs={12} md={6} className="mb-3 d-flex justify-content-start">
          <Button variant="danger" className="w-75 py-3">
            Reset Password
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DashHead;
