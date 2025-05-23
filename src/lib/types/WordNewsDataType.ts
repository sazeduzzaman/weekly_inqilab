// app/types.ts

export interface WordNewsData {
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
  is_featured?: number;
}

export interface WordNewsListProps {
  wordNewsItems: WordNewsData[];
}
