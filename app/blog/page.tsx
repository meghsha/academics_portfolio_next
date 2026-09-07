import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/data/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles on clinical nutrition, Ayurvedic dietetics, inflammation science, and evidence-based dietary guidance by Chetna Vats.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & Articles"
        description="Evidence-based nutrition insights, research updates, and practical dietary guidance."
      />
      <section className="py-16 md:py-20" aria-labelledby="blog-list-heading">
        <Container>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.08}>
                <article className="group rounded-sm border border-beige bg-ivory p-6 transition-all duration-300 hover:border-sage-light md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="sage">{post.category}</Badge>
                    <span className="text-xs text-text-muted">{post.date}</span>
                    <span className="text-xs text-text-muted">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl text-charcoal transition-colors group-hover:text-sage-dark">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-gold"
                  >
                    Read article
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
