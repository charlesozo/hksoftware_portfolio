import React, { useContext, useRef, useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';

import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const phoneNumber = '+916372271190'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const myEmail = "hksoftware00@gmail.com"
  const form = useRef();
  const [done, setDone] = useState(false)
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_2mu5xtl",
  //       "template_m5udu2c",
  //       form.current,
  //       "VLwg1ltOWvnCYAiK_"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="whatsapp">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        data-tip="Contact via WhatsApp"
      >
        <FaWhatsapp />
      </a>
       </div>
      
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact Us </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form action={`mailto:${myEmail}?subject=Feedback%20from%20Website`} method="post">
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input  type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
