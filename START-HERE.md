# 🚀 DEPLOYMENT INSTRUCTIONS - START HERE

## Welcome! Your Portfolio is Ready to Deploy

Your portfolio has been configured for **GitHub Pages** with **automatic deployment**. Follow these instructions to get your site live.

---

## ⏱️ Total Time: ~15 minutes

### What you'll do:
1. Set up GitHub repository (3 min)
2. Enable GitHub Pages (2 min)
3. Configure custom domain (2 min)
4. Update DNS records (2 min)
5. Wait for deployment (5-10 min)
6. Verify site is live (1 min)

---

## 📋 Prerequisites

Before you start, you need:
- ✅ GitHub account (free)
- ✅ Domain `www.karthikportfolio.in` (should already be registered)
- ✅ Access to domain registrar to update DNS records
- ✅ Node.js 18+ (for local testing)
- ✅ This project on your local machine

---

## 🔥 QUICK START (5 Steps)

### Step 1️⃣: Push Code to GitHub

```bash
cd path/to/karthik_portfolio

# Ensure git is initialized
git init

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/karthik_portfolio.git

# Set main branch (GitHub's default)
git branch -M main

# Add all files and commit
git add .
git commit -m "Initial portfolio commit"

# Push to GitHub
git push -u origin main
```

**✅ Done!** Your code is now on GitHub.

---

### Step 2️⃣: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/karthik_portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` (will be created automatically)
   - **Folder**: Select `/ (root)`
5. Click **Save**

**✅ Done!** GitHub Pages is enabled.

---

### Step 3️⃣: Configure Custom Domain

Still in the **Pages** settings:

1. Under "Custom domain":
   - Enter: `www.karthikportfolio.in`
   - Click **Save**

**✅ Done!** GitHub creates CNAME file automatically.

---

### Step 4️⃣: Update DNS Records

Go to your domain registrar (GoDaddy, Namecheap, Hostinger, etc.):

1. Find **DNS Settings** or **Domain Management**
2. Create/Update a **CNAME record**:
   ```
   Type:    CNAME
   Name:    www
   Value:   YOUR_GITHUB_USERNAME.github.io
   TTL:     3600 (or default)
   ```
3. Click **Save**

**Example:**
- If your GitHub username is `johndoe`
- Create CNAME: `www` → `johndoe.github.io`

**✅ Done!** DNS is configured.

---

### Step 5️⃣: Watch GitHub Actions Deploy

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Wait for the workflow to complete (2-5 minutes):
   - 🟡 Yellow = Running
   - 🟢 Green = Success
   - 🔴 Red = Failed (check logs)

**✅ Done!** Your site is deployed!

---

## ✅ Verify Your Site is Live

### Check 1: GitHub Pages Status
1. Go to **Settings** → **Pages**
2. Look for green message: **"Your site is live at https://www.karthikportfolio.in"**

### Check 2: Visit Your Site
```
Open: https://www.karthikportfolio.in
```

- You should see your portfolio website
- All sections should load (Hero, Projects, Skills, Contact, etc.)
- Animations should play smoothly

### Check 3: Test Mobile
Open https://www.karthikportfolio.in on your phone
- Layout should be responsive
- Mobile menu should work
- All content visible

### Check 4: Check Console for Errors
1. Open in browser: https://www.karthikportfolio.in
2. Press F12 (Developer Tools)
3. Go to **Console** tab
4. Should be **no red errors** (warnings are ok)

---

## 🎉 Success! Your Site is LIVE

When everything works:
- ✅ Site accessible at https://www.karthikportfolio.in
- ✅ HTTPS enabled (green padlock)
- ✅ All content displays correctly
- ✅ Responsive on mobile
- ✅ No console errors

---

## 📝 Making Updates

After deployment, to update your portfolio:

```bash
# Make changes to your files
# Edit components, styles, etc.

# When ready, commit and push
git add .
git commit -m "Update: add new project"
git push origin main

# GitHub Actions automatically deploys!
# Site updates in 2-5 minutes
```

**That's it!** No more manual steps. Push → Live.

---

## 🆘 Troubleshooting

### Site shows 404 or "Page not Found"
**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Wait 5 more minutes for DNS
3. Try in incognito window
4. Check GitHub Actions for build errors

