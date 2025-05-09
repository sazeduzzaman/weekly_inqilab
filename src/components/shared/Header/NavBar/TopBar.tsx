import SocialLinks from "@/components/SocialLinks/SocialLinks";
import CurrentTimeShower from "@/utils/CurrentTimeShower/CurrentTimeShower";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-site-secondary py-2 top-bar">
      <div className="container mx-auto px-4">
        {/* Grid layout for larger screens and stacking on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {/* Time and Date */}
          <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-1">
            <CurrentTimeShower />
          </div>

          {/* Address */}
          <div className="flex items-center justify-center md:justify-center col-span-1 md:col-span-1 text-center md:text-left">
            <span className="eng-font text-sm md:text-base">
              <Link
                href="mailto:info@weeklyinqilab.com"
                aria-label="Send an email to info@weeklyinqilab.com"
              >
                info@weeklyinqilab.com
              </Link>
              <span className="pl-1">||</span> 101-Avenue, Ozone Park, NY,
              11416, USA
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end col-span-1 md:col-span-1">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
