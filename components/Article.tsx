import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({data}:{data:news}) => {
  return (
    <div className="py-2 border-b border-gray-300 mb-4">
  <div className="relative w-full h-[300px]">
    <Image
  src={data?.urlToImage ?? "/img/news-u-logo.webp"}
  alt={data?.title}
  fill
  unoptimized
  sizes="100vw"
  className="object-cover"
/>
  </div>

  <Link
    href={data?.url ?? "#"}
    target="_blank"
    className="font-bold text-lg block mt-2"
  >
    {data?.title}
  </Link>
</div>

  )
}

export default Article