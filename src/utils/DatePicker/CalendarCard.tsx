// CalendarCard.tsx
"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarCard = ({ date, onChange }:any) => {
  return <Calendar className="border-none" onChange={onChange} value={date} />;
};

export default CalendarCard;
