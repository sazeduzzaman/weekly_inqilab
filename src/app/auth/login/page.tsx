"use client";
import React from "react";
import { LuDoorOpen } from "react-icons/lu";

const FormsItems = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");

    const payload = { name, email, phone, password };

    try {
      const res = await fetch("https://v2.weeklyinqilab.com/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken || "", // or the required header name from your backend
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert("নিবন্ধন সফল হয়েছে!");
        form.reset();
      } else {
        alert("নিবন্ধন ব্যর্থ হয়েছে: " + result.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("সার্ভার ত্রুটি হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          নাম
        </label>
        <input
          type="text"
          placeholder="আপনার পুরো নাম"
          name="name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ইমেইল
        </label>
        <input
          type="email"
          name="email"
          placeholder="আপনার ইমেইল লিখুন"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ফোন নাম্বার
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="আপনার ফোন নাম্বার লিখুন"
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
          placeholder="একটি নিরাপদ পাসওয়ার্ড দিন"
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>
      <button
        type="submit"
        className="drawer-button btn btn-black px-5 py-5 search-menu w-100"
      >
        নিবন্ধন করুন <LuDoorOpen size={30} />
      </button>
    </form>
  );
};

export default FormsItems;
