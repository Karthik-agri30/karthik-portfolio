# ✅ GitHub Pages Deployment Checklist

Complete this checklist to ensure your portfolio is ready for GitHub Pages deployment.

## 📋 Pre-Deployment Checks

### Local Environment
- [ ] Node.js 18+ installed (`node -v` should show v18.0.0+)
- [ ] npm installed (`npm -v` should show 10.0.0+)
- [ ] Project cloned/downloaded locally
- [ ] Dependencies installed (`npm install` completed)
- [ ] Build succeeds locally (`npm run build` works)
- [ ] No build errors in console
- [ ] `dist/` folder contains your built files

### Configuration Files
- [ ] `vite.config.ts` has `base: '/'` configured
- [ ] `vite.config.ts` has `outDir: 'dist'` configured
- [ ] `index.html` updated with meta tags (title, description, og:tags)
- [ ] `CNAME` file contains: `www.karthikportfolio.in`
- [ ] `.gitignore` includes `node_modules/` and `dist/`
- [ ] `package.json` has correct build scripts

### Deployment Files
- [ ] `.github/workflows/deploy.yml` exists and configured
- [ ] `DEPLOYMENT.md` documentation complete
- [ ] `GITHUB-PAGES-SETUP.md` documentation complete
- [ ] `public/404.html` exists (for SPA routing)
- [ ] `public/_redirects` exists (optional, for alternate hosts)
- [ ] `verify-deployment.sh` and `.bat` scripts ready

### Git Repository
- [ ] Repository initialized with `git init`
- [ ] Remote added: `git remote add origin https://github.com/YOU/karthik_portfolio`
- [ ] All files committed: `git add .` and `git commit`
- [ ] No uncommitted changes: `git status` is clean

---

## 🚀 GitHub Setup

### Repository Access
- [ ] GitHub account created and logged in
- [ ] Repository created: `karthik_portfolio`
- [ ] Repository is **public** (required for free GitHub Pages)
- [ ] Local repo connected to GitHub: `git remote -v` shows origin

### GitHub Pages Configuration
1. Go to repository Settings → Pages
   - [ ] Source set to "Deploy from a branch"
   - [ ] Branch set to `gh-pages` (auto-created by Actions)
   - [ ] Folder set to `/ (root)`

2. Custom Domain Setup
   - [ ] "Custom domain" field filled: `www.karthikportfolio.in`
   - [ ] "Enforce HTTPS" checkbox enabled
   - [ ] "Custom domain" saved (CNAME file auto-created)

### GitHub Actions
- [ ] `.github/workflows/deploy.yml` exists in repository
- [ ] GitHub Actions tab shows workflow available
- [ ] No workflow syntax errors

---

## 🌐 Domain Configuration

### DNS Records (at Your Domain Registrar)

**Choose ONE method:**

**Method 1: CNAME Record (Recommended for www subdomain)**
- [ ] Type: CNAME
- [ ] Name: `www`
- [ ] Value: `YOUR_GITHUB_USERNAME.github.io`
- [ ] TTL: 3600 (or default)

**Method 2: A Records (For root domain or alias)**
- [ ] Type: A
- [ ] Name: `www` or `@`
- [ ] Values (all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] TTL: 3600 (or default)

### DNS Verification
- [ ] Run command: `nslookup www.karthikportfolio.in`
- [ ] Result shows your GitHub Pages IP or `github.io` alias
- [ ] DNS propagation complete (may take 5-48 hours)

---

## 🔄 First Deployment

### Push to GitHub
```bash
# Ensure branch is main
git branch -M main

# Push code to GitHub
git push -u origin main
```

- [ ] Code pushed to GitHub successfully
- [ ] No git errors during push
- [ ] Repository shows latest commits on GitHub

### GitHub Actions Execution
1. Go to repository → Actions tab
2. Check latest workflow run
   - [ ] Workflow named "Deploy to GitHub Pages" appears
   - [ ] Workflow status: 🟢 Green (completed successfully)
   - [ ] All steps completed without errors:
     - [ ] Checkout code
     - [ ] Setup Node.js
     - [ ] Install dependencies
     - [ ] Build project
     - [ ] Deploy to GitHub Pages

### GitHub Pages Status
Go to Settings → Pages:
- [ ] Status shows: "Your site is live at https://www.karthikportfolio.in"
- [ ] Status indicator: 🟢 Green
- [ ] Branch: `gh-pages` selected
- [ ] Custom domain: `www.karthikportfolio.in` configured
- [ ] HTTPS status: "Enforced" (after 24 hours)

---

## 🌍 Website Testing

### Access Your Site
- [ ] Site accessible at: `https://www.karthikportfolio.in`
- [ ] Page loads without errors (check console: F12)
- [ ] HTTPS protocol enabled (lock icon in address bar)

