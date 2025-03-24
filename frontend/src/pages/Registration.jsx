import React, { useState } from "react";
import { Button, Form, Container, Toast, ToastContainer } from "react-bootstrap";
import BASE_URL from "../config";
import axios from "axios";

const Registration = () => {
  const [input, setInput] = useState({});
  const [showToast, setShowToast] = useState(false); 

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = `${BASE_URL}/user/registration`;
    try {
      let res = await axios.post(api, input);
      setShowToast(true); 
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        className="text-center"
        style={{ marginBottom: "20px", color: "#333" }}
      >
        Bank Account Registration
      </h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            style={{ borderRadius: "5px" }}
            name="name"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ borderRadius: "5px" }}
            name="email"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            style={{ borderRadius: "5px" }}
            name="phone"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            style={{ borderRadius: "5px" }}
            name="address"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            style={{ borderRadius: "5px" }}
            name="city"
            onChange={changeHandler}
          />
        </Form.Group>

        <Button
          variant="success"
          style={{
            width: "100%",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={submitHandler}
        >
          Submit Application
        </Button>
      </Form>


      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">
            🎉 Account created successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Registration;
