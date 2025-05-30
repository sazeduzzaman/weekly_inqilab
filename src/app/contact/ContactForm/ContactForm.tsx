"use client";
import React from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    toast.success("Message sent successfully!");
    e.currentTarget.reset();
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1">
      <form noValidate className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-sm">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 border rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8901"
            className="w-full p-3 border rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="Write your message here..."
            className="w-full p-3 border rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-black px-5 py-3 search-menu">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
