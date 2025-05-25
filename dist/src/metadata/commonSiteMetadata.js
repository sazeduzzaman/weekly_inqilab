"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonSiteMetadata = void 0;
exports.commonSiteMetadata = {
    title: "Weekly Inqilab",
    description: "Weekly Inqilab offers the latest news, breaking stories, and insightful articles on politics, culture, entertainment, and more. Stay informed with the latest updates every week.",
    author: "Weekly Inqilab Editorial Team",
    keywords: "news, Weekly Inqilab, latest news, breaking news, politics, entertainment, world news, technology, sports, local news, weekly newspaper",
    // Open Graph Meta Tags for Social Media Sharing (e.g., Facebook, Twitter, LinkedIn)
    openGraph: {
        type: "website", // The type of content, could be "article" for specific articles
        url: "https://www.weeklyinqilab.com", // Homepage URL
        title: "Weekly Inqilab - Latest News and Articles", // Open Graph title
        description: "Weekly Inqilab delivers the latest breaking news and insightful articles on various topics including politics, culture, sports, and more.", // Open Graph description
        images: [
            {
                url: "/logo.png", // Image in public folder, path relative to the root
                width: 800, // Image dimensions
                height: 600, // Image dimensions
                alt: "Weekly Inqilab Logo", // Alt text for the image
            },
        ],
    },
    // Twitter Card Meta Tags for Twitter Sharing
    twitter: {
        card: "summary_large_image", // Type of card, "summary_large_image" is recommended for media-rich websites
        site: "@weeklyinqilab", // Twitter handle of the newspaper
        creator: "@yourname", // Twitter handle of the article author or editorial team
        title: "Weekly Inqilab - Latest News", // Title for Twitter card
        description: "Catch up with the latest news, articles, and breaking headlines on Weekly Inqilab.", // Twitter description
        image: "/logo.png", // Image in public folder, path relative to the root
    },
    // Additional Metadata for SEO and Schema.org (Structured Data)
    schemaOrg: {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization", // Specify it as a news media organization
        name: "Weekly Inqilab",
        url: "https://www.weeklyinqilab.com", // Newspaper website URL
        logo: "/logo.png", // Image in public folder, path relative to the root
        sameAs: [
            "https://www.facebook.com/weeklyinqilab", // Facebook page URL
            "https://twitter.com/weeklyinqilab", // Twitter profile URL
            "https://www.instagram.com/weeklyinqilab", // Instagram profile URL
            // Add more social media links as needed
        ],
        publisher: {
            "@type": "Organization",
            name: "Weekly Inqilab",
            logo: {
                "@type": "ImageObject",
                url: "/logo.png", // Image in public folder, path relative to the root
            },
        },
    },
    // Favicon and Theme
    favicon: "/favicon.ico", // Favicon in public folder
    themeColor: "#ff1a1a", // A color that will be used for the theme, like in the browser bar
    // Other Useful Meta Tags
    language: "en", // Language of the website, "en" for English
    robots: "index, follow", // Allows search engines to index the site and follow links
    robotsNoindex: "noarchive", // Prevents Google from showing cached versions of pages
    // Custom Meta Tags for Articles (optional)
    article: {
        section: "News", // The section the article belongs to (e.g., Politics, Sports, etc.)
        publishedTime: "2025-05-10T12:00:00Z", // Time when the article was published
        modifiedTime: "2025-05-10T12:00:00Z", // Last time the article was modified
        author: "Author Name", // The article's author
        headline: "Title of the Article", // Headline or title of the article
        image: "/article-image.jpg", // Image in public folder for the article
    },
};
