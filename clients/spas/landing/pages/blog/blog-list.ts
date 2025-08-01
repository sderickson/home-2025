import FirstBlogPostPage from "./posts/2025-03-25-Learned-So-Far.vue";
import DocDrivenAI from "./posts/2025-03-27-Doc-Driven-AI.vue";
import PlanningAndExecution from "./posts/2025-04-04-Planning-And-Execution.vue";
import Reliability from "./posts/2025-04-11-Reliability.vue";
import TheoryOfDX from "./posts/2025-04-18-Theory-of-Dx.vue";
import Roadmap from "./posts/2025-04-25-Roadmap.vue";
import WorkflowFirstIteration from "./posts/2025-05-10-Workflow-First-Iteration.vue";
import AccountabilityAndGaslighting from "./posts/2025-05-24-Accountability-and-Gaslighting.vue";
import GoverningProducts from "./posts/2025-06-14-Governing-Products.vue";
import SixMonthStatus from "./posts/2025-07-05-Six-Month-Status.vue";
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
  {
    title: "Planning and Execution",
    date: "April 4, 2025",
    excerpt: "I have a fairly consistent pattern for each feature now.",
    slug: "2025-04-04-planning-and-execution",
    component: PlanningAndExecution,
  },
  {
    title: "The Reliability Problem",
    date: "April 11, 2025",
    excerpt:
      "How reliable do LLMs need to be? And how can we help them get there?",
    slug: "2025-04-11-reliability",
    component: Reliability,
  },
  {
    title: "Theory of DX",
    date: "April 18, 2025",
    excerpt: "How to optimize *your* codebase for agentic coding",
    slug: "2025-04-18-theory-of-dx",
    component: TheoryOfDX,
  },
  {
    title: "DX Eval Roadmap",
    date: "April 25, 2025",
    excerpt: "Proving or disproving the Theory of DX",
    slug: "2025-04-25-dx-eval-roadmap",
    component: Roadmap,
  },
  {
    title: "Workflow First Iteration",
    date: "May 10, 2025",
    excerpt:
      "I built a prototype tool to guide an agent through a series of steps.",
    slug: "2025-05-10-workflow-first-iteration",
    component: WorkflowFirstIteration,
  },
  {
    title: "Accountability and Gaslighting",
    date: "May 24, 2025",
    excerpt: "The gap between LLM hype and LLM reality and how to bridge it.",
    slug: "2025-05-24-accountability-and-gaslighting",
    component: AccountabilityAndGaslighting,
  },
  {
    title: "Governing Products",
    date: "June 14, 2025",
    excerpt: "How all sorts of roles might look in the near future.",
    slug: "2025-06-14-governing-products",
    component: GoverningProducts,
  },
  {
    title: "Six-Month Status Update",
    date: "July 5, 2025",
    excerpt: "How things are going, where I'm at, and where I'm headed.",
    slug: "2025-07-05-six-month-status",
    component: SixMonthStatus,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
