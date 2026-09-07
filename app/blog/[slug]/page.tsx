import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/data/content";
import { createPageMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} />
      <section className="py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="sage">{post.category}</Badge>
                <span className="text-sm text-text-muted">{post.date}</span>
                <span className="text-sm text-text-muted">{post.readTime}</span>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-text-muted">
                {post.excerpt}
              </p>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-text-muted">
                <p>
                  This is a placeholder article page. Replace with full blog
                  content when ready. The article will cover topics related to{" "}
                  {post.category.toLowerCase()} and evidence-based nutrition
                  guidance.
                </p>
                <p>
                  Chetna Vats integrates clinical research with Ayurvedic
                  dietary principles to provide accessible, science-backed
                  nutrition insights through The Food Doctor platform.
                </p>
              </div>
              <Link
                href="/blog"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-gold"
              >
                <span aria-hidden="true">&larr;</span>
                Back to Blog
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
