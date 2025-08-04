# 🚀 Deployment Guide - GitHub Desktop

This guide will walk you through deploying your brand guidelines site using GitHub Desktop, which is the easiest method for non-technical users.

## ✅ What You Now Have

Your enhanced brand guidelines site now includes:

- ✅ **Search functionality** - Fast client-side search across all content
- ✅ **Sidebar navigation** - Lists all public pages with context-aware sections
- ✅ **Breadcrumb navigation** - Shows exactly where users are in the site
- ✅ **Responsive design** - Works perfectly on all devices
- ✅ **GitHub Pages ready** - Zero-config deployment

## 📋 Prerequisites

Before we start, make sure you have:
- [ ] GitHub account (free at [github.com](https://github.com))
- [ ] GitHub Desktop installed (you mentioned you have this)
- [ ] All the brand guidelines files ready

## 🎯 Step-by-Step Deployment

### Step 1: Create a New Repository on GitHub

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - Repository name: `brand-guidelines-site` (or your preferred name)
   - Description: "Comprehensive brand guidelines documentation"
   - ✅ Make it **Public** (required for free GitHub Pages)
   - ✅ **Do NOT** check "Add a README file" (we already have one)
   - ✅ **Do NOT** add .gitignore or license (we have these too)
5. **Click "Create repository"**

### Step 2: Clone Repository with GitHub Desktop

1. **Open GitHub Desktop**
2. **Click "Clone a repository from the Internet"**
3. **Select your new repository** from the GitHub.com tab
4. **Choose where to save it** locally (e.g., Documents/GitHub/)
5. **Click "Clone"**

### Step 3: Add Your Brand Guidelines Files

1. **Open the cloned folder** in Finder (Mac) or Explorer (Windows)
2. **Copy ALL the brand guidelines files** into this folder:
   ```
   - _config.yml
   - index.md
   - package.json
   - Gemfile
   - README.md
   - .gitignore
   - _data/ (folder)
   - _includes/ (folder)
   - _layouts/ (folder)
   - _sass/ (folder)
   - assets/ (folder)
   - brand-overview/ (folder)
   - visual-identity/ (folder)
   - tone-voice/ (folder)
   ```

### Step 4: Commit and Push with GitHub Desktop

1. **Go back to GitHub Desktop**
2. **You'll see all the new files** listed in the left panel
3. **In the bottom left:**
   - Summary: `Initial brand guidelines site`
   - Description: `Complete brand guidelines with search, sidebar navigation, and breadcrumbs`
4. **Click "Commit to main"**
5. **Click "Push origin"** to upload to GitHub

### Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub.com
2. **Click the "Settings" tab**
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source":**
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Choose "/ (root)" folder
5. **Click "Save"**

### Step 6: Wait and Access Your Site

1. **GitHub will show you the URL** where your site will be published
2. **Wait 2-5 minutes** for the site to build
3. **Visit your live site** at: `https://yourusername.github.io/repository-name`

## 🎉 Success! Your Site Features

Your deployed site now includes:

### 🔍 **Search Functionality**
- **How it works**: Type in the search box in the sidebar
- **Searches**: All page titles, descriptions, and content
- **Features**: 
  - Instant results as you type
  - Highlighted search terms
  - Keyboard navigation (arrow keys)
  - Click any result to navigate

### 📑 **Sidebar Navigation**
- **All pages listed**: Complete site structure in left sidebar
- **Context-aware**: Current section highlighted
- **Quick links**: Direct access to important resources
- **Mobile-friendly**: Collapses on smaller screens

### 🧭 **Breadcrumb Navigation**
- **Shows your location**: Home > Section > Current Page
- **Clickable path**: Navigate back to any parent section
- **Automatic**: Generated based on your site structure

## 🛠️ Customizing Your Site

Now that it's deployed, you can customize it:

### Update Your Brand Information

1. **Edit files locally** using any text editor
2. **Update in GitHub Desktop** (it will show changes)
3. **Commit and push** to update the live site

Key files to customize:
- `_data/colors.yml` - Your brand colors
- `_data/typography.yml` - Your fonts
- `brand-overview/` pages - Your brand story
- `visual-identity/` pages - Your visual guidelines
- `tone-voice/` pages - Your communication style

### Add Your Assets

Upload your files to:
- `assets/images/logos/` - Your logo files
- `assets/fonts/` - Your web fonts
- `assets/downloads/` - Downloadable brand assets

## 🔧 Local Development (Optional)

If you want to preview changes before publishing:

### Prerequisites
- Install Ruby 2.7+ 
- Install Bundler: `gem install bundler`

### Commands
```bash
# In your site folder
bundle install          # Install dependencies
bundle exec jekyll serve # Start local server
# Visit http://localhost:4000
```

## 📱 Testing Your Site

After deployment, test these features:

### Search Testing
- [ ] Search for "color" - should find color-related pages
- [ ] Search for "font" - should find typography pages
- [ ] Try keyboard navigation with arrow keys

### Navigation Testing
- [ ] Click through all sidebar links
- [ ] Test breadcrumbs on different pages
- [ ] Verify mobile menu works on phone/tablet

### Content Testing
- [ ] All pages load correctly
- [ ] Images and downloads work
- [ ] No broken links

## 🆘 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository is public
- Verify GitHub Pages source is set to "main" branch

### Search Not Working?
- Check if JavaScript is enabled in browser
- Look for any console errors (F12 in browser)

### Missing Styles?
- Verify all `_sass/` files were uploaded
- Check `assets/css/main.css` exists

### Content Not Updating?
- Make sure you committed and pushed changes
- Clear browser cache (Ctrl/Cmd + F5)
- Check GitHub Actions tab for build status

## 🎯 Next Steps

1. **✅ Customize content** with your actual brand information
2. **✅ Upload your brand assets** (logos, fonts, etc.)
3. **✅ Test all functionality** 
4. **✅ Share with your team** - your site is now live!

## 📞 Getting Help

- **GitHub Desktop Help**: [docs.github.com/desktop](https://docs.github.com/en/desktop)
- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com/)

---

**Congratulations! 🎉** You now have a fully functional, searchable brand guidelines site with navigation and breadcrumbs, deployed and ready to use!