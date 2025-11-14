import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Scott's Blog",
  srcDir: "./content",
  description: "Scott's Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
    ],
    sidebar: [
      {
        text: "Blog",
        link: "/blog",
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/sderickson/saf-2025" },
    ],
  },
});
