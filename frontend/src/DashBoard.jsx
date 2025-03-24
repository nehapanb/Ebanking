import React, { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
const navigate = useNavigate()
const logout = ()=>{
  navigate("/login")
  localStorage.clear()
}
const loadData = ()=>{
  if(!localStorage.getItem("name"))
  {
    navigate("/login")
  }
}
useEffect(()=>{
  loadData()
},[])
  return (
    <Navbar bg="primary" variant="dark" className="fixed-top">
      <Container className="text-center w-100">
        <h5 className="m-0 text-white">Welcome, {name}</h5>
        <p className="m-0 text-white">{email}</p>
        <div> 
           <Button variant="info" onClick={logout}>Logout</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default DashBoard;
