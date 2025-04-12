import type { Component } from "vue";

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  component: Component;
}
