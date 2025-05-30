"use client"

import React, { useState } from "react";
import { LuDoorOpen } from "react-icons/lu";
import { toast } from "react-hot-toast";

const FormItems = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValues;

    if (email && password) {
      console.log("Login data:", formValues);
      toast.success("লগইন সফল হয়েছে!");
    } else {
      toast.error("ইমেইল এবং পাসওয়ার্ড দিন!");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ইমেইল
        </label>
        <input
          type="email"
          name="email"
          placeholder="আপনার ইমেইল লিখুন"
          value={formValues.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          পাসওয়ার্ড
        </label>
        <input
          type="password"
          name="password"
          placeholder="আপনার পাসওয়ার্ড লিখুন"
          value={formValues.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <button
        type="submit"
        className="drawer-button btn btn-black px-5 py-5 search-menu w-full flex items-center justify-center gap-2"
      >
        লগইন করুন <LuDoorOpen size={24} />
      </button>
    </form>
  );
};

export default FormItems;
