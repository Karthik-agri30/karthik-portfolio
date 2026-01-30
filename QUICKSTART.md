# 🚀 Quick Start - Deploy to GitHub Pages in 5 Minutes

This is the fastest way to get your portfolio live on GitHub Pages.

## What You Need

- GitHub account (free)
- Your code pushed to GitHub
- Custom domain `www.karthikportfolio.in` registered

## The 5-Step Process

### Step 1: Push Code to GitHub (2 min)

```bash
# Go to your project folder
cd karthik_portfolio

# Make sure everything is committed
git add .
git commit -m "Initial commit"

# Push to main branch
git branch -M main
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

### Step 2: Enable GitHub Pages (1 min)

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under "Build and deployment":
   - Select "Deploy from a branch"
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

**Done!** GitHub Pages is enabled.

---

### Step 3: Configure Custom Domain (1 min)

Still in Pages settings:

1. Under "Custom domain", enter: `www.karthikportfolio.in`
2. Click **Save**
3. GitHub creates CNAME file automatically

**Done!** Custom domain is configured.

---

### Step 4: Update DNS Records (1 min)

Go to where you bought your domain (GoDaddy, Namecheap, etc.):

1. Find DNS settings
2. Update/Create DNS record:
   ```
   Type:  CNAME
   Name:  www
   Value: YOUR_GITHUB_USERNAME.github.io
   ```
3. Save

**Done!** DNS is configured.

---

### Step 5: Wait for Deployment (1 min)

That's it! Your site will deploy automatically:

1. Go to repository **Actions** tab
2. Watch the green checkmark appear (2-5 minutes)
3. Visit: https://www.karthikportfolio.in

**Done! 🎉 Your portfolio is LIVE!**

---

## What Happens Automatically

When you push code to GitHub:

1. ✅ GitHub Actions builds your project
2. ✅ Creates optimized `dist/` folder
3. ✅ Publishes to `gh-pages` branch
4. ✅ GitHub Pages serves your site
5. ✅ Custom domain routes to your site

**No more manual steps!** Just code → push → live.

---

## How to Update Your Site

```bash
# Make changes to files
# Edit components, styles, whatever

# When ready, push to GitHub
git add .
git commit -m "Update description"
git push origin main

# GitHub Actions automatically deploys!
# Your site updates in 2-5 minutes
```

---

## Troubleshooting (30 seconds)

**Site shows 404 or "Page not found"?**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 5 more minutes for DNS propagation
- Check GitHub Actions tab for errors

**Custom domain not working?**
- Verify DNS records at your domain registrar
- Run: `nslookup www.karthikportfolio.in` in terminal
- Wait 24-48 hours for DNS to propagate

**Build failed?**
- Check GitHub Actions logs (Actions tab)
- Run locally: `npm run build`
- Fix any errors shown

---

## File Structure (For Reference)

Everything is already set up:

```
✅ .github/workflows/deploy.yml    ← Auto-deploy config
✅ vite.config.ts                  ← Build config
✅ CNAME                           ← Custom domain
✅ public/404.html                 ← SPA routing
✅ index.html                      ← Meta tags
✅ package.json                    ← Build scripts
```

---

## Monitoring Deployments

**Want to see your site update live?**

1. Make a change to your portfolio
2. Push to GitHub:
   ```bash
   git push origin main
   ```
3. Go to **Actions** tab in GitHub
4. Watch workflow progress in real-time
5. See "Deployment succeeded" message
6. Refresh your live site

---

## Performance Check

Your site includes:
- ✅ Minified JavaScript (smaller files)
- ✅ Optimized CSS
- ✅ Lazy animations (better performance)
- ✅ Responsive design
- ✅ HTTPS enabled (secure)

---

## Next Steps

1. ✅ Deploy (follow steps 1-5 above)
2. ✅ Test on mobile (use your phone)
3. ✅ Share your site! https://www.karthikportfolio.in
4. 📖 Read [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md) for details
5. ✅ Use [CHECKLIST.md](./CHECKLIST.md) to verify everything

---

## Common Questions

**Q: How often does it update?**
A: Instantly! Push → 2-5 minutes → live

**Q: Can I use a different domain?**
A: Yes! Update CNAME file and DNS records

**Q: What if I want to test first?**
A: Create a `test` branch, or run `npm run preview` locally

**Q: Do I need to pay for GitHub Pages?**
A: No! It's 100% free with public repositories

**Q: What about the backend API?**
A: Already configured to work with `www.karthikportfolio.in`

---

## Emergency Commands

If something goes wrong:

```bash
# Rebuild everything
npm install
npm run build

# Push again (re-trigger deployment)
git add .
git commit -m "Rebuild"
git push origin main

# Check build locally before pushing
npm run preview
```

---

## Support

- 📖 Detailed guide: [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)
- ✅ Checklist: [CHECKLIST.md](./CHECKLIST.md)
- 📚 Full docs: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🐛 Errors: Check GitHub Actions logs

---

## Success! 🎉

Your portfolio is now:
- ✅ Hosted on GitHub Pages
- ✅ Using your custom domain
- ✅ Auto-deploying on every push
- ✅ Protected by HTTPS
- ✅ Fully responsive
- ✅ Performance optimized

**Time to celebrate!** Share your portfolio: https://www.karthikportfolio.in

---

**Created:** January 30, 2026  
**Status:** ✅ Ready to Deploy
