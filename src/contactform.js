import React, { useState } from "react";

import './App.css';

const ContactForm = () => {

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://glacial-garden-61233.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8;x-www-form-urlencoded",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
 
  return (
    <div  style={{ display:'flex', justifyContent:'center'}} className="contact"> 
      

    <header className="App-header">
    <p className="Paragraph3">Hatchet Press is currently looking for vendor events and opportunities. </p> 
    <form form-name="Submission" onSubmit={handleSubmit} netlify>
      <div  className="">
        <label className="Paragraph" htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div  className="">
        <label className="Paragraph" htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div  className="">
        <label className="Paragraph" htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      
      <button type="submit">{status}</button>
    </form>
    </header>
    </div>
  );
};

export default ContactForm;