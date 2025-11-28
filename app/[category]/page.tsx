import { getNewsSearch } from '@/app/api/news'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;
  
  const newsCategory = await getNewsSearch(category);
  const filterArticles = removeDuplicateData(newsCategory);
  
  return (
    <div className='w-[700px] mx-auto mt-6'>
      <h1 className='text-2xl font-bold mb-6 capitalize'>
        {category} की खबरें
      </h1>
      
      {filterArticles.map((article, idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default CategoryPage