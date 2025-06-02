// app/types.ts

export interface SportsNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  thumbnail?: string;
  thumbnail_img?: string;
  news_time?: string;
  category_name?: string;
  is_featured?: number;
  title?: string;
  bangla_title?: string;
  slug?: string;
  published_at?: string;
  category_bangla_name?: string;
  subCategory_bangla_name? :string;
}

export interface SportsNewsListProps {
  sportsItems: SportsNewsData[];
}
