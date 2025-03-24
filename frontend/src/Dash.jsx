import React from "react";
import { Outlet } from "react-router-dom";
import DashHead from "./components/DashHead";
import DashBoard from "./DashBoard";
import { Container, Row, Col } from "react-bootstrap";

const Dash = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <DashBoard />
        </Col>
      </Row>

   
      <Row>
       
        <Col xs={4} md={3} className="p-3 bg-light vh-100">
          <DashHead />
        </Col>


        <Col xs={8} md={9} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dash;
