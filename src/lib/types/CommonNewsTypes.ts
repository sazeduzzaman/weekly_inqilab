export interface CommonNewsTypes {
  id: number;
  category_id: number;
  news_title: string;
  news_short_brief: string;
  thumbnail_img: string | null;
  title_img: string | null;
  news_detail: string;
  detail_img_1: string | null;
  detail_img_2: string | null;
  detail_img_3: string | null;
  video_url: string | null;
  news_author: string;
  posted_by: number;
  user_id: number | null;
  news_time: string; // ISO date string, e.g. "2025-05-17 07:47:36"
  status: number;
  news_type: number;
  is_featured: number;
  view_count: number;
  meta_tags: string | null;
  is_old_data: number;
  category_name: string;
  category_name_bangla: string;
}
