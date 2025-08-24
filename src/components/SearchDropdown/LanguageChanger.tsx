"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function setGoogleCookie(targetLang: string) {
  const value = `/auto/${targetLang}`;
  document.cookie = `googtrans=${value}; path=/; max-age=31536000`;
}

const languages = [
  { code: "bn", label: "বাংলা", flag: "bd" }, // flag-icons uses ISO 3166-1 alpha-2 codes
  { code: "es", label: "Español", flag: "es" },
  { code: "fr", label: "Français", flag: "fr" },
  { code: "en", label: "English", flag: "gb" },
];

export default function LanguageChanger() {
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState("bn"); // default to Bengali
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const sel = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;
      if (sel) setReady(true);
    };
    check();
    const id = setInterval(check, 300);
    return () => clearInterval(id);
  }, []);

  const applyLanguage = (target: string) => {
    const sel = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (!sel) return;

    if (target === "bn") {
      sel.value = "";
      sel.dispatchEvent(new Event("change"));
      setGoogleCookie("/auto/bn");

      setTimeout(() => {
        sel.value = "bn";
        sel.dispatchEvent(new Event("change"));
        setGoogleCookie("bn");
      }, 300);
    } else {
      sel.value = target;
      sel.dispatchEvent(new Event("change"));
      setGoogleCookie(target);
    }

    const banner = document.querySelector(
      ".goog-te-banner-frame"
    ) as HTMLElement | null;
    if (banner) banner.style.display = "none";
    document.body.style.top = "0px";
  };

  const handleSelect = (code: string) => {
    setLang(code);
    applyLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex justify-between items-center w-full ms-1 capitalize text-sm bg-transparent text-red-500 border border-red-600 rounded-lg p-2 shadow hover:bg-red-600 hover:text-white focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <span
            className={`fi fi-${
              languages.find((l) => l.code === lang)?.flag
            } fis`}
          />
          {languages.find((l) => l.code === lang)?.label}
        </span>
        <FaChevronDown className="text-gray-500" />
      </button>

      {open && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-red-600 rounded-sm shadow-lg z-50">
          {languages.map((l) => (
            <li
              key={l.code}
              className="cursor-pointer hover:bg-gray-100 px-3 py-2 flex items-center gap-2 capitalize text-sm"
              onClick={() => handleSelect(l.code)}
            >
              <span className={`fi fi-${l.flag} fis`} />
              <span>{l.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
