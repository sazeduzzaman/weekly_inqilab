interface BusinessHours {
  start: string | null;
  end: string | null;
}

interface BusinessHoursMap {
  saturday: BusinessHours;
  sunday: BusinessHours;
  monday: BusinessHours;
  tuesday: BusinessHours;
  wednesday: BusinessHours;
  thursday: BusinessHours;
  friday: BusinessHours;
}

interface CustomSettings {
  some_plugin_enabled: boolean;
  max_upload_size_mb: number;
  notifications_enabled: boolean;
}

export interface SiteInfo {
  website_name: string;
  site_title: string;
  site_motto: string;
  site_logo_white: string;
  site_logo_black: string;
  site_favicon: string;
  login_background_image: string;
  primary_email: string;
  support_email: string;
  info_email: string;
  news_email: string;
  primary_phone: string;
  fax: string;
  alternative_phone: string;
  whatsapp_number: string;
  address_one: string;
  address_two: string;
  default_language: string;
  default_currency: string;
  system_timezone: string;
  site_url: string;
  meta_title: string;
  meta_keyword: string;
  meta_tags: string;
  meta_description: string;
  google_analytics: string | null;
  google_adsense: string | null;
  facebook_pixel_id: string | null;
  og_image: string;
  og_title: string;
  og_description: string;
  canonical_url: string;
  copyright_title: string;
  copyright_url: string;
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
  whatsapp_url: string;
  twitter_url: string;
  youtube_url: string;
  pinterest_url: string;
  reddit_url: string;
  tumblr_url: string;
  tiktok_url: string;
  website_url: string;
  company_name: string;
  business_hours: BusinessHoursMap;
  theme_color: string;
  dark_mode: boolean;
  custom_css: string | null;
  custom_js: string | null;
  custom_settings: CustomSettings;
}

interface SiteInfoApiResponse {
  success: boolean;
  message: string;
  data: SiteInfo;
}

// export const SiteInfoDataSet = async (): Promise<SiteInfoData[]> => {
//   try {
//     const response = await fetch(
//       "https://v2.weeklyinqilab.com/api/v1/site-informations"
//     );
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Failed to fetch news categories:", error);
//     throw new Error("Something went wrong while fetching news categories.");
//   }
// };

export const SiteInformation = async (): Promise<SiteInfo> => {
  try {
    const response = await fetch(
      "https://v2.weeklyinqilab.com/api/v1/site-informations"
    );
    const json: SiteInfoApiResponse = await response.json();
    return json.data;
  } catch (error) {
    console.error("Failed to fetch site information:", error);
    throw new Error("Something went wrong while fetching site information.");
  }
};
