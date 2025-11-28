"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useNews } from "@/hooks/useNews";
import NewsCard from "@/components/NewsCard";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

export default function HomePage() {
  const [category, setCategory] = useState("all");

  const { news, isLoading, error } = useNews(category);

  return (
    <div>
      <Navbar 
        onCategoryChange={setCategory}
        currentCategory={category}
      />

      {isLoading && <LoadingState />}
      {error && <ErrorState message={""} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {news?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
