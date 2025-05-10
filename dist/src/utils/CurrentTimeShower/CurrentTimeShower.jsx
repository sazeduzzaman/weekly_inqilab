"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CurrentTimeShower = () => {
    const [dateString, setDateString] = (0, react_1.useState)("");
    const engToBanglaNumber = (input) => {
        const numbers = {
            "0": "০",
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "৪",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯",
        };
        return input
            .toString()
            .split("")
            .map((char) => numbers[char] || char)
            .join("");
    };
    (0, react_1.useEffect)(() => {
        const updateDate = () => {
            const today = new Date();
            const banglaWeekdays = [
                "রবিবার",
                "সোমবার",
                "মঙ্গলবার",
                "বুধবার",
                "বৃহস্পতিবার",
                "শুক্রবার",
                "শনিবার",
            ];
            const banglaMonths = [
                "বৈশাখ",
                "জ্যৈষ্ঠ",
                "আষাঢ়",
                "শ্রাবণ",
                "ভাদ্র",
                "আশ্বিন",
                "কার্তিক",
                "অগ্রহায়ণ",
                "পৌষ",
                "মাঘ",
                "ফাল্গুন",
                "চৈত্র",
            ];
            const midDate = {
                0: 14, // January mid (পৌষ-মাঘ)
                1: 13, // February mid (মাঘ-ফাল্গুন)
                2: 15, // March mid (ফাল্গুন-চৈত্র)
                3: 14, // April mid (চৈত্র-বৈশাখ)
                4: 15, // May mid (বৈশাখ-জ্যৈষ্ঠ)
                5: 15, // June mid (জ্যৈষ্ঠ-আষাঢ়)
                6: 16, // July mid (আষাঢ়-শ্রাবণ)
                7: 16, // August mid (শ্রাবণ-ভাদ্র)
                8: 16, // September mid (ভাদ্র-আশ্বিন)
                9: 16, // October mid (আশ্বিন-কার্তিক)
                10: 15, // November mid (কার্তিক-অগ্রহায়ণ)
                11: 15, // December mid (অগ্রহায়ণ-পৌষ)
            };
            let banglaYear = today.getFullYear() - 593;
            const month = today.getMonth(); // 0 based
            const date = today.getDate();
            // Adjust Bangla year
            if (month < 3 || (month === 3 && date < 14)) {
                banglaYear -= 1;
            }
            let banglaMonthIndex = month - 3; // because Bengali year starts from April (index 0 is বৈশাখ)
            if (date < midDate[month]) {
                banglaMonthIndex -= 1;
            }
            if (banglaMonthIndex < 0)
                banglaMonthIndex += 12; // Adjust if negative
            let banglaDate = date - midDate[month] + 1;
            if (date < midDate[month]) {
                const prevMonth = (month - 1 + 12) % 12;
                const daysInPrevMonth = [
                    31,
                    today.getFullYear() % 4 === 0 ? 29 : 28,
                    31,
                    30,
                    31,
                    30,
                    31,
                    31,
                    30,
                    31,
                    30,
                    31,
                ];
                banglaDate =
                    daysInPrevMonth[prevMonth] - (midDate[prevMonth] - date) + 1;
            }
            const banglaDateFormatted = engToBanglaNumber(banglaDate);
            const banglaYearFormatted = engToBanglaNumber(banglaYear);
            const banglaFullDate = `আজ ${banglaDateFormatted} ${banglaMonths[banglaMonthIndex]}, ${banglaYearFormatted} বঙ্গাব্দ`;
            const weekday = banglaWeekdays[today.getDay()];
            const day = engToBanglaNumber(today.getDate());
            const monthEng = today.toLocaleString("bn-BD", { month: "long" });
            const yearEng = engToBanglaNumber(today.getFullYear());
            const englishDate = `${day} ${monthEng}, ${yearEng}`;
            const finalString = `${englishDate}, ${weekday}, ${banglaFullDate}`;
            setDateString(finalString);
        };
        // Update date immediately
        updateDate();
        // Set interval to update every minute
        const interval = setInterval(updateDate, 60000);
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (<>
      {dateString}
    </>);
};
exports.default = CurrentTimeShower;
