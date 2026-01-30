#!/bin/bash

# Portfolio GitHub Pages Deployment Checklist & Verification Script
# Run this script to verify everything is correctly set up for GitHub Pages

echo "🔍 Karthik's Portfolio - GitHub Pages Deployment Verification"
echo "================================================================"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track errors
ERRORS=0

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
    else
        echo -e "${RED}✗${NC} $1 missing"
        ERRORS=$((ERRORS + 1))
    fi
}

# Function to check if directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 directory exists"
    else
        echo -e "${RED}✗${NC} $1 directory missing"
        ERRORS=$((ERRORS + 1))
    fi
}

# Check configuration files
echo "📋 Configuration Files:"
echo "---------------------"
check_file "package.json"
check_file "vite.config.ts"
check_file "index.html"
check_file "tsconfig.json"
check_file ".gitignore"
check_file "CNAME"
echo ""

# Check deployment files
echo "🚀 Deployment Files:"
echo "-------------------"
check_dir ".github/workflows"
check_file ".github/workflows/deploy.yml"
check_file "DEPLOYMENT.md"
check_file "public/404.html"
check_file "public/_redirects"
echo ""

# Check source structure
echo "📁 Source Structure:"
echo "-------------------"
check_dir "src"
check_dir "src/app"
check_dir "src/app/components"
check_dir "src/styles"
check_file "src/main.tsx"
check_file "src/app/App.tsx"
echo ""

# Verify Node.js
echo "🔧 Environment:"
echo "---------------"
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓${NC} Node.js installed: $NODE_VERSION"
else
    echo -e "${RED}✗${NC} Node.js not installed"
    ERRORS=$((ERRORS + 1))
fi

if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓${NC} npm installed: $NPM_VERSION"
else
    echo -e "${RED}✗${NC} npm not installed"
    ERRORS=$((ERRORS + 1))
fi

if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules installed"
else
    echo -e "${YELLOW}⚠${NC}  node_modules not installed (run: npm install)"
fi
echo ""

# Check vite.config.ts for GitHub Pages settings
echo "⚙️  Build Configuration:"
echo "----------------------"
if grep -q "base: '/'" vite.config.ts; then
    echo -e "${GREEN}✓${NC} Vite base path configured for custom domain"
else
    echo -e "${YELLOW}⚠${NC}  Vite base path may need adjustment for your domain"
fi

if grep -q "outDir: 'dist'" vite.config.ts; then
    echo -e "${GREEN}✓${NC} Vite output directory configured"
else
    echo -e "${RED}✗${NC} Vite output directory not configured"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check GitHub Actions workflow
echo "📊 GitHub Actions:"
echo "------------------"
if [ -f ".github/workflows/deploy.yml" ]; then
    if grep -q "Deploy to GitHub Pages" .github/workflows/deploy.yml; then
        echo -e "${GREEN}✓${NC} GitHub Actions workflow exists"
    fi
    if grep -q "github_token" .github/workflows/deploy.yml; then
        echo -e "${GREEN}✓${NC} Workflow uses GITHUB_TOKEN"
    fi
    if grep -q "www.karthikportfolio.in" .github/workflows/deploy.yml; then
        echo -e "${GREEN}✓${NC} CNAME configured in workflow"
    fi
else
    echo -e "${RED}✗${NC} GitHub Actions workflow missing"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check API configuration
echo "🌐 API Configuration:"
echo "---------------------"
if grep -q "https://api.karthikportfolio.in" src/app/components/ProjectsSection.tsx 2>/dev/null; then
    echo -e "${GREEN}✓${NC} API endpoint configured"
else
    echo -e "${YELLOW}⚠${NC}  API endpoint not found or needs verification"
fi
echo ""

# Check CNAME file
echo "🔗 Domain Configuration:"
echo "-----------------------"
if [ -f "CNAME" ]; then
    CNAME_CONTENT=$(cat CNAME)
    echo -e "${GREEN}✓${NC} CNAME file exists: $CNAME_CONTENT"
else
    echo -e "${RED}✗${NC} CNAME file missing"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Final summary
echo "================================================================"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! Ready for GitHub Pages deployment.${NC}"
    echo ""
    echo "📝 Next Steps:"
    echo "1. Ensure repository is pushed to GitHub"
    echo "2. Enable GitHub Pages in repository settings"
    echo "3. Set source to 'Deploy from a branch' → 'gh-pages'"
    echo "4. GitHub Actions will automatically deploy on push"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://www.karthikportfolio.in"
else
    echo -e "${RED}✗ $ERRORS error(s) found. Please fix them before deploying.${NC}"
fi
echo "================================================================"
