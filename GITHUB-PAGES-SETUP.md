# GitHub Pages Setup Guide

This guide walks you through setting up your portfolio for GitHub Pages deployment.

## Step 1: Repository Setup

### 1.1 Create/Update GitHub Repository

```bash
# If you haven't already, initialize git
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/karthik_portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 1.2 Repository Structure Required

Ensure your GitHub repository has:
```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml           ← GitHub Actions configuration
├── public/
│   ├── 404.html                 ← SPA routing fallback
│   └── _redirects               ← Redirect rules
├── src/
├── vite.config.ts               ← Build configuration with base: '/'
├── index.html
├── package.json
├── CNAME                        ← Custom domain (www.karthikportfolio.in)
└── .gitignore
```

---

## Step 2: GitHub Pages Configuration

### 2.1 Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** tab
3. Scroll to **Pages** section (left sidebar under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (will be auto-created by GitHub Actions)
   - **Folder**: Select `/ (root)`
5. Click **Save**

### 2.2 Configure Custom Domain

1. In GitHub Pages settings, under "Custom domain":
   - Enter: `www.karthikportfolio.in`
   - Click **Save**

2. GitHub automatically creates/updates `CNAME` file in gh-pages branch

3. **Configure DNS** (at your domain registrar):

   **Option A: Using CNAME record (Recommended)**
   ```
   Type:  CNAME
   Name:  www
   Value: YOUR_USERNAME.github.io
   ```

   **Option B: Using A records**
   ```
   Type:  A
   Name:  www
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

4. DNS propagation takes 24-48 hours (usually 5-10 minutes)

5. GitHub will generate SSL certificate (another 24 hours)

---

## Step 3: GitHub Actions Workflow

### 3.1 Workflow File Location

```
.github/workflows/deploy.yml
```

### 3.2 What the Workflow Does

When you push to `main` or `master` branch:

1. ✅ Checks out your code
2. ✅ Sets up Node.js 18
3. ✅ Installs dependencies
4. ✅ Builds the project (`npm run build`)
5. ✅ Deploys `dist/` to `gh-pages` branch
6. ✅ GitHub Pages serves from `gh-pages` branch
7. ✅ Custom domain resolves to your site

### 3.3 Workflow Permissions

GitHub Actions uses `GITHUB_TOKEN` (automatic secret) to:
- Commit to `gh-pages` branch
- Deploy to GitHub Pages

**No manual secrets needed!**

---

## Step 4: Verify Deployment

### 4.1 Check GitHub Actions

1. Go to your repository
2. Click **Actions** tab
3. Find your latest workflow run
4. Verify:
   - ✅ Checkout succeeded
   - ✅ Dependencies installed
   - ✅ Build succeeded
   - ✅ Deploy succeeded

### 4.2 Check GitHub Pages

1. Go to **Settings** → **Pages**
2. Look for green checkmark: "Your site is live at https://www.karthikportfolio.in"
3. Visit your domain in browser

### 4.3 Troubleshoot Deployment

**Issue: Workflow fails at "Deploy"**
- Check GitHub Actions logs
- Ensure `dist/` folder is being created
- Verify `vite build` command works locally

**Issue: Site shows 404 or wrong content**
- Clear browser cache (Ctrl+Shift+Delete)
- Check DNS propagation: https://dnschecker.org
- Wait 24 hours for SSL certificate generation
- Verify CNAME file exists in gh-pages branch

**Issue: Custom domain not working**
- Verify DNS records at domain registrar
- Use `nslookup www.karthikportfolio.in` to check DNS
- Check GitHub Pages settings show "Your site is live at..."

---

## Step 5: Local Testing

### 5.1 Test Build Locally

```bash
# Install dependencies
npm install

# Build project
npm run build

# Preview build
npm run preview
```

### 5.2 Verify Build Output

Check `dist/` folder contains:
```
dist/
├── index.html
├── assets/
│   ├── main.js
│   ├── main.css
│   └── [other assets]
├── 404.html
└── [other assets]
```

