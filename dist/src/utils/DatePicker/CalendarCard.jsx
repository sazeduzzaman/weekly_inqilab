"use strict";
// CalendarCard.tsx
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_calendar_1 = __importDefault(require("react-calendar"));
require("react-calendar/dist/Calendar.css");
const CalendarCard = ({ date, onChange }) => {
    return <react_calendar_1.default className="border-none" onChange={onChange} value={date}/>;
};
exports.default = CalendarCard;
