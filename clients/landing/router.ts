import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home/HomePage.vue";
import AboutMePage from "./pages/about/AboutMePage.vue";
import BlogListPage from "./pages/blog/BlogListPage.vue";
import BlogPostPage from "./pages/blog/BlogPostPage.vue";
import BlogPostMissingPage from "./pages/blog/BlogPostMissingPage.vue";
import { blogPosts } from "./pages/blog/blog-list";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutMePage,
    },
    {
      path: "/blog",
      name: "blog-list",
      component: BlogListPage,
    },
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      name: post.slug,
      component: BlogPostPage,
      props: { post },
      children: [
        {
          path: "",
          component: post.component,
        },
      ],
    })),
    {
      path: "/blog/:pathMatch(.*)*",
      name: "blog-post-missing",
      component: BlogPostMissingPage,
    },
  ],
});

export default router;
