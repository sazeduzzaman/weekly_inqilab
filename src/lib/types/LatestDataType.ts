// app/types.ts

export interface LatestNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  title_img?: string;
  thumbnail_img?: string;
  news_time?: string;
  category_name?: string;
  title?: string;
  slug?: string;
}

export interface LatestNewsListProps {
  latestItems: LatestNewsData[];
}
