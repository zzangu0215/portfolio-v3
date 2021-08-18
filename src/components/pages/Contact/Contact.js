import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="contact-me">Contact Me</h1>
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="NAME" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="GO!" />
      </form>
    </div>
  );
}

export default Contact;
