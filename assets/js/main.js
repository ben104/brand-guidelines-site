// Main JavaScript file for brand guidelines site

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all JavaScript functionality
  initNavigation();
  initScrollToTop();
  initSmoothScrolling();
  initCodeCopyButtons();
  initColorPaletteCopy();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('nav-menu--open');
      
      // Update hamburger animation
      this.classList.toggle('nav-toggle--active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu--open');
        navToggle.classList.remove('nav-toggle--active');
      }
    });
    
    // Handle submenu interactions
    const hasChildrenItems = document.querySelectorAll('.nav-item.has-children');
    hasChildrenItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const submenu = item.querySelector('.nav-submenu');
      
      if (window.innerWidth <= 768) {
        // Mobile: toggle submenu on click
        link.addEventListener('click', function(e) {
          e.preventDefault();
          submenu.classList.toggle('nav-submenu--open');
          this.classList.toggle('nav-link--open');
        });
      }
    });
  }
}

// Scroll to top button
function initScrollToTop() {
  // Create scroll to top button
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  scrollButton.setAttribute('aria-label', 'Scroll to top');
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-blue, #0066CC);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  `;
  
  document.body.appendChild(scrollButton);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.style.opacity = '1';
      scrollButton.style.visibility = 'visible';
    } else {
      scrollButton.style.opacity = '0';
      scrollButton.style.visibility = 'hidden';
    }
  });
  
  // Scroll to top when clicked
  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Copy code snippets functionality
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentNode;
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    
    button.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      padding: 0.25rem 0.5rem;
      background: var(--primary-blue, #0066CC);
      color: white;
      border: none;
      border-radius: 3px;
      font-size: 0.75rem;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    // Show button on hover
    pre.addEventListener('mouseenter', () => {
      button.style.opacity = '1';
    });
    
    pre.addEventListener('mouseleave', () => {
      button.style.opacity = '0';
    });
    
    // Copy functionality
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });
  });
}

// Color palette copy functionality
function initColorPaletteCopy() {
  const colorCodes = document.querySelectorAll('.color-codes span');
  
  colorCodes.forEach(span => {
    if (span.textContent.includes('#') || span.textContent.includes('rgb') || span.textContent.includes('cmyk')) {
      span.style.cursor = 'pointer';
      span.title = 'Click to copy';
      
      span.addEventListener('click', async function() {
        const textToCopy = this.textContent.replace(/^(hex|rgb|cmyk):\s*/i, '');
        
        try {
          await navigator.clipboard.writeText(textToCopy);
          
          // Visual feedback
          const originalText = this.textContent;
          this.textContent = 'Copied!';
          this.style.fontWeight = 'bold';
          
          setTimeout(() => {
            this.textContent = originalText;
            this.style.fontWeight = 'normal';
          }, 1500);
        } catch (err) {
          console.error('Failed to copy color code: ', err);
        }
      });
    }
  });
}

// Utility function to handle responsive behavior
function handleResize() {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (window.innerWidth > 768) {
    // Desktop: ensure menu is visible and toggle is reset
    if (navMenu && navToggle) {
      navMenu.classList.remove('nav-menu--open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('nav-toggle--active');
    }
  }
}

// Handle window resize
window.addEventListener('resize', handleResize);

// Print functionality
window.addEventListener('beforeprint', function() {
  // Ensure all content is visible for printing
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu) {
    navMenu.style.display = 'block';
    navMenu.style.position = 'static';
  }
});

window.addEventListener('afterprint', function() {
  // Restore normal navigation behavior
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu && window.innerWidth <= 768) {
    navMenu.style.display = '';
    navMenu.style.position = '';
  }
});

// Focus management for accessibility
document.addEventListener('keydown', function(e) {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navMenu.classList.contains('nav-menu--open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-menu--open');
      navToggle.classList.remove('nav-toggle--active');
      navToggle.focus();
    }
  }
});

// Enhanced CSS for dynamic elements
const style = document.createElement('style');
style.textContent = `
  .copy-code-button:hover {
    background-color: var(--primary-dark, #0052a3) !important;
  }
  
  .scroll-to-top:hover {
    background-color: var(--primary-dark, #0052a3) !important;
    transform: translateY(-2px);
  }
  
  .nav-toggle--active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle--active .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle--active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .nav-submenu--open {
    display: block !important;
  }
  
  .nav-link--open::after {
    content: " ▲";
  }
  
  @media (max-width: 768px) {
    .nav-submenu {
      display: none;
    }
  }
`;

document.head.appendChild(style);