interface BusinessHours {
  start: string | null;
  end: string | null;
}

type BusinessHoursMap = {
  [day in
    | "saturday"
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"]: BusinessHours;
};

interface CustomSettings {
  some_plugin_enabled: boolean;
  max_upload_size_mb: number;
  notifications_enabled: boolean;
}

export interface SiteInfo {
  // Basic Info
  website_name: string;
  site_title: string;
  site_motto: string;
  site_url: string;
  company_name: string;

  // Contact
  primary_email: string;
  support_email: string;
  info_email: string;
  news_email: string;
  primary_phone: string;
  alternative_phone: string;
  fax: string;
  whatsapp_number: string;

  // Address
  address_one: string;
  address_two: string;

  // Settings
  default_language: string;
  default_currency: string;
  system_timezone: string;
  theme_color: string;
  dark_mode: boolean;

  // Branding
  site_logo_white: string;
  site_logo_black: string;
  site_favicon: string;
  login_background_image: string;

  // SEO & Social
  meta_title: string;
  meta_keyword: string;
  meta_tags: string;
  meta_description: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;

  // Analytics
  google_analytics: string | null;
  google_adsense: string | null;
  facebook_pixel_id: string | null;

  // Copyright
  copyright_title: string;
  copyright_url: string;

  // Social URLs
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
  twitter_url: string;
  youtube_url: string;
  pinterest_url: string;
  reddit_url: string;
  tumblr_url: string;
  tiktok_url: string;
  whatsapp_url: string;

  // Business Hours
  business_hours: BusinessHoursMap;

  // Customization
  custom_css: string | null;
  custom_js: string | null;
  custom_settings: CustomSettings;
}

interface SiteInfoApiResponse {
  success: boolean;
  message: string;
  data: SiteInfo;
}

export const SiteInformation = async (): Promise<SiteInfo> => {
  try {
    const res = await fetch(
      "https://admin.weeklyinqilab.com/api/v1/site-informations",
      {
        next: { revalidate: 1 },
      }
    );
    const json: SiteInfoApiResponse = await res.json();
    return json.data;
  } catch (err) {
    console.error("Failed to fetch site information:", err);
    throw new Error("Unable to load site information.");
  }
};
