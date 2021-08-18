import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

function Contact() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const message = watch("message") || "";
  const messageCharsLeft = 2000 - message.length;

  return (
    <div>
      <h1 className="contact-me">Contact Me</h1>
      <form id="form" className="topBefore" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          name="name"
          type="text"
          {...register("name", { required: true })}
          maxLength="30"
          placeholder="NAME"
        />
        <input
          id="email"
          name="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="E-MAIL"
        />
        <textarea
          id="message"
          name="message"
          type="text"
          {...register("message", { required: true })}
          maxLength="2000"
          placeholder="MESSAGE"
        ></textarea>
        <p className="message-chars-left">{messageCharsLeft}</p>
        <br />
        <input id="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
