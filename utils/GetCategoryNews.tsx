const categoryMap: Record<string, string> = {
  all: "general",

  state: "general",
  national: "general",
  world: "general",

  sports: "sports",

  lifestyle: "entertainment",
  entertainment: "entertainment",

  business: "business",

  religion: "general",
  astrology: "general",
  career: "business",
};

export async function GetCategoryNews(category: string) {
  const apiCategory = categoryMap[category] || "general";

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${apiCategory}&apiKey=YOUR_API_KEY`,
    { next: { revalidate: 60 } } // ISR (optional)
  );

  const data = await res.json();
  return data.articles || [];
}
