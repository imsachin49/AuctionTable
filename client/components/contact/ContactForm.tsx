"use client";
import React, { useState } from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactInput
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
      />
      <ContactInput
        type="text"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
      />
      <ContactInput
        type="text"
        name="phone"
        placeholder="Your Phone"
        onChange={handleChange}
      />
      <ContactTextArea
        row={3}
        placeholder="Your Message"
        name="details"
        defaultValue=""
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full rounded-lg border bg-indigo-600 p-2 text-white transition hover:bg-opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
