// components/MetaData/Meta.tsx
import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

export default function Meta({ title, description, image, url, type }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
