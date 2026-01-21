# EditifyMedia Website Clone

This is a complete recreation of the EditifyMedia website (https://editifymedia.com) with modern web technologies.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations**: Smooth scroll animations, hover effects, and transitions
- **Interactive Elements**: 
  - Portfolio tabs (Long-form vs Short-form videos)
  - FAQ accordion
  - Mobile navigation menu
  - Smooth scrolling navigation
- **Professional Styling**: Dark theme with gradient accents matching the original
- **Performance Optimized**: Lazy loading, efficient animations, and clean code

## Sections Included (Current Live Version)

1. **Hero Section**: Main landing area with call-to-action buttons
2. **Testimonials**: Customer feedback (3 cards, one full-width highlight)
3. **Services**: Core service offerings
4. **Portfolio**: Tabbed (Long‑form vs Short‑form) with carousels & single‑play YouTube logic
5. **Comparison**: Side-by-side comparison with competitors
6. **Call-to-Action**: Primary conversion section
7. **FAQ**: Expandable frequently asked questions
8. **Footer**: Links and company information

Removed legacy sections: Clients, Results (intentionally excluded for a more concise landing page experience)

## File Structure

```
Harsh Website/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── logo.png        # Company logo
│   ├── nams.png        # Trust indicator logo
│   ├── fino.png        # Trust indicator logo
│   ├── katie-lee.jpg   # Testimonial avatar
│   ├── deevankshu.jpg  # Testimonial avatar
│   ├── result-1.jpg    # Results showcase image
│   ├── result-2.jpg    # Results showcase image
│   ├── result-3.jpg    # Results showcase image
│   ├── result-4.jpg    # Results showcase image
│   ├── result-5.jpg    # Results showcase image
│   ├── result-6.jpg    # Results showcase image
│   ├── long-form-1.jpg # Portfolio thumbnail
│   ├── long-form-2.jpg # Portfolio thumbnail
│   ├── long-form-3.jpg # Portfolio thumbnail
│   ├── short-form-1.jpg # Portfolio thumbnail
│   ├── short-form-2.jpg # Portfolio thumbnail
│   ├── short-form-3.jpg # Portfolio thumbnail
│   └── short-form-4.jpg # Portfolio thumbnail
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Grid, Flexbox, and CSS animations
- **Vanilla JavaScript**: Interactive functionality without dependencies
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Migrated from Inter to SF Pro Display (system fallback stack for performance)

## Color Scheme

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Background**: #0a0a0a (Near Black)
- **Surface**: #1a1a1a / #2a2a2a (Dark Grays)
- **Text**: #ffffff (White) / #b3b3b3 (Light Gray)

## Installation & Local Preview

1. **Download/Clone**: Get all files to your local machine
2. **Open**: Simply open `index.html` in any modern web browser
3. **No Build Process**: Pure static site (HTML/CSS/JS) – no tooling required.

---

## Deploying to Netlify

You have multiple zero‑config options because this is a static site.

### Option A: One‑Click (Drag & Drop)
1. Go to https://app.netlify.com/drop
2. Drag the entire `Harsh Website` folder (or zip it first) – make sure `index.html` is at the root of what you upload
3. Netlify assigns a temporary domain (e.g., `your-site-name.netlify.app`)
4. Click Site Settings → Change site name (optional)

### Option B: Git-Based Continuous Deployment (Recommended)
1. Initialize a git repo (if not already):
  ```powershell
  git init
  git add .
  git commit -m "Initial commit: static site"
  git branch -M main
  ```
2. Create an empty repository on GitHub (no README/license)
3. Add remote & push:
  ```powershell
  git remote add origin https://github.com/<your-username>/<repo-name>.git
  git push -u origin main
  ```
4. In Netlify → Add new site → Import from Git → Choose your repo
5. Build settings:
  - Build command: (leave blank)
  - Publish directory: `.`
6. Deploy – future pushes to `main` auto-redeploy

### Option C: Netlify CLI (Manual / Preview Deploys)
1. Install CLI globally (Node required):
  ```powershell
  npm install -g netlify-cli
  ```
2. Authenticate:
  ```powershell
  netlify login
  ```
3. Inside project folder, first time:
  ```powershell
  netlify init
  ```
  - When prompted: "Create & configure a new site"
  - Build command: (leave empty)
  - Publish dir: `.`
4. Deploy production:
  ```powershell
  netlify deploy --prod
  ```
5. (Optional) Preview deploys:
  ```powershell
  netlify deploy
  ```

### netlify.toml
Already included. It:
- Sets `publish = "."`
- Adds security headers
- Applies long-term caching to `/assets/*`

To add SPA-style routing later, uncomment the redirect rule inside `netlify.toml`.

### Custom Domain
1. In Site Settings → Domain management → Add custom domain
2. Update your registrar's DNS: point an `ALIAS`/`ANAME` or `CNAME` to the Netlify target
3. Enable HTTPS (Netlify auto-provisions Let's Encrypt certs)

### Environment Variables
Not required right now. If you add API features later, set them under Site Settings → Environment variables.

### Caching Strategy Notes
Images/scripts in `/assets/` are immutable-cached. If you revise a file, rename it (e.g., `hero-v2.png`) so the browser pulls the new version.

### Optional Enhancements Post-Deploy
- Add `_redirects` for vanity paths if needed
- Add a `sitemap.xml` & `robots.txt` for SEO
- Add `<meta property="og:image" ...>` for rich sharing
- Integrate analytics (Plausible, Umami, GA)
- Add a contact form using Netlify Forms (requires adding a form element with `netlify` attribute)

---
## Quick Deployment Checklist
| Task | Status |
|------|--------|
| Root contains index.html | ✅ |
| netlify.toml present | ✅ |
| No build step needed | ✅ |
| Asset paths are relative | ✅ |
| Security headers configured | ✅ |
| Long cache for assets | ✅ |

---

## Customization

### Changing Content
- Edit the text content directly in `index.html`
- Replace placeholder images in the `assets/` folder
- Modify colors in the CSS custom properties at the top of `styles.css`

### Adding Real Images
The current images are SVG placeholders. To use real images:

1. Replace the SVG files in `assets/` with actual JPG/PNG images
2. Ensure the filenames match what's referenced in the HTML
3. Recommended sizes:
   - Logo: 200x50px
   - Trust logos: 80x30px  
   - Avatars: 100x100px
   - Result images: 300x200px
   - Long-form thumbnails: 400x225px (16:9 ratio)
   - Short-form thumbnails: 225x400px (9:16 ratio)

### Adding Video Functionality
Currently, the play buttons show a console message. To add real video functionality:

1. Replace the console.log in the video play button handlers (script.js)
2. Add video modal/lightbox library
3. Connect to actual video files or embed codes

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance Features

- Intersection Observer for scroll animations
- Optimized CSS animations
- Efficient DOM manipulation
- Lazy loading ready (uncomment in script.js)
- Minimal external dependencies

## Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px  
- Mobile: < 768px

## Credits

- Design inspired by: https://editifymedia.com
- Icons: Font Awesome
- Fonts: Google Fonts (Inter)
- Built with: Pure HTML, CSS, and JavaScript

## License

This is a educational/portfolio project. Please ensure you have proper rights to any content or images you use in production.

---

**Note**: This is a static recreation for demonstration purposes. For a production website, consider adding:
- Content Management System (CMS)
- Contact form backend
- Analytics tracking
- SEO optimization
- Performance monitoring
-- Accessibility improvements (ARIA roles, focus states, prefers-reduced-motion toggle for cursor effect)

---

## Troubleshooting Netlify Deploys
| Symptom | Fix |
|---------|-----|
| 404 on root | Ensure `publish = "."` and `index.html` is at repo root |
| Assets 404 | Check case sensitivity (Netlify is case-sensitive vs Windows) |
| Changes not visible | Hard refresh / clear cache; immutable asset name changed? |
| Wrong page served on deep link | Add SPA redirect rule in `netlify.toml` |
| Fonts flash | Consider self-hosting fonts or using `font-display: swap` |

---

## Changelog Highlights
- Removed Clients & Results sections
- Added glass water droplet cursor trail (desktop only for performance)
- Updated testimonials (3 entries, one full-width)
- Added YouTube single-play enforcement for Short-form tab
- Upgraded typography to SF Pro Display stack
- Added Netlify configuration & deployment documentation