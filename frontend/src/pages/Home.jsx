import React from 'react'
import Carousel from 'react-bootstrap/Carousel'; 
import { Container, Row, Col, Card } from "react-bootstrap";   
const Home = () => {
  return (
    <>
     <Carousel>
      <Carousel.Item>
<img src="./cro1.jpg" alt="image" width="100%" height="500px" />
      </Carousel.Item>
      <Carousel.Item>
<img src="./cro2.png" alt="image" width="100%" height="500px"/>
        
      </Carousel.Item>
      <Carousel.Item>
<img src="./cro3.jpg" alt="image" width="100%" height="500px" />
      </Carousel.Item>
    </Carousel>
    <br />
    <Container className="my-5">
      <h2 className="fw-bold">Making Internet A Brand New Experience</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit
        illo modi aut aspernatur tempore laboriosam saepe dolores eveniet.
      </p>
      <Row className="mt-4">
        {[
          { icon: "💻", title: "Online Business" },
          { icon: "👍", title: "Business Plan" },
          { icon: "📱", title: "Mobile Bank" },
          { icon: "💰", title: "Online Deposit" },
        ].map((feature, index) => (
          <Col md={3} key={index}>
            <Card className="text-center p-3 shadow-sm">
              <h2>{feature.icon}</h2>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>
                Vivamus a ligula quam. Duis feugiat tortor sed Ut blandit.
              </Card.Text>
              <a href="#" className="text-primary text-decoration-none">
                Read More
              </a>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5 align-items-center">
        <Col md={6}>
          <h5 className="fw-bold">Progressive Percentage</h5>
          <p className="text-muted">
            Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
            provident Rem adipisci Mollitia placeat modi.
          </p>
          <h5 className="fw-bold">Easy Documentation</h5>
          <p className="text-muted">
            Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
            provident Rem adipisci Mollitia placeat modi.
          </p>
          <h5 className="fw-bold">Competitive Percentage</h5>
          <p className="text-muted">
            Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
            provident Rem adipisci Mollitia placeat modi.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="./b1.jpg"
            alt="Savings"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
      </Row>
    </Container>
    <br />
    <Container className="my-5">
      <Row className="text-center mb-4">
        {[
          { icon: "🤝", title: "Innovative Solutions" },
          { icon: "🛡️", title: "Best Support" },
          { icon: "🔄", title: "On Time Services" },
        ].map((feature, index) => (
          <Col md={4} key={index}>
            <Card className="p-3 shadow-sm">
              <h2>{feature.icon}</h2>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>
                Assumenda temporibus quidem ipsam. Voluptate fuga corporis iusto
                similique voluptates sint quibusdam.
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="fw-bold mt-5">Making The Best Out Of Your Income</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit
        illo modi aut aspernatur tempore laboriosam saepe dolores eveniet.
      </p>
      <Row className="mt-4">
        {[
          {
            img: "./cro1.jpg",
            title: "Money Protection",
          },
          {
            img: "./cro2.png",
            title: "Growth Guaranteed",
          },
          {
            img: "./cro3.jpg",
            title: "Business Support",
          },
        ].map((item, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet itaque labor.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default Home