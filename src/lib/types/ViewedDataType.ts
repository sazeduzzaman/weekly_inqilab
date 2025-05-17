// app/types.ts

export interface ViewedNewsData {
  id: number;
  name: string;
  name_bangla: string;
  category_id?: string; // optional now
  news_title?: string;
  image_url?: string;
  title_img?: string;
  thumbnail_img?: string;
  news_time?: string;
}

export interface ViewedNewsListProps {
  viewedItems: ViewedNewsData[];
}
