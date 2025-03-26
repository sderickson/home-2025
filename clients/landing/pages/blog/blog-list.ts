import FirstBlogPostPage from "./posts/FirstBlogPostPage.vue";

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  component: typeof FirstBlogPostPage;
}

export const blogPosts: BlogPost[] = [
  {
    title: "First Blog Post",
    date: "March 25, 2025",
    excerpt:
      "Welcome to our first blog post! This is a sample post to demonstrate the blog functionality.",
    slug: "2025-03-25-first-post",
    component: FirstBlogPostPage,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
