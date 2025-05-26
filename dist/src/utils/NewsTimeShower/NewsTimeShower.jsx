"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NewsTimeShower = ({ newsTime }) => {
    const formatNewsTime = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return "Invalid Date";
        }
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMins / 60);
        const isToday = date.toDateString() === now.toDateString();
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        const isYesterday = date.toDateString() === yesterday.toDateString();
        if (isToday) {
            if (diffMins < 60)
                return `${diffMins} মিনিট আগে`;
            return `${diffHours} ঘন্টা আগে`;
        }
        if (isYesterday)
            return "গতকাল";
        // Older than yesterday → full date in Bangla
        return date.toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "Asia/Dhaka",
        });
    };
    return <>{formatNewsTime(newsTime)}</>;
};
exports.default = NewsTimeShower;
