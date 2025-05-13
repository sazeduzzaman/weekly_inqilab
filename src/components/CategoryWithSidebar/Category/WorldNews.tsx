import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorldNews = () => {
  return (
    <div className="grid grid-cols-4 gap-3 mt-5">
      <div>
        <Link href="#">
          <div className="card rounded-none shadow-sm">
            <figure>
              <Image
                src="/images/news-1.webp"
                alt="Shoes"
                height={300}
                width={300}
                priority
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="#">
          <div className="card rounded-none shadow-sm">
            <figure>
              <Image
                src="/images/news-1.webp"
                alt="Shoes"
                height={300}
                width={300}
                priority
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="#">
          <div className="card rounded-none shadow-sm">
            <figure>
              <Image
                src="/images/news-1.webp"
                alt="Shoes"
                height={300}
                width={300}
                priority
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href="#">
          <div className="card rounded-none shadow-sm">
            <figure>
              <Image
                src="/images/news-1.webp"
                alt="Shoes"
                height={300}
                width={300}
                priority
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorldNews;
