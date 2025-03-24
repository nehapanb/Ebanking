import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="hero-section text-center text-white" style={{ background: "rgba(0, 0, 139, 0.8)", padding: "100px 0" }}>
      <Container>
        <h1>Our Worldwide Integration Partner Work With Long Time Relationship</h1>
        <p>
          Consectetur adipisicing elit. Fuga nostrum dicta labor dolor emque laboriosam facilis
          voluptatem debitis aliquam qui explicabo a, hic ullam tempora obcaecati.
        </p>
        <Button variant="primary">Find Out More</Button>
      </Container>
    </div>
    <footer className="text-white py-5" style={{ background: "#111" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>🏦 Easy Cash</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui repellat nam vero
              consectetur dicta eos suscipit.
            </p>
          </Col>
          <Col md={2}>
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>How it Works</li>
              <li>Guarantee</li>
              <li>Security</li>
              <li>Our Story</li>
              <li>Contact us</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Solution</h5>
            <ul className="list-unstyled">
              <li>Car Loan</li>
              <li>Personal Loan</li>
              <li>Education Loan</li>
              <li>Business Loan</li>
              <li>Home Loan</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Need Help?</h5>
            <ul className="list-unstyled">
              <li>Find a branch</li>
              <li>FAQs</li>
              <li>APR</li>
              <li>Contact us</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center">© 2020 Easy Cash. All rights reserved | Designed by W3Layouts</p>
      </Container>
    </footer>
    </>
  )
}

export default Footer