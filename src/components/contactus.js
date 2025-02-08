import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_urrxho2", "template_mwchvbn", form.current, {
        publicKey: "yVkNMAgbOwN51nbCv",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <p className="text-black font-bold text-4xl flex justify-start m-10">
        Contact Us
      </p>
      <div className="flex flex-col justify-center w-4/5 mx-auto items-center mt-24 px-4">
        <p className="text-cyan">{success}</p>
        <form
          className="flex flex-col gap-4 w-3/4 text-black"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            name="from_name"
            type="text"
            placeholder="Please Enter Your Name"
            required
            className="h-12 rounded-lg bg-snow border border-black px-2"
            value={name}
            onChange={handleName}
          />
          <input
            name="from_email"
            type="email"
            placeholder="Please Enter Your Email"
            required
            className="h-12 rounded-lg bg-snow border border-black px-2"
            value={email}
            onChange={handleEmail}
          />
          <textarea
            name="message"
            id="textarea"
            type="text"
            placeholder="Please Enter Your Message"
            rows="9"
            cols="50"
            required
            className="rounded-lg bg-snow border border-black p-2"
            value={message}
            onChange={handleMessage}
          />
          <button
            type="Submit"
            className="rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-cyan-700 bg-cyan-500 transition-all duration-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
