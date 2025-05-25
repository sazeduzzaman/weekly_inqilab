import React from "react";
import { LuDoorOpen } from "react-icons/lu";

const FormsItems = () => {
  return (
    <form className="space-y-5">
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
