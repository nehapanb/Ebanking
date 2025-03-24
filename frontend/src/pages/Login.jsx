import React, { useState } from "react";
import { Button, Form, Container, Toast, ToastContainer } from "react-bootstrap";
import BASE_URL from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({});
    const [showToast, setShowToast] = useState(false); 
  const navigate = useNavigate()
    const changeHandler = (e) => {
      let { name, value } = e.target;
      setInput({
        ...input,
        [name]: value,
      });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const api = `${BASE_URL}/user/login`;
      try {
        let res = await axios.post(api, input);
        localStorage.setItem("name" , res.data.name)
        localStorage.setItem("email" , res.data.email)
        localStorage.setItem("id" , res.data._id)
        navigate("/dash")
        setShowToast(true); 


      } catch (error) {
        console.log(error);
      }
    };
  return (
  <>
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
        Account Holder's Login
      </h2>
      <Form>
       

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
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password here"
            style={{ borderRadius: "5px" }}
            name="password"
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
          Login
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
            🎉 Logged in successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>

  </>
  )
};

export default Login;
