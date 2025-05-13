"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SectionTitle_1 = __importDefault(require("@/components/SectionTitle/SectionTitle"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const FeaturesItems = () => {
    return (<div className="container mx-auto mt-5 mb-6">
      <div>
        <SectionTitle_1.default title="বৈশিষ্ট্য"/>
      </div>
      <div className="grid grid-cols-6 gap-3">
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
        <div>
          <link_1.default href="#">
            <div className="card rounded-none shadow-sm">
              <figure>
                <image_1.default src="/images/news-1.webp" alt="Shoes" height={250} width={250} priority/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
                </h2>
              </div>
            </div>
          </link_1.default>
        </div>
      </div>
    </div>);
};
exports.default = FeaturesItems;
