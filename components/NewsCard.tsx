import { getNewsTopHeadlines } from '@/app/api/news'
import { removeDuplicateData } from '@/utils'
import Article from './Article'
export default async function NewsCard() {
    const newsTop = await getNewsTopHeadlines()
  const filterArticles = removeDuplicateData(newsTop)
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
       {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  );
}