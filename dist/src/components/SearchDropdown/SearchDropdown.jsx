"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchDropdown;
const react_1 = require("react");
function SearchDropdown() {
    const [query, setQuery] = (0, react_1.useState)("");
    const [results, setResults] = (0, react_1.useState)([
        // Sample static data, replace with fetched results
        "Apple",
        "Banana",
        "Cherry",
    ]);
    const [showDropdown, setShowDropdown] = (0, react_1.useState)(false);
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowDropdown(!!value);
        // Optional: fetch data here
    };
    console.log(setResults, "setResults");
    return (<div className="relative w-full">
      <div className="relative w-full">
        <label className="input sm:h-7 md:h-13 lg:h-13 bg-gray-200 border shadow-sm w-full flex items-center gap-2 px-2 pr-8">
          <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" value={query} onChange={handleChange} className="grow w-full bg-gray-200 focus:outline-none hide-clear-icon" placeholder="Search"/>

          {/* Clear Icon */}
          {query && (<button type="button" onClick={() => {
                setQuery("");
                setShowDropdown(false);
            }} className="absolute right-2 text-black hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>)}
        </label>
      </div>

      {showDropdown && results.length > 0 && (<ul className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-md max-h-60 overflow-y-auto">
          {results.map((item, index) => (<li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                    setQuery(item);
                    setShowDropdown(false);
                }}>
              {item}
            </li>))}
        </ul>)}
    </div>);
}
