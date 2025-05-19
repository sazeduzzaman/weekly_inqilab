import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";

const FirstSidebar = () => {
  return (
    <div className="mt-4">
      <SectionTitle title="আমাদের সম্পর্কে" />
      <div className="card rounded-none shadow-sm p-5 mb-5">
        <figure className="flex justify-center">
          <Image src="/favicon.ico" alt="Logo" width={200} height={200} />
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
          <Image
            src="/images/ads2-768x528.webp"
            alt="Advertisement"
            width={768}
            height={528}
            layout="responsive"
          />
        </figure>
        <Link href="#">
          <h1 className="text-center pt-10 text-3xl site-text-secondary ">
            আমাদের ইপেপার
          </h1>
          <figure className="border border-red-700">
            <Image
              src="/images/epaper/1.jpg"
              alt="Epaper Preview"
              width={400}
              height={300}
              layout="responsive"
            />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default FirstSidebar;
