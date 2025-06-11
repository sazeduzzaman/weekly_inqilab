"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface Suggestion {
  title: string;
  image: string;
  bangla_title: string;
  slug: string;
  category_name: string;
  subCategory_name: string;
  subCategory_bangla_name: string;
}

const SearchDropdownCanvas = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim()) {
        setFilteredSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://admin.weeklyinqilab.com/api/v1/search?query=${encodeURIComponent(
            query
          )}`
        );
        const data = await res.json();

        const suggestions = Array.isArray(data?.data)
          ? data.data.map((item: any) => ({
              title: item?.title || "No title",
              image: item?.thumbnail || "/images/placeholderImage.webp",
              bangla_title: item?.bangla_title || "No Bangla Title",
              slug: item?.slug || "",
              category_name: item?.category_name || "uncategorized",
              subCategory_name: item?.subCategory_name || "",
              subCategory_bangla_name: item?.subCategory_bangla_name || "",
            }))
          : [];

        setFilteredSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setFilteredSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (item: Suggestion) => {
    setQuery("");
    setFilteredSuggestions([]);
    // Add drawer close logic here if you have a drawer state
    router.push(
      `/details/${item.category_name ?? "uncategorized"}/${item.slug}`
    );
  };

  return (
    <div className="relative z-50 mt-3 mx-5 w-58 flex justify-end right-0 items-end">
      <div className="w-64">
        <label className="input bg-gray-300 flex items-center gap-2 px-2 rounded">
          <svg
            className="h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow bg-transparent outline-none"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        {loading && (
          <div className="mt-1 text-sm text-gray-500">Loading...</div>
        )}

        {(filteredSuggestions.length > 0 || (!loading && query.trim())) && (
          <ul className="absolute w-full mt-1 bg-white border-0 shadow-lg rounded z-50 max-h-60 overflow-auto">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  <Image
                    src={item.image ?? "/images/placeholderImage.webp"}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-[14px] hover:text-red-700">
                    {item.title}
                  </span>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchDropdownCanvas;
