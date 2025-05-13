"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const WorldNews = () => {
    return (<div className="grid grid-cols-4 gap-3 mt-5">
      <div>
        <link_1.default href="#">
          <div className="card rounded-none shadow-sm">
            <figure>
              <image_1.default src="/images/news-1.webp" alt="Shoes" height={300} width={300} priority/>
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
              <image_1.default src="/images/news-1.webp" alt="Shoes" height={300} width={300} priority/>
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
              <image_1.default src="/images/news-1.webp" alt="Shoes" height={300} width={300} priority/>
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
              <image_1.default src="/images/news-1.webp" alt="Shoes" height={300} width={300} priority/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                মুন্সীগঞ্জে ইরি-বোরো মাঠে সবুজের সমারোহ
              </h2>
            </div>
          </div>
        </link_1.default>
      </div>
    </div>);
};
exports.default = WorldNews;
