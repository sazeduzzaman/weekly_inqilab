"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocialLinks_1 = __importDefault(require("@/components/SocialLinks/SocialLinks"));
const CurrentTimeShower_1 = __importDefault(require("@/utils/CurrentTimeShower/CurrentTimeShower"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const TopBar = () => {
    return (<div className="bg-site-secondary py-2 top-bar">
      <div className="container mx-auto px-4">
        {/* Grid layout for larger screens and stacking on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {/* Time and Date */}
          <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-1">
            <CurrentTimeShower_1.default />
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-center col-span-1 md:col-span-1 text-center md:text-left">
            <span className="eng-font text-sm md:text-base">
              <link_1.default href="mailto:info@weeklyinqilab.com" aria-label="Send an email to info@weeklyinqilab.com">
                info@weeklyinqilab.com
              </link_1.default>
              <span className="pl-1">||</span> 101-Avenue, Ozone Park, NY,
              11416, USA
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end col-span-1 md:col-span-1">
            <SocialLinks_1.default />
          </div>
        </div>
      </div>
    </div>);
};
exports.default = TopBar;
