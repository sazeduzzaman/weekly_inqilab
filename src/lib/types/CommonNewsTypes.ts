export interface NewsDetails {
  id?: number;
  category_id?: number;
  sub_category_id?: number | null;
  sub_sub_category_id?: number | null;
  author_id?: number | null;
  title?: string;
  bangla_title?: string; // ✅ fixed typo
  slug?: string;
  summary?: string;
  bangla_summary?: string;
  content?: string;
  bangla_content?: string;
  thumbnail?: string;
  banner_image?: string;
  video_url?: string | null;
  tags?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  type?: string;
  is_featured?: number;
  is_most_read?: number;
  is_breaking?: number;
  is_trending?: number;
  show_on_homepage?: number;
  show_in_slider?: number;
  status?: string;
  published_at?: string;   // should be ISO 8601 with timezone
  author?: string;
  view_count?: number;
  share_count?: number;
  comment_count?: number;
  created_by?: number;
  updated_by?: number;
  created_at?: string;     // same here: ISO 8601 with timezone
  updated_at?: string;     // same
  category_name?: string | null;
  category_bangla_name?: string | null;
  subCategory_name?: string;
  subCategory_bangla_name?: string;
}

export interface NewsItem {
  news_details: NewsDetails;
}
