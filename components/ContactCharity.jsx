import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactCharity = ({ setClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1u3btdr",
        "template_tu8rh9h",
        form.current,
        "xDa9uKVGz-68vHayy"
      )
      .then(
        (result) => {
          console.log(result.text);
          {
            setClose(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactCharity;
