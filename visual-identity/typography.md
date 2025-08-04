---
layout: brand-page
title: Typography
description: Font families, hierarchy, and text styling guidelines
section: visual-identity
sidebar_nav:
  - id: font-families
    title: Font Families
  - id: typography-scale
    title: Typography Scale
  - id: hierarchy
    title: Hierarchy Guidelines
  - id: usage-guidelines
    title: Usage Guidelines
  - id: responsive-typography
    title: Responsive Typography
  - id: implementation
    title: Implementation
related_pages:
  - title: Colors
    url: /visual-identity/colors/
    description: Brand color palette and usage
  - title: Logo Guidelines
    url: /visual-identity/logo-guidelines/
    description: Logo usage and variations
downloads:
  - title: Font Files
    description: Web fonts and desktop versions
    type: zip
    url: /assets/downloads/brand-fonts.zip
  - title: Typography Specimen
    description: Complete font showcase and sizing guide
    type: pdf
    url: /assets/downloads/typography-specimen.pdf
---

# Typography

Our typography system creates hierarchy, improves readability, and reinforces our brand personality. We use two carefully selected font families that work harmoniously across all media.

{% include typography-display.html %}

## Font Families {#font-families}

### Primary Font: Inter
**Type**: Sans-serif  
**Usage**: Headers, UI elements, and primary text  
**Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

Inter is our primary typeface, chosen for its exceptional clarity and modern appearance. Its wide range of weights provides flexibility for creating clear hierarchy while maintaining readability across all sizes.

**Best For:**
- Headlines and subheadings
- Navigation and interface elements
- Call-to-action buttons
- Short, impactful text blocks
- Digital displays and presentations

**Characteristics:**
- Highly legible at small sizes
- Clean, professional appearance
- Excellent for screen reading
- Wide character set supporting multiple languages

### Secondary Font: Source Serif Pro
**Type**: Serif  
**Usage**: Body text and long-form content  
**Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

Source Serif Pro complements Inter perfectly, providing warmth and readability for longer text passages. Its traditional serif characteristics convey trust and authority.

**Best For:**
- Body text and paragraphs
- Long-form articles and documents
- Print materials
- Traditional or formal communications
- Text requiring extended reading

**Characteristics:**
- Excellent readability for long passages
- Classic, trustworthy appearance
- Good performance in print
- Pairs beautifully with Inter

## Typography Scale {#typography-scale}

Our typography scale ensures consistent proportions and hierarchy across all applications:

### Heading Sizes
- **H1**: 2.5rem (40px) - Page titles and major headings
- **H2**: 2rem (32px) - Section headings
- **H3**: 1.5rem (24px) - Subsection headings
- **H4**: 1.25rem (20px) - Minor headings
- **H5**: 1.125rem (18px) - Small headings
- **H6**: 1rem (16px) - Caption headings

### Body Text Sizes
- **Body**: 1rem (16px) - Standard body text
- **Small**: 0.875rem (14px) - Secondary information
- **Caption**: 0.75rem (12px) - Fine print and metadata

### Line Heights
- **Headings**: 1.2 - Tight spacing for impact
- **Body Text**: 1.6 - Comfortable reading spacing
- **Tight**: 1.4 - Compact layouts when needed

## Hierarchy Guidelines {#hierarchy}

### Establishing Clear Hierarchy

1. **Page Title (H1)**
   - Font: Inter Bold (700)
   - Size: 2.5rem
   - Color: Primary Blue or Dark Gray
   - Usage: One per page maximum

2. **Section Headings (H2)**
   - Font: Inter Semi-bold (600)
   - Size: 2rem
   - Color: Primary Blue
   - Usage: Major content sections

3. **Subsection Headings (H3)**
   - Font: Inter Semi-bold (600)
   - Size: 1.5rem
   - Color: Dark Gray
   - Usage: Content subsections

4. **Body Text**
   - Font: Source Serif Pro Regular (400)
   - Size: 1rem
   - Color: Dark Gray
   - Line Height: 1.6

### Hierarchy Best Practices
- Use only one H1 per page
- Don't skip heading levels (H1 → H3)
- Maintain consistent spacing between elements
- Use color and weight to reinforce hierarchy
- Ensure sufficient contrast for all text

## Usage Guidelines {#usage-guidelines}

### Do's
- ✅ Use Inter for headings and UI elements
- ✅ Use Source Serif Pro for body text
- ✅ Maintain consistent line heights
- ✅ Follow the established type scale
- ✅ Test readability across different devices

### Don'ts
- ❌ Don't use fonts outside our approved families
- ❌ Don't create custom font sizes outside the scale
- ❌ Don't use too many font weights in one design
- ❌ Don't compromise readability for style
- ❌ Don't use decorative fonts for body text

### Font Pairing Rules
- **Headlines + Body**: Inter + Source Serif Pro
- **All Sans-serif**: Inter only (for digital interfaces)
- **All Serif**: Source Serif Pro only (for traditional documents)

### Weight Distribution
- **Bold (700)**: Reserved for major headings and emphasis
- **Semi-bold (600)**: Section headings and subheadings
- **Medium (500)**: Interface elements and minor headings
- **Regular (400)**: Body text and standard content
- **Light (300)**: Large text where readability isn't compromised

## Responsive Typography {#responsive-typography}

Our typography adapts to different screen sizes while maintaining readability and hierarchy:

### Mobile (up to 768px)
- H1: 2rem (32px)
- H2: 1.75rem (28px)
- H3: 1.375rem (22px)
- Body: 1rem (16px)
- Increased line height for readability

### Tablet (768px - 1024px)
- Standard scale with minor adjustments
- Optimized for touch interfaces
- Balanced line lengths

### Desktop (1024px+)
- Full typography scale
- Optimal line lengths (45-75 characters)
- Enhanced hierarchy through spacing

### Responsive Best Practices
- Never go below 16px for body text
- Adjust line heights for different screen sizes
- Consider reading distance and context
- Test across multiple devices and orientations

## Implementation {#implementation}

### Web Implementation

#### CSS Custom Properties
```css
:root {
  --font-primary: 'Inter', Arial, sans-serif;
  --font-secondary: 'Source Serif Pro', Georgia, serif;
  
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-body: 1rem;
  
  --line-height-heading: 1.2;
  --line-height-body: 1.6;
}
```

#### Font Loading
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/source-serif-pro.woff2" as="font" type="font/woff2" crossorigin>

<!-- Google Fonts fallback -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

### Print Implementation
- Use Source Serif Pro for improved print readability
- Increase contrast for better reproduction
- Adjust sizes for print resolution (typically smaller)
- Consider paper quality and printing method

### Email Implementation
- Use web-safe fallbacks (Arial, Georgia)
- Test across email clients
- Use inline styles when necessary
- Maintain brand recognition despite limitations

## Accessibility Considerations

### WCAG Compliance
- Maintain 4.5:1 contrast ratio for normal text
- Maintain 3:1 contrast ratio for large text (18pt+)
- Ensure text can be resized up to 200% without loss of functionality
- Use relative units (rem, em) for scalability

### Readability Guidelines
- Optimal line length: 45-75 characters
- Sufficient line spacing for comfortable reading
- Clear distinction between different text elements
- High contrast between text and background

---

*Next: Complete your visual identity understanding with our [Logo Guidelines](/visual-identity/logo-guidelines/).*