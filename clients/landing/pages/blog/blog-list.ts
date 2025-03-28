import FirstBlogPostPage from "./posts/2025-03-25-Learned-So-Far.vue";
import DocDrivenAI from "./posts/2025-03-27-Doc-Driven-AI.vue";
import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    title: "What I've Learned So Far",
    date: "March 25, 2025",
    excerpt:
      "Three months into my sabbatical, here's where I'm at with AI-driven development.",
    slug: "2025-03-25-learned-so-far",
    component: FirstBlogPostPage,
  },
  {
    title: "Doc-Driven AI",
    date: "March 27, 2025",
    excerpt:
      "I'm experimenting with documentation as core to my agentic coding.",
    slug: "2025-03-27-doc-driven-ai",
    component: DocDrivenAI,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
