# Brand Guidelines Site

A comprehensive brand guidelines website built with Jekyll and designed for GitHub Pages deployment. This site provides a complete framework for documenting and sharing your brand identity, visual guidelines, and communication standards.

## 📚 Complete Page Documentation

This site contains a full brand guidelines documentation system with three main sections and multiple detailed pages.

## ✨ Features

- **Complete Brand Documentation**: Sections for brand overview, visual identity, and tone & voice
- **Search Functionality**: Fast client-side search across all content
- **Sidebar Navigation**: Context-aware navigation with all pages listed
- **Breadcrumb Navigation**: Clear path navigation for better UX
- **Responsive Design**: Works perfectly on all devices
- **Accessibility**: WCAG 2.1 AA compliant
- **Interactive Elements**: 
  - Copy color codes with one click
  - Smooth scrolling navigation
  - Mobile-friendly menus
- **GitHub Pages Ready**: Zero-config deployment

## 🚀 Quick Start

### Option 1: Using GitHub Desktop (Recommended for beginners)

1. **Create a new repository on GitHub**
   - Go to GitHub.com and create a new repository
   - Name it `brand-guidelines-site` or your preferred name
   - Make it public (required for free GitHub Pages)

2. **Clone with GitHub Desktop**
   - Open GitHub Desktop
   - Click "Clone a repository from the Internet"
   - Select your new repository
   - Choose where to save it locally

3. **Add the files**
   - Copy all the brand guidelines files into your local repository folder
   - In GitHub Desktop, you'll see all the new files listed

4. **Commit and push**
   - In GitHub Desktop, add a commit message like "Initial brand guidelines site"
   - Click "Commit to main"
   - Click "Push origin" to upload to GitHub

5. **Enable GitHub Pages**
   - Go to your repository on GitHub.com
   - Click Settings tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

Your site will be available at: `https://yourusername.github.io/repository-name`

### Option 2: Command Line Deployment

```bash
# Clone your repository
git clone https://github.com/yourusername/brand-guidelines-site.git
cd brand-guidelines-site

# Add all files
git add .
git commit -m "Initial brand guidelines site"
git push origin main

# Enable GitHub Pages in your repository settings
```

## 🛠️ Local Development

To work on the site locally:

### Prerequisites
- Ruby 2.7+ 
- Bundler gem

### Setup
```bash
# Install dependencies
bundle install

# Start development server
npm run dev
# or
bundle exec jekyll serve --livereload

# View at http://localhost:4000
```

### Available Scripts
```bash
npm run dev        # Start development server with live reload
npm run build      # Build site for production
npm run clean      # Clean build files
npm run test       # Run tests and link checking
npm run deploy     # Quick deploy to GitHub
```

## 📖 Page-by-Page Guide

### 🏠 **Homepage** (`index.md`)
**Purpose**: Welcome visitors and provide navigation to main sections
**Features**: 
- Overview of all guidelines sections
- Quick navigation cards
- Getting started instructions
- Hides sidebar for clean first impression

**Content Includes**:
- Welcome message and site purpose
- Three main section previews (Brand Overview, Visual Identity, Tone & Voice)
- Quick start instructions for new users
- Last updated timestamp

---

## 🎯 **Brand Overview Section** (`brand-overview/`)

### **Section Overview** (`brand-overview/index.md`)
**Layout**: `overview`
**Purpose**: Introduction to brand fundamentals
**Features**:
- Section cards showing subsections
- Quick access links
- Statistics about brand elements
- Featured content highlights

**Content Structure**:
- Mission & Vision card with highlights
- Brand Story card with key milestones
- Quick access to positioning and values
- Brand statistics (core values, founding year, etc.)

### **Mission & Vision** (`brand-overview/mission-vision.md`)
**Layout**: `brand-page`
**Purpose**: Define brand purpose and aspirations
**Features**:
- Sidebar navigation to page sections
- Related pages suggestions
- Structured content sections

**Detailed Content**:
- **Mission Statement**: Purpose and commitment
- **Vision Statement**: Future aspirations and goals
- **Core Values**: 6 fundamental principles with explanations
- **Brand Positioning**: Market position and differentiation
- **Practical Applications**: How mission/vision inform brand decisions

### **Brand Story** (`brand-overview/brand-story.md`)
**Layout**: `brand-page`
**Purpose**: Tell the narrative of brand evolution
**Features**:
- Timeline of brand development
- Key milestones and phases
- Evolution story with lessons learned

**Detailed Content**:
- **Origins**: Founding story and initial philosophy
- **Evolution Phases**: 3 phases of growth with key learnings
- **Milestones**: Year-by-year achievements from 2019-2024
- **Current Position**: Where the brand stands today
- **Future Vision**: Looking ahead and commitments

---

## 🎨 **Visual Identity Section** (`visual-identity/`)

### **Section Overview** (`visual-identity/index.md`)
**Layout**: `overview`
**Purpose**: Introduction to visual brand elements
**Features**:
- Visual design principles
- Quick access to color codes and downloads
- Featured content with previews
- Statistics about visual elements

