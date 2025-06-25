# Lanikai SV

Gatsby e-commerce site to practice coding skills.

## Features

- **Dark Mode Support**: Toggle between light and dark themes using the theme toggle button in the navigation
- **Overreacted-Inspired Design**: Beautiful gradients and modern typography inspired by Dan Abramov's blog
- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **TypeScript**: Full type safety throughout the application
- **Blog System**: MDX-based blog with image support
- **SEO Optimized**: Built-in SEO components and meta tags
- **Accessible**: WCAG 2.1 AA compliant with proper contrast ratios

## Design Highlights

### Color Gradients
- **Header Gradient**: Beautiful purple-to-blue gradient header with overlay effects
- **Background Gradients**: Subtle gradient backgrounds that adapt to light/dark themes
- **Accent Gradients**: Gradient text effects for headings and important elements
- **Smooth Transitions**: Elegant transitions between theme changes

### Typography & Layout
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Card-Based Layout**: Content organized in beautiful cards with hover effects
- **Responsive Grid**: Flexible grid system that adapts to different screen sizes
- **Glass Morphism**: Subtle backdrop blur effects on interactive elements

## Tech Stack

- **Framework**: Gatsby 5
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Custom Properties
- **Content**: MDX with GraphQL
- **Theme**: gatsby-plugin-dark-mode
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

The site includes a dark mode toggle in the navigation bar. The theme preference is automatically saved and restored on subsequent visits. The implementation uses:

- `gatsby-plugin-dark-mode` for theme management
- CSS Custom Properties for seamless theme switching
- Smooth transitions between themes
- Accessible toggle button with proper ARIA labels

## Color Accessibility

All color combinations meet WCAG 2.1 AA contrast requirements:
- **Light Mode**: 4.5:1 contrast ratio minimum
- **Dark Mode**: 4.5:1 contrast ratio minimum
- **Gradient Backgrounds**: Tested at all color-stop points for accessibility

## Design System

### Color Palette
- **Primary**: Blue gradient (#3182ce to #2b6cb0)
- **Secondary**: Purple gradient (#667eea to #764ba2)
- **Background**: Subtle gradients with theme adaptation
- **Text**: High contrast colors for readability

### Components
- **Header**: Gradient background with glass morphism effects
- **Cards**: Elevated content containers with hover animations
- **Buttons**: Gradient backgrounds with smooth transitions
- **Navigation**: Clean, accessible navigation with active states

