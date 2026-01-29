# Scroll Animations Implementation Guide

## Overview
This document outlines the comprehensive scroll animation system implemented across the Solwaste website, inspired by award-winning websites like those featured on Awwwards.

## Core Components

### 1. ScrollReveal Component (`components/ui/ScrollReveal.tsx`)
Main component for triggering animations when elements enter the viewport.

**Available Variants:**
- `fadeInUp` - Fade in from bottom (default)
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Slide in from left
- `fadeInRight` - Slide in from right
- `scaleIn` - Scale up from smaller size
- `blurIn` - Fade in with blur effect
- `reveal` - Reveal with clip-path animation

**Props:**
```typescript
{
  variant?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'blurIn' | 'reveal';
  delay?: number;  // Delay before animation starts
  className?: string;
  viewport?: { once?: boolean; amount?: number; margin?: string };
}
```

**Usage Example:**
```tsx
<ScrollReveal variant="fadeInUp" delay={0.2}>
  <h2>Your Content Here</h2>
</ScrollReveal>
```

### 2. StaggerContainer & StaggerItem Components
For animating multiple children sequentially.

**Usage Example:**
```tsx
<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>
    <div>First Item</div>
  </StaggerItem>
  <StaggerItem>
    <div>Second Item</div>
  </StaggerItem>
  <StaggerItem>
    <div>Third Item</div>
  </StaggerItem>
</StaggerContainer>
```

### 3. useScrollAnimation Hook (`utils/useScrollAnimation.ts`)
Custom hook for advanced scroll-triggered animations.

**Returns:**
```typescript
{
  elementRef: RefObject<HTMLDivElement>;
  isVisible: boolean;
}
```

**Usage:**
```tsx
const { elementRef, isVisible } = useScrollAnimation({
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px',
  triggerOnce: true
});
```

## Implementation Across Pages

### Pages with Scroll Animations

1. **Home.tsx**
   - Hero carousel already optimized
   - Spec cards with stagger effects
   - Components: GovernmentMandate, ImpactStats, ProcessFlow, MissionGrid

2. **About.tsx**
   - Story section with fadeInLeft/fadeInRight
   - Mission cards with StaggerContainer
   - Who We Serve section with staggered items

3. **Solutions.tsx**
   - ProductDetail components with scroll reveals
   - Features list with stagger animations

4. **Careers.tsx**
   - Benefit cards in stagger container
   - Role cards with sequential animation
   - Application steps with stagger items

5. **CaseStudies.tsx**
   - Stat cards with stagger effects
   - Project listings with fade-in animations

6. **Contact.tsx**
   - Contact info cards with scroll reveals
   - Form sections with stagger effects

7. **Sustainability.tsx**
   - Section components with fadeInUp
   - Smooth hover transitions on scroll

8. **Vision2047.tsx**
   - Custom FadeIn components replaced with ScrollReveal
   - Timeline sections with sequential animations

9. **Fahaka.tsx**
   - Feature sections with scroll-triggered reveals
   - Comparison tables with stagger effects

10. **OWC.tsx**
    - Product sections with scroll animations
    - Spec tables with staggered items

11. **Gallery.tsx**
    - Image grid with stagger effects
    - Lightbox with smooth transitions

12. **PartnerWithUs.tsx**
    - Benefit cards with stagger container
    - Partnership steps with sequential reveals

13. **PressMedia.tsx**
    - Press items with scroll reveals
    - Media grid with stagger animations

## Animation Principles Applied

### 1. **Entrance Animations**
- Elements fade in as user scrolls
- Smooth easing: `[0.25, 0.46, 0.45, 0.94]` (ease-out-cubic)
- Duration: 0.6s for most elements

### 2. **Stagger Effects**
- Sequential animation of child elements
- Delay between items: 0.08s - 0.15s
- Creates rhythm and visual flow

### 3. **Direction-Based Animations**
- Left/Right: Used for alternating content sections
- Up: Primary direction for most content
- Down: Used sparingly for headers

### 4. **Performance Optimizations**
- `viewport={{ once: true }}` - Animations trigger only once
- `willChange: 'transform'` - GPU acceleration hints
- Passive scroll listeners
- Optimized intersection observer thresholds

### 5. **Accessibility**
- Animations respect user motion preferences
- No infinite loops that could cause motion sickness
- Smooth, predictable movements

## Best Practices

### When to Use Each Animation Type

**fadeInUp (Default)**
- Main content sections
- Card grids
- Text blocks
- General purpose

**fadeInLeft/fadeInRight**
- Alternating content sections
- Image + text layouts
- Side-by-side comparisons

**scaleIn**
- Important call-to-action elements
- Featured content
- Modal/popup entrances

**blurIn**
- Hero images
- Background elements
- Artistic content

**StaggerContainer**
- Lists of items (cards, features, benefits)
- Navigation menus
- Icon grids
- Statistics

## Configuration Options

### Viewport Settings
```typescript
viewport={{
  once: true,      // Animate only once (recommended)
  amount: 0.2,     // Trigger when 20% visible
  margin: '0px 0px -100px 0px'  // Start 100px before element enters
}}
```

### Timing
```typescript
delay={0.2}  // Delay in seconds
transition={{
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94]
}}
```

## Browser Support
- Modern browsers with Intersection Observer API
- Fallback: Elements appear without animation
- No JavaScript errors if features unavailable

## Performance Metrics
- Animations use CSS transforms (GPU-accelerated)
- Minimal JavaScript execution
- Efficient IntersectionObserver usage
- No layout thrashing

## Future Enhancements
- [ ] Add parallax scroll effects for hero sections
- [ ] Implement scroll-linked animations for complex interactions
- [ ] Add morphing transitions between pages
- [ ] Create custom variants for brand-specific animations

## Troubleshooting

**Animation not triggering:**
- Check viewport settings (amount, margin)
- Verify element has enough scroll space
- Ensure parent containers don't have `overflow: hidden`

**Animation feels too slow/fast:**
- Adjust `duration` in transition
- Modify `delay` for sequencing
- Check staggerDelay for container timing

**Performance issues:**
- Reduce number of animated elements on screen
- Use `will-change` property sparingly
- Consider reducing animation duration
- Check for nested animations

## Credits
Inspired by modern web design trends from:
- Awwwards.com
- Apple.com
- Stripe.com
- Linear.app
- Vercel.com

## Last Updated
January 29, 2026
