import React from "react";

interface NewsTimeProps {
  newsTime?: string | null;
}

const NewsTimeShower: React.FC<NewsTimeProps> = ({ newsTime }) => {
  const timeZone = "Asia/Dhaka";

  const toBengaliDigits = (input: number | string): string => {
    return input
      .toString()
      .replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[parseInt(digit)]);
  };

  const formatExactTime12Hour = (d: Date): string => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const parts = formatter.formatToParts(d);

    const hour = parts.find((p) => p.type === "hour")?.value || "0";
    const minute = parts.find((p) => p.type === "minute")?.value || "00";
    const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value || "";

    // Convert to Bengali numerals
    const bengaliTime = `${toBengaliDigits(hour)}:${toBengaliDigits(
      minute
    )} ${dayPeriod}`;

    return bengaliTime;
  };

  const formatNewsTime = (rawDate?: string | null): string => {
    if (!rawDate || typeof rawDate !== "string") return "তারিখ পাওয়া যায়নি";

    const utcDate = new Date(rawDate.replace(" ", "T") + "Z");
    const now = new Date();

    if (isNaN(utcDate.getTime())) return "অবৈধ তারিখ";

    const diffMs = now.getTime() - utcDate.getTime();
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
    const formattedDate = formatDate(utcDate);

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = formatDate(yesterday);

    if (formattedNow === formattedDate) {
      if (diffMins < 60) return `${toBengaliDigits(diffMins)} মিনিট আগে`;
      if (diffHours <= 5) return `${toBengaliDigits(diffHours)} ঘন্টা আগে`;
      return `আজ ${formatExactTime12Hour(utcDate)}`;
    }

    if (formattedDate === formattedYesterday) {
      return "গতকাল";
    }

    return new Intl.DateTimeFormat("bn-BD", {
      timeZone,
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(utcDate);
  };

  return <>{formatNewsTime(newsTime)}</>;
};

export default NewsTimeShower;
