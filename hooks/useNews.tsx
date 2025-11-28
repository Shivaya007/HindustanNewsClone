"use client";

import { useEffect, useState } from "react";

// RSS feeds for different categories
const RSS_FEEDS: Record<string, string> = {
  all: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  general: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  state: "https://timesofindia.indiatimes.com/rssfeeds/4118245.cms",
  national: "https://timesofindia.indiatimes.com/rssfeeds/4118245.cms",
  sports: "https://timesofindia.indiatimes.com/rssfeeds/4719148.cms",
  business: "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
  entertainment: "https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
  lifestyle: "https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
  career: "https://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
  world: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
  technology: "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
  religion: "https://timesofindia.indiatimes.com/rssfeeds/4118245.cms",
  astrology: "https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
};

export function useNews(category: string) {
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      setError(null);

      try {
        // Get RSS feed URL for the category
        const rssFeed = RSS_FEEDS[category] || RSS_FEEDS.all;
        
        // Use RSS2JSON free service (no API key needed!)
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeed)}`;

        console.log("Fetching from:", url);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        console.log("API Response:", data);

        if (data.status !== "ok") {
          throw new Error(data.message || "Failed to fetch news");
        }

        // Transform RSS items to our news format
        const articles = (data.items || []).map((item: any) => ({
          title: item.title,
          description: item.description?.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
          url: item.link,
          image: item.enclosure?.link || item.thumbnail || "https://via.placeholder.com/400x200?text=News",
          publishedAt: item.pubDate,
          source: { name: "Times of India" },
        }));

        console.log("Processed articles:", articles);
        setNews(articles);
      } catch (err: any) {
        console.error("Error loading news:", err);
        setError(err.message);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category]);

  return { news, isLoading, error };
}