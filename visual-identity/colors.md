---
layout: brand-page
title: Colors
description: Our brand color palette and usage guidelines
section: visual-identity
sidebar_nav:
  - id: color-codes
    title: Color Codes
  - id: primary-colors
    title: Primary Colors
  - id: secondary-colors
    title: Secondary Colors
  - id: neutral-colors
    title: Neutral Colors
  - id: usage-guidelines
    title: Usage Guidelines
  - id: accessibility
    title: Accessibility
  - id: color-combinations
    title: Color Combinations
related_pages:
  - title: Typography
    url: /visual-identity/typography/
    description: Font families and text styling
  - title: Logo Guidelines
    url: /visual-identity/logo-guidelines/
    description: Logo usage and variations
downloads:
  - title: Color Palette
    description: ASE and ACO files for design software
    type: zip
    url: /assets/downloads/brand-colors.zip
  - title: Color Swatches
    description: PDF reference guide with all color codes
    type: pdf
    url: /assets/downloads/color-swatches.pdf
---

# Colors

Our brand color palette has been carefully selected to convey professionalism, trust, and creativity. These colors work together to create a cohesive visual identity across all brand touchpoints.

{% include color-palette.html %}

## Color Codes {#color-codes}

### Primary Blue
- **Name**: Primary Blue
- **Hex**: `#0066CC`
- **RGB**: `0, 102, 204`
- **CMYK**: `100, 50, 0, 20`
- **Pantone**: `286 C`

### Secondary Gray
- **Name**: Secondary Gray
- **Hex**: `#666666`
- **RGB**: `102, 102, 102`
- **CMYK**: `0, 0, 0, 60`
- **Pantone**: `Cool Gray 8 C`

### Accent Orange
- **Name**: Accent Orange
- **Hex**: `#FF6B35`
- **RGB**: `255, 107, 53`
- **CMYK**: `0, 58, 79, 0`
- **Pantone**: `171 C`

## Primary Colors {#primary-colors}

### Primary Blue (#0066CC)
Our primary blue is the cornerstone of our brand palette. It conveys trust, professionalism, and reliability.

**Primary Uses:**
- Logo and brand marks
- Headlines and major headings
- Primary navigation elements
- Call-to-action buttons
- Links and interactive elements

**Best Practices:**
- Use as the dominant color in layouts
- Pair with white or light gray for optimal contrast
- Avoid using on dark backgrounds without sufficient contrast

### Secondary Gray (#666666)
Our secondary gray provides balance and supports the primary blue. It's professional without being stark.

**Primary Uses:**
- Body text and paragraphs
- Secondary navigation
- Borders and dividers
- Icons and supporting graphics
- Subheadings and captions

**Best Practices:**
- Use for large blocks of text for readability
- Works well with both blue and orange accents
- Provides good contrast on white backgrounds

## Accent Color {#accent-colors}

### Accent Orange (#FF6B35)
Our accent orange adds energy and warmth to the palette. Use sparingly for maximum impact.

**Primary Uses:**
- Call-to-action highlights
- Important notifications or alerts
- Selected or active states
- Key data points in charts
- Progress indicators

**Best Practices:**
- Use sparingly as an accent, not a dominant color
- Excellent for drawing attention to important elements
- Avoid overuse to maintain impact

## Neutral Colors {#neutral-colors}

### Pure White (#FFFFFF)
Clean, crisp white for backgrounds and negative space.

**Uses:**
- Primary background color
- Text on dark backgrounds
- Clean separation between sections

### Light Gray (#F5F5F5)
Subtle background color for secondary sections.

**Uses:**
- Alternate background sections
- Card backgrounds
- Subtle borders and dividers

### Dark Gray (#333333)
For high-contrast text and dark elements.

**Uses:**
- Headlines that need strong contrast
- Dark mode applications
- High-emphasis text

### True Black (#000000)
Reserve for maximum contrast situations.

**Uses:**
- High-contrast text overlays
- Print applications requiring maximum contrast
- Legal text and fine print

## Usage Guidelines {#usage-guidelines}

### Color Hierarchy
1. **Primary Blue**: Dominant brand color (60% of usage)
2. **Secondary Gray**: Supporting text and elements (30% of usage)
3. **Accent Orange**: Highlights and calls-to-action (10% of usage)

### Do's
- ✅ Use primary blue for all major brand elements
- ✅ Maintain sufficient contrast ratios for accessibility
- ✅ Use accent orange sparingly for maximum impact
- ✅ Test colors across different devices and media
- ✅ Stick to the approved color codes

### Don'ts
- ❌ Don't use colors outside the approved palette
- ❌ Don't use accent orange as a background color
- ❌ Don't combine colors that fail accessibility standards
- ❌ Don't use tints or shades not specified in these guidelines
- ❌ Don't use colors at low opacity unless specified

## Accessibility {#accessibility}

All color combinations in our palette meet WCAG 2.1 AA standards for accessibility:

### Contrast Ratios
- **Primary Blue on White**: 7.15:1 (AAA)
- **Secondary Gray on White**: 4.54:1 (AA)
- **Dark Gray on White**: 12.63:1 (AAA)
- **White on Primary Blue**: 7.15:1 (AAA)
- **White on Dark Gray**: 12.63:1 (AAA)

### Accessibility Best Practices
- Never rely on color alone to convey information
- Provide text alternatives for color-coded content
- Test with color blindness simulators
- Ensure sufficient contrast in all applications

## Color Combinations {#color-combinations}

### Recommended Combinations

#### Primary Combination
- **Background**: White (#FFFFFF)
- **Text**: Primary Blue (#0066CC)
- **Accents**: Accent Orange (#FF6B35)

#### Professional Combination
- **Background**: Light Gray (#F5F5F5)
- **Text**: Dark Gray (#333333)
- **Headings**: Primary Blue (#0066CC)

#### High-Contrast Combination
- **Background**: Dark Gray (#333333)
- **Text**: White (#FFFFFF)
- **Accents**: Accent Orange (#FF6B35)

### Combination Guidelines
- Always test combinations for sufficient contrast
- Use neutral colors as buffers between strong colors
- Limit each design to 3-4 colors maximum
- Consider the emotional impact of color combinations

## Technical Implementation

### Web Development
```css
:root {
  --primary-blue: #0066CC;
  --secondary-gray: #666666;
  --accent-orange: #FF6B35;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --dark-gray: #333333;
  --black: #000000;
}
```

### Print Production
- Use Pantone colors for critical brand elements
- Convert to CMYK for four-color process printing
- Provide both coated and uncoated specifications
- Include color breaks for different paper stocks

---

*Next: Learn about our [Typography](/visual-identity/typography/) guidelines to complete your understanding of our visual identity system.*