### Custom domain not resolving
**Solution:**
1. Verify DNS records at domain registrar:
   ```bash
   nslookup www.karthikportfolio.in
   ```
2. Should show: `YOUR_USERNAME.github.io`
3. DNS can take 5-48 hours to propagate
4. Wait and try again

### GitHub Actions build failed
**Solution:**
1. Click **Actions** tab
2. Click the failed workflow
3. Expand the logs
4. Look for error messages
5. Common issues:
   - `npm install` failed → delete `node_modules` locally and retry
   - `npm run build` failed → run locally with `npm run build` to debug

### Build works locally but fails on GitHub
**Solution:**
1. Ensure `.gitignore` includes `node_modules/` and `dist/`
2. Ensure you're using Node.js 18+ locally
3. Check `package.json` for correct dependencies
4. Run full build locally before pushing:
   ```bash
   npm install
   npm run build
   ```

---

## 📚 Detailed Documentation

For more detailed information, see:

| Document | For... |
|----------|--------|
| [QUICKSTART.md](./QUICKSTART.md) | Quick 5-minute guide (this file) |
| [SETUP-SUMMARY.md](./SETUP-SUMMARY.md) | What was changed |
| [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md) | Complete step-by-step guide |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | All deployment methods & troubleshooting |
| [CHECKLIST.md](./CHECKLIST.md) | Full verification checklist |
| [README.md](./README.md) | Project documentation |

---

## 🔍 Verification Scripts

If you want to verify everything is configured:

**Linux/Mac:**
```bash
bash verify-deployment.sh
```

**Windows:**
```bash
verify-deployment.bat
```

These scripts check:
- All required files exist
- Configuration is correct
- Build can complete

---

## 📊 What Happens Behind the Scenes

When you push code:

```
You: git push origin main
  ↓
GitHub receives code
  ↓
GitHub Actions triggered (automatic)
  ↓
  1. Checkout your code
  2. Install Node.js 18
  3. Run: npm install
  4. Run: npm run build (creates dist/ folder)
  5. Deploy dist/ to gh-pages branch
  ↓
GitHub Pages serves website
  ↓
Your site appears at:
https://www.karthikportfolio.in
```

**No manual steps needed!** It's all automatic.

---

## 🛡️ Security Notes

✅ **HTTPS/SSL:**
- Automatically enabled by GitHub
- Takes up to 24 hours after domain setup
- You'll see green padlock in browser

✅ **API Credentials:**
- No secrets are exposed in your code
- Backend API is external (different server)
- Safe to keep code on GitHub

---

## 🚀 Next Steps

1. ✅ Follow Steps 1-5 above
2. ✅ Verify site is live
3. ✅ Share your portfolio: https://www.karthikportfolio.in
4. 📖 Read [SETUP-SUMMARY.md](./SETUP-SUMMARY.md) to understand the setup
5. 💻 Make updates and push (automatic deployment)

---

## ❓ FAQ

**Q: How long does it take to deploy?**
A: Usually 2-5 minutes after push. DNS can take 5-48 hours.

**Q: Can I deploy without GitHub Actions?**
A: Yes, but it's manual. See [DEPLOYMENT.md](./DEPLOYMENT.md) for alternatives.

**Q: What if I want to change the domain?**
A: Update CNAME file and GitHub Pages settings, then update DNS records.

**Q: Is there a cost?**
A: No! GitHub Pages is free for public repositories.

**Q: Can I test locally first?**
A: Yes! Run `npm run preview` to test production build locally.

**Q: How do I fix build errors?**
A: Check GitHub Actions logs or run `npm run build` locally.

---

## 📞 Got Stuck?

### Check these in order:
1. Re-read this file (solutions are here!)
2. Check [GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)
3. Check GitHub Actions logs for errors
4. Run `verify-deployment.bat` or `verify-deployment.sh`
5. Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section

---

## ✨ You're All Set!

Your portfolio is fully configured and ready to deploy. 

**Next action: Follow the 5 steps above!**

Good luck! 🎉

---

**Last Updated:** January 30, 2026  
**Status:** ✅ Ready to Deploy  
**Time to Live:** ~15 minutes
