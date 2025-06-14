import React from "react";

interface NewsTimeProps {
  newsTime?: string | null;
}

const NewsTimeShower: React.FC<NewsTimeProps> = ({ newsTime }) => {
  const toBengaliDigits = (input: number | string): string => {
    return input
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit)]);
  };

  const formatNewsTime = (rawDate?: string | null): string => {
    if (!rawDate || typeof rawDate !== "string") return "তারিখ পাওয়া যায়নি";

    const timeZone = "Asia/Dhaka";
    const isoString = rawDate.replace(" ", "T") + "+06:00";
    const date = new Date(isoString);
    const now = new Date();

    if (isNaN(date.getTime())) return "অবৈধ তারিখ";

    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);

    const formatDate = (d: Date): string =>
      new Intl.DateTimeFormat("en-CA", {
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
      if (diffMins < 60) return `${toBengaliDigits(diffMins)} মিনিট আগে`;
      if (diffHours <= 5) return `${toBengaliDigits(diffHours)} ঘন্টা আগে`;
      return "১ দিন আগে";
    }

    if (formattedDate === formattedYesterday) return "দিন আগে";

    return new Intl.DateTimeFormat("bn-BD", {
      timeZone,
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return <>{formatNewsTime(newsTime)}</>;
};

export default NewsTimeShower;
