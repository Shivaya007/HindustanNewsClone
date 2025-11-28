import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';

  try {
    const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&country=in&language=en&category=${category}`;
    
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'error') {
      return NextResponse.json({ error: data.results?.message }, { status: 400 });
    }

    const articles = (data.results || []).map((item: any) => ({
      title: item.title,
      description: item.description || item.content,
      url: item.link,
      image: item.image_url,
      publishedAt: item.pubDate,
      source: { name: item.source_id },
    }));

    return NextResponse.json({ articles });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}