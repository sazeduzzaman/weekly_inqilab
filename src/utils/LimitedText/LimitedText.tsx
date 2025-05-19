import React from "react";

interface LimitedTextProps {
  htmlContent: string;
  wordLimit: number;
  className?: string;
}

export default function LimitedText({
  htmlContent,
  wordLimit,
  className,
}: LimitedTextProps) {
  // Strip tags and limit words
  function limitWordsFromHtml(html: string, limit: number) {
    const text = stripHtmlTags(html);
    const words = text.split(/\s+/).filter(Boolean);
    const limited = words.slice(0, limit).join(" ");
    return words.length > limit ? limited + "…" : limited;
  }

  function stripHtmlTags(html: string) {
    return html.replace(/<[^>]*>/g, " ");
  }

  const previewText = limitWordsFromHtml(htmlContent, wordLimit);

  return <div className={className}>{previewText}</div>;
}
