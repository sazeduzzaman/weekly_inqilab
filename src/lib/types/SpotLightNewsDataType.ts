// app/types.ts

export interface SpotLightNewsData {
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
}

export interface SpotLightNewsListProps {
  spotLightItems: SpotLightNewsData[];
}
