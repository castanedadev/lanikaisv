# Lanikai SV

Gatsby blog site to practice coding skills.

## Features

- **Overreacted-Inspired Design**: Beautiful gradients and modern typography inspired by Dan Abramov's blog
- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **TypeScript**: Full type safety throughout the application
- **Blog System**: MDX-based blog with image support
- **SEO Optimized**: Built-in SEO components and meta tags

## Design Highlights

### Color Gradients
- **Header Gradient**: Soft pastel gradient header
- **Background**: Consistent, accessible background color
- **Accent Gradients**: Gradient text effects for headings and important elements
- **Smooth Transitions**: Elegant transitions between UI states

### Typography & Layout
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Responsive Grid**: Flexible grid system that adapts to different screen sizes

## Tech Stack

- **Framework**: Gatsby 5
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Custom Properties
- **Content**: MDX with GraphQL
- **Build Tool**: Yarn 4
- **Design Inspiration**: Overreacted.io

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn develop
   ```

3. Build for production:
   ```bash
   yarn build
   ```

4. Type checking:
   ```bash
   yarn typecheck
   ```

## Dark Mode

The implementation uses:

- `gatsby-plugin-dark-mode` for theme management
- CSS Custom Properties
- Smooth transitions

## Color Accessibility

All color combinations meet WCAG 2.1 AA contrast requirements:
- **Light Mode**: 4.5:1 contrast ratio minimum
- **Gradient Backgrounds**: Tested at all color-stop points for accessibility

