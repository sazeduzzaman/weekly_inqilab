// app/types.ts

export interface BusinessNewsData {
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
  title?: string;
  bangla_title?: string;
  slug?: string;
  published_at?: string;
  category_bangla_name?: string;
  
}

export interface BusinessNewsListProps {
  businessNewsItems: BusinessNewsData[];
}
