import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { notFound } from "next/navigation";
import ContentArea from "@/components/ContentArea";

const ARTIST_QUERY = defineQuery(`*[
    _type == "artist" &&
    slug.current == $slug
  ][0]{
    ...,
    content
  }`);

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: artist } = await sanityFetch({
    query: ARTIST_QUERY,
    params: await params,
  });
  if (!artist) {
    notFound();
  }
  const { name, content } = artist;

  return (
    <div className="container w-full max-w-3/4 mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="text-4xl font-bold col-span-1">{name}</h1>
      </div>
      {content && <ContentArea content={content} />}
    </div>
  );
}
