import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/home/HomePage.vue";
import AboutMePage from "./pages/about/AboutMePage.vue";
import BlogListPage from "./pages/blog/BlogListPage.vue";
import BlogPostMissingPage from "./pages/blog/BlogPostMissingPage.vue";
import FirstBlogPostPage from "./pages/blog/FirstBlogPostPage.vue";

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
    {
      path: "/blog/2025-03-25-first-post",
      name: "first-post",
      component: FirstBlogPostPage,
    },
    {
      path: "/blog/:pathMatch(.*)*",
      name: "blog-post-missing",
      component: BlogPostMissingPage,
    },
  ],
});

export default router;