**Content Structure**:
- Design principles (clarity, consistency, professionalism, accessibility, flexibility)
- Cards for Colors, Typography, and Logo Guidelines
- Featured sections with action buttons
- Implementation standards checklist

### **Colors** (`visual-identity/colors.md`)
**Layout**: `brand-page`
**Purpose**: Complete color palette documentation
**Features**:
- Interactive color palette display
- Copy-to-clipboard color codes
- Download links for design files
- Accessibility compliance information

**Comprehensive Color Documentation**:
- **Primary Colors**: Blue (#0066CC), Gray (#666666), Orange (#FF6B35)
- **Neutral Colors**: White, Light Gray, Dark Gray, Black
- **Color Codes**: Hex, RGB, CMYK, and Pantone values
- **Usage Guidelines**: Do's and don'ts with examples
- **Accessibility**: WCAG contrast ratios and compliance
- **Color Combinations**: Recommended pairings and applications
- **Technical Implementation**: CSS variables and print specifications

### **Typography** (`visual-identity/typography.md`)
**Layout**: `brand-page`
**Purpose**: Complete typography system documentation
**Features**:
- Interactive font display component
- Typography scale demonstration
- Download links for font files
- Responsive typography guidelines

**Comprehensive Typography Documentation**:
- **Font Families**: Inter (primary) and Source Serif Pro (secondary)
- **Typography Scale**: H1-H6 and body text sizes with examples
- **Hierarchy Guidelines**: Proper usage of each heading level
- **Usage Guidelines**: Do's and don'ts for font application
- **Responsive Typography**: Mobile, tablet, and desktop specifications
- **Implementation**: CSS code examples and font loading
- **Accessibility**: WCAG compliance and readability standards

### **Logo Guidelines** (`visual-identity/logo-guidelines.md`)
**Layout**: `brand-page`
**Purpose**: Logo usage and protection guidelines
**Features**:
- Logo variation examples
- Download package for all formats
- Usage examples and restrictions
- Quality control checklist

**Comprehensive Logo Documentation**:
- **Logo Variations**: Primary, stacked, symbol-only, wordmark, monogram
- **Clear Space**: Minimum spacing requirements with measurements
- **Minimum Sizes**: Digital and print size specifications
- **Color Usage**: Full color, reversed, and single-color applications
- **Placement Guidelines**: Hierarchy and positioning best practices
- **Incorrect Usage**: Common mistakes to avoid with examples
- **File Formats**: Vector and raster formats for different applications
- **Quality Checklist**: Pre-usage verification steps

---

## 🗣️ **Tone & Voice Section** (`tone-voice/`)

### **Section Overview** (`tone-voice/index.md`)
**Layout**: `overview`
**Purpose**: Introduction to brand communication standards
**Features**:
- Voice vs. tone explanation
- Communication philosophy
- Tone adaptations for different contexts
- Quick access to principles and guidelines

**Content Structure**:
- Voice vs. Tone definitions and examples
- Communication philosophy and core principles
- Voice characteristics overview (6 key traits)
- Tone adaptations (professional, conversational, supportive)
- Content types and applications
- Key messaging themes

### **Voice Characteristics** (`tone-voice/voice-characteristics.md`)
**Layout**: `brand-page`
**Purpose**: Define brand personality and communication traits
**Features**:
- Six core voice principles with examples
- Personality trait definitions
- Communication style guidelines
- Voice examples across different contexts

**Comprehensive Voice Documentation**:
- **Voice Principles**: 6 core traits with explanations and examples
  1. Professional Yet Approachable
  2. Collaborative, Not Prescriptive
  3. Confident and Knowledgeable
  4. Clear and Direct
  5. Authentic and Genuine
  6. Supportive and Encouraging
- **Personality Traits**: Expert Friend, Thoughtful Strategist, Reliable Partner
- **Communication Style**: Conversation flow, information sharing, problem-solving
- **Language Choices**: Preferred words, words to avoid, key phrases
- **Voice Examples**: Website copy, client communication, educational content
- **Tone Variations**: Professional, collaborative, educational, supportive contexts

### **Writing Guidelines** (`tone-voice/writing-guidelines.md`)
**Layout**: `brand-page`
**Purpose**: Practical rules for consistent communication
**Features**:
- Grammar and style standards
- Content structure templates
- Digital communication guidelines
- Writing checklist and templates

**Comprehensive Writing Documentation**:
- **Grammar & Style**: Capitalization, punctuation, numbers, contractions, acronyms
- **Content Structure**: Headlines, paragraphs, lists, call-to-action writing
- **Digital Guidelines**: Email, social media, website, blog writing standards
- **Common Phrases**: Preferred phrases vs. phrases to avoid
- **Writing Checklist**: Voice, clarity, technical, and brand consistency checks
- **Content Templates**: Email, blog post, social media, and presentation templates
- **Implementation Tips**: Getting started and continuous improvement advice

---

## 📁 Technical File Structure

```
brand-guidelines-site/
├── _config.yml                    # Jekyll configuration
├── _data/                         # Data files
│   ├── colors.yml                # Color palette data with hex, RGB, CMYK values
│   ├── typography.yml            # Font specifications and sizing
│   └── navigation.yml            # Site navigation structure
├── _includes/                     # Reusable components
│   ├── breadcrumbs.html          # Automatic breadcrumb navigation
│   ├── color-palette.html        # Interactive color display component
│   ├── navigation.html           # Responsive main navigation
│   ├── search.html               # Client-side search functionality
│   ├── sidebar-navigation.html   # Context-aware sidebar
│   └── typography-display.html   # Interactive font showcase
├── _layouts/                      # Page templates
│   ├── default.html              # Base layout with header/footer
│   ├── brand-page.html           # Individual guideline pages
│   └── overview.html             # Section landing pages
├── _sass/                         # Stylesheets
│   ├── _brand-colors.scss        # Color variables and utilities
│   ├── _typography.scss          # Typography system styles
│   └── main.scss                 # Main stylesheet with responsive design
├── assets/                        # Static assets
│   ├── css/main.css              # Compiled CSS
│   ├── js/main.js                # Interactive functionality
│   ├── images/                   # Brand images and examples
│   │   ├── logos/                # Logo files and variations
│   │   ├── color-swatches/       # Color palette images
│   │   └── examples/             # Usage examples and previews
│   ├── fonts/                    # Web font files
│   └── downloads/                # Downloadable brand assets
├── brand-overview/                # Brand foundation pages
│   ├── index.md                  # Section overview with cards
│   ├── mission-vision.md         # Purpose and values
│   └── brand-story.md            # Brand narrative and evolution
├── visual-identity/               # Visual design pages
│   ├── index.md                  # Visual identity overview
│   ├── colors.md                 # Complete color documentation
│   ├── typography.md             # Typography system guide
│   └── logo-guidelines.md        # Logo usage and protection
├── tone-voice/                    # Communication pages
│   ├── index.md                  # Communication overview
│   ├── voice-characteristics.md  # Brand personality definition
│   └── writing-guidelines.md     # Practical writing standards
├── index.md                       # Homepage with section navigation
├── package.json                   # Node.js dependencies and scripts
├── Gemfile                        # Ruby dependencies for Jekyll
├── README.md                      # This documentation
├── DEPLOYMENT-GUIDE.md           # Step-by-step deployment instructions
└── .gitignore                     # Git ignore patterns
```

## 🎨 Customization

### 1. Update Brand Information
Edit the data files in `_data/`:
- `colors.yml` - Your brand colors
- `typography.yml` - Your fonts
- `navigation.yml` - Site structure

### 2. Add Your Content
Replace the placeholder content in:
- `brand-overview/` pages
- `visual-identity/` pages  
- `tone-voice/` pages

### 3. Add Assets
Place your files in:
- `assets/images/logos/` - Logo files
- `assets/fonts/` - Font files
- `assets/downloads/` - Downloadable resources

### 4. Update Configuration
In `_config.yml`:
- Change `title` and `description`
- Update `url` to your GitHub Pages URL
- Modify other settings as needed

## 🔧 Advanced Features

### Search
- **Client-side search** works instantly without server
- **Searches all content** including titles, descriptions, and page content
- **Keyboard navigation** with arrow keys
- **Highlighted results** show matching terms

### Sidebar Navigation
- **Context-aware** - shows current section prominently
- **All pages listed** - complete site map in sidebar
- **Quick links** to important resources
- **Responsive** - collapsible on mobile

### Breadcrumbs
- **Automatic generation** based on URL structure
- **Semantic markup** for accessibility
- **Clear hierarchy** showing page location

## 📱 Responsive Design

The site works perfectly on:
- **Desktop** (1024px+) - Full sidebar and navigation
- **Tablet** (768px-1024px) - Adapted layouts
- **Mobile** (< 768px) - Collapsible navigation and stacked content

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- **Semantic HTML** throughout
- **Keyboard navigation** support
- **Screen reader** optimized
- **Color contrast** meets standards
- **Focus management** for interactive elements

## 🚀 Performance

- **Fast loading** with optimized assets
- **Progressive enhancement** - works without JavaScript
- **Minimal dependencies** - no heavy frameworks
- **Efficient search** with smart indexing
- **Optimized images** and fonts

## 📈 SEO Features

- **Jekyll SEO Tag** plugin included
- **Structured data** markup
- **Meta descriptions** on all pages
- **Sitemap** generation
- **RSS feed** support

## 🔒 Security

- **No server-side processing** required
- **Static site** - inherently secure
- **GitHub Pages** hosting security
- **No database** or user data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/brand-guidelines-site/issues)
- **Documentation**: This README and inline comments
- **Jekyll Docs**: [jekyllrb.com](https://jekyllrb.com/)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/en/pages)

## 🎯 Next Steps

1. **Customize the content** with your actual brand information
2. **Add your assets** (logos, fonts, images)
3. **Test the site** locally before deploying
4. **Enable GitHub Pages** in your repository settings
5. **Share your guidelines** with your team!

---

*Built with ❤️ using Jekyll and GitHub Pages*