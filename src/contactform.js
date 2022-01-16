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
        "Content-Type": "application/json;charset=utf-8",
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
    <p className="Paragraph3">Hatchet Press is dedicated to the pursuit of Art, because I believe it helps establish the more obliuqe lines that help define us as people. 
        It's always been hard for me to not see Art as work. It is the work of artist who along with functionality 
        help us move cultures foward and challenge the direction and motives of progress in a way that we can consider a worthy motive. </p> 
    <form className="" onSubmit={handleSubmit}>
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