### 5.3 Test SPA Routing

1. Build locally: `npm run build`
2. Preview: `npm run preview`
3. Navigate through sections using hash links (#projects, #skills, #contact)
4. All routes should work without 404 errors

---

## Step 6: Deployment Workflow

### Daily Development

```bash
# Make changes
# Edit component files, styles, etc.

# Test locally
npm run dev

# When ready, commit and push
git add .
git commit -m "Add new feature or fix"
git push origin main
```

### GitHub Actions Automatically

1. Detects push to `main`
2. Runs build workflow
3. Deploys to `gh-pages`
4. Site updates at https://www.karthikportfolio.in

**No manual deployment steps needed!**

---

## Step 7: Monitoring & Maintenance

### 7.1 GitHub Actions Logs

Monitor deployments:
1. Repository → Actions tab
2. Click workflow runs
3. Check logs for errors

### 7.2 DNS Propagation

After changing domain:
```bash
# Check DNS is configured
nslookup www.karthikportfolio.in

# Should show: alias for USERNAME.github.io
```

### 7.3 SSL Certificate Status

Check in GitHub Pages settings:
- 🟢 Enforced (after 24 hours)
- 🟡 Pending (wait 24 hours)
- 🔴 Error (check DNS configuration)

---

## Step 8: Performance Optimization

The build already includes:
- ✅ Minified JavaScript
- ✅ Optimized CSS
- ✅ Lazy animations (viewport-based)
- ✅ Compressed assets

### Monitor Performance

1. Go to your live site
2. Right-click → Inspect → Network tab
3. Check file sizes (should be < 500KB total)

---

## Configuration Files Reference

### vite.config.ts
```typescript
base: '/',  // For custom domain www.karthikportfolio.in
            // Change to '/repo-name/' if using username.github.io/repo
```

### CNAME
```
www.karthikportfolio.in
```

### .github/workflows/deploy.yml
```yaml
on:
  push:
    branches: [main, master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup Node.js
      - npm install
      - npm run build
      - deploy to gh-pages with CNAME
```

### public/404.html
Redirects 404 errors to index.html for SPA routing

---

## Rollback & Recovery

### Rollback to Previous Version

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert COMMIT_ID
git push origin main

# GitHub Actions will redeploy previous version
```

### Clear GitHub Pages Cache

```bash
# If site shows old content:
git clean -fdx dist/
npm run build
git add .
git commit -m "Rebuild"
git push origin main
```

---

## FAQ

**Q: How long does deployment take?**
A: Usually 2-5 minutes for GitHub Actions to build and deploy.

**Q: What if I want to test before deploying?**
A: Push to a `staging` branch instead. Only `main`/`master` triggers deployment.

**Q: Can I deploy without GitHub Actions?**
A: Yes, but you must manually push `dist/` to `gh-pages` branch.

**Q: What about environment variables?**
A: Currently not needed. To add: create `.env` and use `import.meta.env.VITE_*`

**Q: How do I update the domain?**
A: Update CNAME file and GitHub Pages settings, update DNS records.

**Q: Is HTTPS required?**
A: GitHub automatically enables HTTPS (wait 24 hours after domain setup).

---

## Support & Troubleshooting

**GitHub Pages Documentation**
https://docs.github.com/en/pages

**GitHub Actions Documentation**
https://docs.github.com/en/actions

**Vite Build Configuration**
https://vitejs.dev/config/

**Your Portfolio**
- Repository: https://github.com/YOUR_USERNAME/karthik_portfolio
- Live Site: https://www.karthikportfolio.in

---

## Summary

✅ **You're all set for GitHub Pages!**

1. Repository pushed to GitHub
2. GitHub Pages enabled with custom domain
3. GitHub Actions configured for auto-deployment
4. DNS records configured
5. Site accessible at https://www.karthikportfolio.in

**Next Time You Update:**
```bash
git add .
git commit -m "Update message"
git push origin main
# GitHub Actions automatically deploys!
```
