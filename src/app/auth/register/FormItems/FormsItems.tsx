"use client"

import React, { useState } from "react";
import { LuDoorOpen } from "react-icons/lu";
import { toast } from "react-hot-toast";

const FormsItems = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, password } = formValues;

    if (name && email && phone && password) {
      console.log("Submitted data:", formValues);
      toast.success("রেজিস্ট্রেশন সফল হয়েছে!");
    } else {
      toast.error("অনুগ্রহ করে সব ঘর পূরণ করুন!");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="আপনার পুরো নাম"
        value={formValues.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="আপনার ইমেইল"
        value={formValues.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-md"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="ফোন নাম্বার"
        value={formValues.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-md"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="পাসওয়ার্ড"
        value={formValues.password}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-md"
        required
      />
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-md"
      >
        নিবন্ধন করুন <LuDoorOpen size={24} />
      </button>
    </form>
  );
};

export default FormsItems;
