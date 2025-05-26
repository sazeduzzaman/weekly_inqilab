// app/types.ts

export interface ViewedNewsData {
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
  slug?: string;
  bangla_title?: string; 
  published_at?: string; 
}

export interface ViewedNewsListProps {
  viewedItems: ViewedNewsData[];
}
