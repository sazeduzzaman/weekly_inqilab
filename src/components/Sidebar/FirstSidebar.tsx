import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "next/link";

const FirstSidebar = () => {
  return (
    <div>
      <div className="card rounded-none shadow-sm p-5">
        <figure>
          <img src="/favicon.ico" alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center items-center text-center">
          <h1>আর জানতে</h1>
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="card rounded-none shadow-sm">
        <figure>
          <img src="/images/ads2-768x528.webp" alt="Shoes" />
        </figure>
        <Link href="#">
          <h1 className="text-center pt-4 text-3xl site-text-secondary">
            আমাদের ইপেপার
          </h1>
          <figure>
            <img src="/images/epaper/1.jpg" alt="Shoes" />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default FirstSidebar;
