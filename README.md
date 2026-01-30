# Karthik's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, dynamic project showcase, and contact functionality.

## 🌐 Live Demo

- **Primary**: https://www.karthikportfolio.in
- **Backup**: https://karthik-portfolio-aps4ikg47-karthik-agri30s-projects.vercel.app/

## ✨ Features

- **Modern Design**: Animated UI with smooth transitions and gradients
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dynamic Projects**: Fetches projects from backend API with fallback data
- **Interactive Sections**: 
  - Hero section with animated achievements
  - Projects showcase with 3D card effects
  - Skills section with animated progress bars
  - Contact form with validation
  - Coding profiles (GitHub, LeetCode, HackerRank)
  - Articles & social links
- **Performance**: Optimized builds with Vite, minified assets, lazy animations
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Motion (Framer Motion)
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Hosting**: GitHub Pages (www.karthikportfolio.in)
- **Backend**: Vercel (API at api.karthikportfolio.in)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/karthik_portfolio.git
cd karthik_portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Quick Start:**
```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

GitHub Actions will automatically build and deploy to `www.karthikportfolio.in`

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
src/
├── main.tsx                 # React entry point
├── app/
│   ├── App.tsx             # Root component
│   └── components/
│       ├── HeroSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       ├── ContactSection.tsx
│       ├── ResumeSection.tsx
│       ├── ArticlesSection.tsx
│       ├── CodingProfilesSection.tsx
│       ├── Navigation.tsx
│       ├── ParticlesBackground.tsx
│       ├── LoadingScreen.tsx
│       ├── ScrollToTop.tsx
│       └── ui/              # Radix UI components
└── styles/                  # Global CSS & Tailwind

public/                       # Static assets
├── 404.html                 # SPA routing fallback
└── _redirects               # Vercel/Netlify redirects

.github/workflows/
└── deploy.yml               # GitHub Actions workflow
```

## 🔧 Configuration

### Environment Variables
Currently, no environment variables are required. The backend API is hardcoded to `https://api.karthikportfolio.in/api/projects`

To add env variables in the future:
```bash
# Create .env.local for development
VITE_API_URL=https://api.karthikportfolio.in

# Use in code
const API_URL = import.meta.env.VITE_API_URL
```

### Vite Configuration
See `vite.config.ts` for:
- Base path configuration (for subdirectory deployments)
- Build optimization settings
- Module aliases

## 🌍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support
- CSS Grid & Flexbox

## 📝 Development

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run deploy    # Run build (use before manual deployment)
```

### Code Style

- TypeScript for type safety
- React hooks for state management
- Semantic HTML for accessibility
- Tailwind CSS for consistent styling

## 🚦 GitHub Pages Setup

The project uses:
- **Base Path**: `/` (configured for custom domain)
- **CNAME**: `www.karthikportfolio.in`
- **SSL/TLS**: Automatic via GitHub
- **Workflow**: `.github/workflows/deploy.yml`

## ✅ Pre-Deployment Checklist

- [x] Update website title and meta tags
- [x] Configure custom domain (CNAME file)
- [x] Set up GitHub Actions workflow
- [x] Add 404.html for SPA routing
- [x] Test API endpoints
- [x] Verify responsive design
- [x] Optimize build size
- [x] Enable GitHub Pages in repository settings

## 🐛 Troubleshooting

**Assets not loading?**
- Check `base: '/'` in `vite.config.ts`
- Clear browser cache (Ctrl+Shift+Delete)

**SPA routing broken?**
- Ensure `public/404.html` is deployed
- Check GitHub Pages source settings

**API calls failing?**
- Verify backend CORS headers
- Check network tab in DevTools
- Ensure API endpoint is reachable

**Styles missing?**
- Rebuild project: `npm run build`
- Clear dist folder: `rm -rf dist`
- Reinstall dependencies: `npm install`

## 📞 Contact

- Email: tkarthik455@gmail.com
- Phone: +91 6385534759
- Location: Neyveli(TS), Cuddalore-607 801, Tamil Nadu

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Attributions

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party libraries and resources.

