export interface BreakingNewsMarqueData {
  id: string;
  name: string;
  name_bangla: string;
  category_id: string;
  news_title: string;
  title_img : string;
  image_url: string; // <-- Add this line
  thumbnail_img: string; // <-- Add this line
  news_time: number; // <-- Add this line
  
}

export interface BreakingNewsMarqueProps {
  breakingItems: BreakingNewsMarqueData[];
}
