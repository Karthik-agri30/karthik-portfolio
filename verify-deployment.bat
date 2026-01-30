@echo off
REM Portfolio GitHub Pages Deployment Checklist & Verification Script (Windows)
REM Run this script to verify everything is correctly set up for GitHub Pages

setlocal enabledelayedexpansion

echo.
echo Karthik's Portfolio - GitHub Pages Deployment Verification
echo ===========================================================
echo.

set ERRORS=0

REM Function to check if file exists
for /F "tokens=*" %%A in ('echo Configuration Files:') do echo %%A
echo ─────────────────────
if exist "package.json" (
    echo [OK] package.json exists
) else (
    echo [ERROR] package.json missing
    set /A ERRORS=!ERRORS!+1
)

if exist "vite.config.ts" (
    echo [OK] vite.config.ts exists
) else (
    echo [ERROR] vite.config.ts missing
    set /A ERRORS=!ERRORS!+1
)

if exist "index.html" (
    echo [OK] index.html exists
) else (
    echo [ERROR] index.html missing
    set /A ERRORS=!ERRORS!+1
)

if exist ".gitignore" (
    echo [OK] .gitignore exists
) else (
    echo [ERROR] .gitignore missing
    set /A ERRORS=!ERRORS!+1
)

if exist "CNAME" (
    echo [OK] CNAME exists
) else (
    echo [ERROR] CNAME missing
    set /A ERRORS=!ERRORS!+1
)

echo.
echo Deployment Files:
echo ──────────────────
if exist ".github\workflows\deploy.yml" (
    echo [OK] GitHub Actions workflow exists
) else (
    echo [ERROR] GitHub Actions workflow missing
    set /A ERRORS=!ERRORS!+1
)

if exist "DEPLOYMENT.md" (
    echo [OK] DEPLOYMENT.md exists
) else (
    echo [ERROR] DEPLOYMENT.md missing
    set /A ERRORS=!ERRORS!+1
)

if exist "public\404.html" (
    echo [OK] public/404.html exists
) else (
    echo [WARNING] public/404.html missing (needed for SPA routing)
)

echo.
echo Source Structure:
echo ──────────────────
if exist "src" (
    echo [OK] src directory exists
) else (
    echo [ERROR] src directory missing
    set /A ERRORS=!ERRORS!+1
)

if exist "src\app\components" (
    echo [OK] src/app/components directory exists
) else (
    echo [ERROR] src/app/components directory missing
    set /A ERRORS=!ERRORS!+1
)

if exist "src\styles" (
    echo [OK] src/styles directory exists
) else (
    echo [ERROR] src/styles directory missing
    set /A ERRORS=!ERRORS!+1
)

echo.
echo Environment:
echo ──────────────
where node >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('node -v') do echo [OK] Node.js installed: %%i
) else (
    echo [ERROR] Node.js not installed
    set /A ERRORS=!ERRORS!+1
)

where npm >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('npm -v') do echo [OK] npm installed: %%i
) else (
    echo [ERROR] npm not installed
    set /A ERRORS=!ERRORS!+1
)

if exist "node_modules" (
    echo [OK] node_modules installed
) else (
    echo [WARNING] node_modules not installed - run: npm install
)

echo.
echo Build Configuration:
echo ─────────────────────
findstr /M "base: '/'" vite.config.ts >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Vite base path configured for custom domain
) else (
    echo [WARNING] Vite base path may need adjustment
)

findstr /M "outDir: 'dist'" vite.config.ts >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Vite output directory configured
) else (
    echo [ERROR] Vite output directory not configured
    set /A ERRORS=!ERRORS!+1
)

echo.
echo GitHub Actions:
echo ────────────────
if exist ".github\workflows\deploy.yml" (
    findstr /M "Deploy to GitHub Pages" .github\workflows\deploy.yml >nul 2>nul
    if %errorlevel% equ 0 echo [OK] GitHub Actions workflow exists
    
    findstr /M "github_token" .github\workflows\deploy.yml >nul 2>nul
    if %errorlevel% equ 0 echo [OK] Workflow uses GITHUB_TOKEN
    
    findstr /M "www.karthikportfolio.in" .github\workflows\deploy.yml >nul 2>nul
    if %errorlevel% equ 0 echo [OK] CNAME configured in workflow
)

echo.
echo API Configuration:
echo ───────────────────
findstr /M "https://api.karthikportfolio.in" src\app\components\ProjectsSection.tsx >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] API endpoint configured
) else (
    echo [WARNING] API endpoint not found - verify ProjectsSection.tsx
)

echo.
echo Domain Configuration:
echo ──────────────────────
if exist "CNAME" (
    for /f "tokens=*" %%i in (CNAME) do echo [OK] CNAME file exists: %%i
) else (
    echo [ERROR] CNAME file missing
    set /A ERRORS=!ERRORS!+1
)

echo.
echo ===========================================================
if %ERRORS% equ 0 (
    echo [SUCCESS] All checks passed! Ready for GitHub Pages deployment.
    echo.
    echo Next Steps:
    echo 1. Ensure repository is pushed to GitHub
    echo 2. Enable GitHub Pages in repository settings
    echo 3. Set source to 'Deploy from a branch' ^> 'gh-pages'
    echo 4. GitHub Actions will automatically deploy on push
    echo.
    echo Your site will be available at:
    echo    https://www.karthikportfolio.in
) else (
    echo [ERROR] %ERRORS% error(s) found. Please fix them before deploying.
)
echo ===========================================================
echo.
pause
