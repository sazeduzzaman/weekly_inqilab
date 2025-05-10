export interface BreakingNewsMarqueData {
  id: string;
  name: string;
  name_bangla: string;
  category_id: string;
  news_title: string;
  image_url: string; // <-- Add this line
}

export interface BreakingNewsMarqueProps {
  breakingItems: BreakingNewsMarqueData[];
}
