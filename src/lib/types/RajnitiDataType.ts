// app/types.ts

export interface RajnitiNewsData {
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
  slug?: string;
  category_bangla_name?: string;
  subCategory_bangla_name? :string;
}

export interface RajnitiNewsListProps {
  rajnitiItems: RajnitiNewsData[];
}
