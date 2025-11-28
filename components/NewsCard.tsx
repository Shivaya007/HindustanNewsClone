
export default function NewsCard({ article }: { article: any }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      {article.image && (
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <h3 className="font-bold text-lg mb-2">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{article.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{article.source?.name}</span>
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm mt-2 inline-block"
      >
        Read more →
      </a>
    </div>
  );
}