### Content Verification
- [ ] All sections visible: Hero, Projects, Skills, Contact, etc.
- [ ] Images load properly
- [ ] Navigation links work (hash-based routing #home, #projects, etc.)
- [ ] Smooth scrolling works
- [ ] Mobile responsive design works

### Animations & Interactivity
- [ ] Animations play smoothly
- [ ] Loading screen appears on initial load
- [ ] Particle background animates
- [ ] Hover effects work on project cards
- [ ] Contact form validates (try submitting empty form)
- [ ] Contact form submits successfully (simulated)

### API Integration
- [ ] Projects section loads from backend API
- [ ] If API fails, fallback projects display
- [ ] Project cards show correct information
- [ ] No API errors in browser console

### Mobile Testing
- [ ] Responsive on mobile (iPhone/Android)
- [ ] Mobile menu toggles and works
- [ ] Touch interactions responsive
- [ ] Text is readable on small screens
- [ ] No horizontal scroll issues

---

## 📊 Performance Verification

### Bundle Size
```bash
npm run build
```
- [ ] Build completes without warnings
- [ ] `dist/` folder size < 500KB (check folder size)
- [ ] Main JS bundle < 300KB
- [ ] CSS bundle < 100KB

### Network Performance
Open browser DevTools (F12) → Network tab:
- [ ] All images load (check waterfall)
- [ ] No failed requests (red status codes)
- [ ] Page load time < 3 seconds
- [ ] No console errors or warnings

### Lighthouse Score
1. Open DevTools → Lighthouse tab
2. Run Audits
   - [ ] Performance: > 80
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 85
   - [ ] SEO: > 90

---

## 🔐 Security Check

### HTTPS
- [ ] HTTPS enabled (padlock icon visible)
- [ ] Certificate issued by GitHub
- [ ] No mixed content warnings

### Headers & Metadata
- [ ] Page title: "Karthik's Portfolio - Frontend Developer"
- [ ] Meta description present
- [ ] Open Graph tags configured
- [ ] Canonical URL set to: `https://www.karthikportfolio.in`

### API Security
- [ ] No API keys exposed in frontend code
- [ ] Backend CORS configured for your domain
- [ ] API endpoints over HTTPS

---

## 🛠️ Troubleshooting

### Build Issues
- [ ] `npm install` runs without errors
- [ ] No peer dependency warnings
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors: `npx tsc --noEmit`

### Deployment Issues
- [ ] Check GitHub Actions logs for errors
- [ ] Verify `.github/workflows/deploy.yml` syntax
- [ ] GITHUB_TOKEN has correct permissions (automatic)

### Site Not Loading
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try incognito/private window
- [ ] Check DNS with: `nslookup www.karthikportfolio.in`
- [ ] Wait 24 hours for SSL certificate generation

### Styling Missing
- [ ] Check Network tab for CSS file loading
- [ ] Verify Tailwind CSS configured in `vite.config.ts`
- [ ] Clear browser cache and rebuild if needed
- [ ] Check for CSS minification issues

### API Not Working
- [ ] Check Network tab for API requests
- [ ] Verify API endpoint in code: `https://api.karthikportfolio.in/api/projects`
- [ ] Check CORS headers from backend
- [ ] Verify backend API is accessible from your domain

### SPA Routing Broken
- [ ] Verify `public/404.html` deployed
- [ ] Check GitHub Pages source settings
- [ ] Ensure `base: '/'` in `vite.config.ts`

---

## 📝 Post-Deployment

### Documentation
- [ ] README.md updated with project info
- [ ] DEPLOYMENT.md has clear instructions
- [ ] GITHUB-PAGES-SETUP.md has step-by-step guide
- [ ] Code comments explain non-obvious logic

### Monitoring
- [ ] Set up error tracking (optional: Sentry, LogRocket)
- [ ] Monitor GitHub Actions workflows regularly
- [ ] Check site analytics (optional: Google Analytics)

### Maintenance
- [ ] Schedule regular backups of code
- [ ] Review dependencies monthly: `npm outdated`
- [ ] Update dependencies safely: `npm update`
- [ ] Monitor GitHub for security alerts

---

## 🎉 Success Indicators

You're ready when:
- ✅ Site loads at `https://www.karthikportfolio.in`
- ✅ All content displays correctly
- ✅ Responsive design works on all devices
- ✅ Smooth animations and interactions
- ✅ No console errors or warnings
- ✅ HTTPS enabled with valid certificate
- ✅ GitHub Actions deploys on every push
- ✅ API data fetches successfully
- ✅ Performance meets standards

---

## 📞 Quick Reference

| What | Where |
|------|-------|
| **Live Site** | https://www.karthikportfolio.in |
| **Repository** | https://github.com/YOUR_USERNAME/karthik_portfolio |
| **GitHub Settings** | Repository → Settings → Pages |
| **Workflow Logs** | Repository → Actions |
| **DNS Status** | https://dnschecker.org |
| **SSL Status** | Repository → Settings → Pages |
| **Build Logs** | Actions tab → Latest workflow → View logs |

---

## 🚀 Deployment Commands Quick Reference

```bash
# Initial setup
git init
git remote add origin https://github.com/YOU/karthik_portfolio
npm install

# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm run preview                # Preview production build

# Deployment
git add .
git commit -m "Your message"
git push origin main          # Automatic GitHub Actions deployment!

# Verification
npm run build                 # Verify build works
git status                    # Check for uncommitted changes
```

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Site is live at custom domain
- [ ] All pages load correctly
- [ ] No errors in browser console
- [ ] Responsive on mobile
- [ ] API data displays properly
- [ ] GitHub Actions configured and working
- [ ] Documentation is clear and updated
- [ ] Back up code locally

**You're done! 🎉 Your portfolio is now live on GitHub Pages!**

For ongoing updates:
1. Make code changes locally
2. Commit and push: `git push origin main`
3. GitHub Actions automatically deploys
4. Visit your site to see updates

---

**Last Updated:** January 30, 2026
**Status:** ✅ Ready for Deployment
