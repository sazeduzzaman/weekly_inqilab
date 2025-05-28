"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NewsTimeShower = ({ newsTime }) => {
    const formatNewsTime = (rawDate) => {
        if (!rawDate || typeof rawDate !== "string")
            return "No date available";
        const timeZone = "Asia/Dhaka";
        // Convert "2025-05-28 04:14:03" to ISO with Dhaka offset
        const isoString = rawDate.replace(" ", "T") + "+06:00";
        const date = new Date(isoString);
        const now = new Date();
        if (isNaN(date.getTime()))
            return "Invalid Date";
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMins / 60);
        const formatDate = (d) => new Intl.DateTimeFormat("en-CA", {
            timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(d);
        const formattedNow = formatDate(now);
        const formattedDate = formatDate(date);
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedYesterday = formatDate(yesterday);
        if (formattedNow === formattedDate) {
            if (diffMins < 60)
                return `${diffMins} মিনিট আগে`;
            return `${diffHours} ঘন্টা আগে`;
        }
        if (formattedDate === formattedYesterday)
            return "গতকাল";
        return new Intl.DateTimeFormat("bn-BD", {
            timeZone,
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };
    return <>{formatNewsTime(newsTime)}</>;
};
exports.default = NewsTimeShower;
