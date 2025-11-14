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
        text: "Highlighted Posts",
        items: [
          { text: "Governing Products", link: "/posts/2025-06-14-Governing-Products" },
          { text: "Accountability and Gaslighting", link: "/posts/2025-05-24-Accountability-and-Gaslighting" },
          { text: "Theory of DX", link: "/posts/2025-04-18-Theory-of-Dx" },
          { text: "Reliability", link: "/posts/2025-04-11-Reliability" },
          
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/sderickson/saf-2025" },
    ],
  },
});
