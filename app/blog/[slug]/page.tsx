import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/page-banner";
import { getPost, posts } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | AMZ Self Pub" };
  return {
    title: `${post.title} | AMZ Self Pub`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main>
      <PageBanner eyebrow={post.date} title={post.title} text={post.excerpt} />
      <article className="mx-auto max-w-3xl space-y-5 px-5 pb-20 text-base leading-relaxed text-[#3d4650] sm:px-8">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link href="/blog" className="font-medium text-teal">
            Back to the blog
          </Link>
        </p>
      </article>
    </main>
  );
}
