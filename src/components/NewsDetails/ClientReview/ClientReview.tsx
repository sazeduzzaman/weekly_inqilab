import React from "react";
import { DiscussionEmbed } from "disqus-react";

const ClientReview = ({ slug, title }: any) => {
  const disqusShortname = "weeklyinqilab"; // Your Disqus shortname

  const disqusConfig = {
    url: `https://weekly-inqilab.vercel.app/details/${slug}`, // Full canonical URL of the article
    identifier: slug, // A unique identifier for the article
    title: title, // Article title
    language: "bn", // Optional: Bengali language
  };

  return (
    <div className="mt-10">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default ClientReview;
