# Components

This directory contains all the reusable components for the Ragusma Farms landing page.

## Component Structure

### Header.tsx
- **Purpose**: Navigation bar with logo and menu items
- **Features**: 
  - Fixed positioning with backdrop blur
  - Responsive design with mobile hamburger menu
  - Smooth anchor links to page sections
  - "Visit Farm" call-to-action button

### Hero.tsx
- **Purpose**: Main hero section with compelling headline
- **Features**:
  - Full-screen layout with gradient background
  - SVG farm landscape illustration
  - Large typography with green accent
  - Call-to-action buttons
  - Animated floating elements

### About.tsx
- **Purpose**: Story section explaining the farm's mission
- **Features**:
  - Two-column layout (content + visual)
  - Statistics display (50+ years, 100% organic)
  - Sustainable farming focus
  - Quote from farm branding

### Products.tsx
- **Purpose**: Showcase of farm products
- **Features**:
  - Three product cards with emoji icons
  - Hover effects and transitions
  - Product availability status
  - Gradient backgrounds for visual appeal

### Contact.tsx
- **Purpose**: Contact information and visit scheduling
- **Features**:
  - Farm information with icons
  - Interactive contact form
  - Two-column layout (info + form)
  - Form validation styling

### Footer.tsx
- **Purpose**: Site footer with links and contact info
- **Features**:
  - Multi-column layout
  - Social media links
  - Quick navigation
  - Copyright information

## Usage

```tsx
import { Header, Hero, About, Products, Contact, Footer } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
```

## Benefits of Component Separation

1. **Modularity**: Each section is self-contained and reusable
2. **Maintainability**: Easy to update individual sections
3. **Testing**: Components can be tested independently
4. **Reusability**: Components can be used in other pages
5. **Code Organization**: Cleaner, more readable code structure
6. **Team Development**: Different developers can work on different components
