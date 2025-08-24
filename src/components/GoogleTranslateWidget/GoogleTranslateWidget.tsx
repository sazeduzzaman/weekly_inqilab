"use client";
import { useEffect } from "react";

const GT_SCRIPT_ID = "google-translate-script";
const WIDGET_CONTAINER_ID = "google_translate_element";

// Change this to your site's original language
const PAGE_LANGUAGE = "bn"; // "en" if your site content is in English

export default function GoogleTranslateWidget() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: PAGE_LANGUAGE,
            includedLanguages: "en,bn,es,fr", // Add/remove as needed
            autoDisplay: false,
          },
          WIDGET_CONTAINER_ID
        );
      }
    };

    if (!document.getElementById(GT_SCRIPT_ID) && !window.__gt_script_loaded) {
      const script = document.createElement("script");
      script.id = GT_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        window.__gt_script_loaded = true;
      };
      document.head.appendChild(script);
    }
  }, []);

  return <div id={WIDGET_CONTAINER_ID} style={{ display: "none" }} />;
}
