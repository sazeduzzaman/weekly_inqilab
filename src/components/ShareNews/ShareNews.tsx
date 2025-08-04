"use client";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

interface ShareNewsProps {
  url: string;
  title?: string;
}

const ShareNews: React.FC<ShareNewsProps> = ({ url, title }) => {
  return (
    <div className="flex items-center gap-3 ms-2">
      <FacebookShareButton url={url} title={title}>
        <div title="ফেসবুক এ শেয়ার করুন">
          <FacebookIcon size={32} round />
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <div title="টুইটার এ শেয়ার করুন">
          <TwitterIcon size={32} round />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <div title="লিঙ্কডিন এ শেয়ার করুন">
          <LinkedinIcon size={32} round />
        </div>
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <div title="ইনস্টাগ্রাম এ শেয়ার করুন">
          <TelegramIcon size={32} round />
        </div>
      </TelegramShareButton>
      <WhatsappShareButton url={url} title={title}>
        <div title="ওয়াটসএপ এ শেয়ার করুন">
          <WhatsappIcon size={32} round />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareNews;
