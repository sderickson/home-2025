import FirstBlogPostPage from "./posts/2025-03-25-Learned-So-Far.vue";
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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
