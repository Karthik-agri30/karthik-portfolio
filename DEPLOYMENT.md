# GitHub Pages Deployment Guide

This portfolio is configured for seamless deployment to GitHub Pages with automatic builds via GitHub Actions.

## Prerequisites

- GitHub account with a repository set up
- Node.js 18+ installed locally
- npm or yarn package manager

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys on every push to `main` or `master` branch.

**Steps:**
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages with CNAME (`www.karthikportfolio.in`)

3. Visit your site at: `https://www.karthikportfolio.in`

**GitHub Actions Workflow Location:** `.github/workflows/deploy.yml`

### Method 2: Manual Local Build & Deploy

If you prefer manual control or need to test locally:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview locally
npm run preview
```

Then manually upload the `dist/` folder to GitHub Pages:
1. Go to GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch" → `gh-pages` branch
4. Save

### Method 3: Using GitHub CLI

```bash
# Build
npm run build

# Deploy using GitHub CLI
gh auth login
gh repo edit --enable-pages
# Then push dist folder to gh-pages branch
```

## Configuration Details

### Vite Build Settings (`vite.config.ts`)
- **Base Path**: `/` (configured for custom domain)
- **Output Directory**: `dist/`
- **Minification**: Enabled (Terser)
- **Console Removal**: Enabled in production
- **Source Maps**: Disabled (production build)

### GitHub Pages Configuration
- **Domain**: `www.karthikportfolio.in` (CNAME file)
- **Source Branch**: `gh-pages` (auto-created by GitHub Actions)
- **SSL/TLS**: Enabled by GitHub

## Troubleshooting

### Issue: Assets not loading after deployment
**Solution**: Ensure `base: '/'` in `vite.config.ts`. For subdirectory deployments, change to `base: '/repo-name/'`

### Issue: SPA routing not working (getting 404 errors)
**Solution**: The `public/404.html` file redirects 404s to `index.html` for proper SPA routing. Ensure this file is deployed.

### Issue: Styles not applying
**Solution**: Verify Tailwind CSS and theme CSS are importing correctly in `src/styles/index.css`

### Issue: API calls failing after deployment
**Solution**: Check CORS settings on backend API at `https://api.karthikportfolio.in`. Backend must allow requests from your GitHub Pages domain.

## API Endpoint Configuration

The backend API is hosted externally at: `https://api.karthikportfolio.in/api/projects`

**CORS Requirements:**
- Backend must allow `Access-Control-Allow-Origin: https://www.karthikportfolio.in`
- Ensure API supports GET requests without authentication

If using GitHub Pages without custom domain (e.g., `username.github.io/karthik_portfolio`), backend may need to allow that origin as well.

## Environment Variables

Currently, the project does not use environment variables. If needed in the future:

1. Create `.env.local` for local development
2. Create `.env.production` for production variables
3. Use `import.meta.env.VITE_*` in code for Vite to pick up variables

Example:
```
VITE_API_URL=https://api.karthikportfolio.in
```

## Performance Optimizations

The build includes:
- ✅ Minified JavaScript (Terser)
- ✅ CSS purged (Tailwind)
- ✅ Console statements removed
- ✅ Source maps disabled (smaller bundle)
- ✅ Asset optimization via Vite

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required
- CSS Grid & Flexbox support required

## Next Steps

1. Ensure GitHub repository is connected to custom domain `www.karthikportfolio.in`
2. Update DNS records to point to GitHub Pages:
   - Add A records pointing to GitHub's IP addresses
   - Or add CNAME record: `www.karthikportfolio.in` → `username.github.io`
3. GitHub automatically generates SSL certificate within 24 hours
4. Test responsive design: Use Chrome DevTools or physical devices

## Contact & Support

For issues with deployment, check:
- GitHub Actions logs in repository
- GitHub Pages settings in repository
- Backend API CORS configuration
