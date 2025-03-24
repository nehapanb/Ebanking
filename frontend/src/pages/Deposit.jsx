import React, { useState } from "react";
import BASE_URL from "../config";
import axios from "axios";

const Deposit = () => {
    const[amount  ,setAmount] = useState("")
    const customerid = localStorage.getItem("id")
  const handleSubmit = async(e)=>{
         e.preventDefault()
         let api = `${BASE_URL}/user/transaction`
         const res =await axios.post(api , {amount : amount , status : "credited" ,customerid : customerid })
         console.log(res.data)
         alert("Amount credited successfully")
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      padding: "10px",
      fontSize: "18px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "250px",
      marginBottom: "15px",
      textAlign: "center",
    },
    button: {
      backgroundColor: "#28a745",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "18px",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#218838",
    },
    label: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Enter Deposite Amount:</label>
      <input type="number" style={styles.input}   value={amount} name="amount" placeholder="Enter amount"  onChange={(e)=>setAmount(e.target.value)}   />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={handleSubmit}
      >
        Deposit Amount
      </button>
    </div>
  );
};

export default Deposit;
