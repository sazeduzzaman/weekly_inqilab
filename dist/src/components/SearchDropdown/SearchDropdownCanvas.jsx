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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const react_1 = __importStar(require("react"));
const suggestions = [
    {
        title: "What did Erik and Lyle Menendez do and when could they be released?",
        image: "https://via.placeholder.com/40?text=A",
    },
    {
        title: "Watch: Crowds cheer as Pope holds first Sunday address",
        image: "https://via.placeholder.com/40?text=B",
    },
    {
        title: "Gaza parents desperate as children face starvation under Israeli blockade",
        image: "https://via.placeholder.com/40?text=C",
    },
    {
        title: "Military rulers in Mali dissolve all political parties",
        image: "https://via.placeholder.com/40?text=D",
    },
    {
        title: "Israeli strikes in northern Gaza kill at least 50, hospital says",
        image: "https://via.placeholder.com/40?text=E",
    },
];
const SearchDropdownCanvas = () => {
    const [query, setQuery] = (0, react_1.useState)("");
    const [filteredSuggestions, setFilteredSuggestions] = (0, react_1.useState)([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() === "") {
            setFilteredSuggestions([]);
        }
        else {
            const filtered = suggestions.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredSuggestions(filtered);
        }
    };
    const handleSelect = (value) => {
        // ✅ fix #2
        setQuery(value);
        setFilteredSuggestions([]);
    };
    return (<div className="relative z-50 mt-3 mx-5 w-58 flex justify-end right-0 items-end">
      <div className="w-64">
        <label className="input bg-gray-300 flex items-center gap-2 px-2 rounded">
          <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow bg-transparent outline-none" placeholder="Search" value={query} onChange={handleChange}/>
        </label>

        {filteredSuggestions.length > 0 && (<ul className="absolute w-full mt-1 bg-white border-0 shadow-lg rounded z-50 max-h-60 overflow-auto">
            {filteredSuggestions.map((item, index) => (<li key={index} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect(item.title)}>
                <image_1.default src={item.image} alt={item.title} width={50} height={50} className="w-8 h-8 rounded-full object-cover"/>
                <span className="text-[14px] hover:text-red-500">
                  {item.title}
                </span>
              </li>))}
          </ul>)}
      </div>
    </div>);
};
exports.default = SearchDropdownCanvas;
