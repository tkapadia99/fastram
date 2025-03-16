import { getMarkdownBySlug } from "@/lib/markdown";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }: { params: Promise<{ slug: string }>}) {

  const markdownData = await getMarkdownBySlug((await params).slug);

  if (!markdownData) return notFound();

  return (
    <div className="p-8 flex justify-center">
      <h1 className="text-3xl font-bold">{markdownData.data.title}</h1>
      <p className="text-gray-500">{markdownData.data.date}</p>
      <div className="mt-6 prose" dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
    </div>
  );
}