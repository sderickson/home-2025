# Landing Website with Blog Router

## Overview

A Vue.js-based landing website with blog functionality, featuring a clean navigation structure and dynamic blog post routing.

## Components Structure

### Layout

- `LandingApp.vue`: Main application wrapper
  - Left navigation sidebar
  - Main content area with router-view
  - Navigation items:
    - Home
    - Blog

### Pages

1. `HomePage.vue`

   - Welcome message
   - Link to repository
   - Clean, minimal design

2. `BlogListPage.vue`

   - List of all blog posts
   - Each post links to its detail view
   - Basic metadata display (title, date, etc.)

3. `BlogPostPage.vue`
   - Dynamic route with post identifier parameter
   - Renders specific blog post content
   - Fallback to `BlogPostMissingPage.vue` if post not found

## Routing Structure

```
/                   -> HomePage
/blog              -> BlogListPage
/blog/:identifier  -> BlogPostPage (or BlogPostMissingPage)
```

## Technical Requirements

- Vue Router for navigation
- Dynamic route parameters for blog posts
- Responsive layout with collapsible sidebar
- Clean, modern UI design
- Proper error handling for missing blog posts

## Future Considerations

- Blog post content management
- SEO optimization
- Analytics integration
- Additional landing page sections
