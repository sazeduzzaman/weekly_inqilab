import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesItems = () => {
  return (
    <div className="container mx-auto mt-5 mb-6">
      <div>
        <SectionTitle title="বৈশিষ্ট্য" />
      </div>
      <div className="grid grid-cols-6 gap-3">
        <div>
          <Link href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <Image
                  src="/images/news-1.webp"
                  alt="Shoes"
                  height={250}
                  width={250}
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
                  height={250}
                  width={250}
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
                  height={250}
                  width={250}
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
                  height={250}
                  width={250}
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
                  height={250}
                  width={250}
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
                  height={250}
                  width={250}
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
    </div>
  );
};

export default FeaturesItems;
