# Sinfonía Café Website

## Overview

Static website for a Costa Rican specialty coffee brand hosted on GitHub Pages with custom domain sinfoniacafe.kporras07.com.

## Tech Stack

Pure HTML/CSS/JS — no frameworks, no build tools, no dependencies. Designed for GitHub Pages.

## Project Structure

- `index.html` — Landing page
- `preordenar.html` — Product catalog with cart functionality
- `images/` — Product images and logo (`logo.jpg`)
- `CNAME` — Custom domain config for GitHub Pages

## Key Details

- All user-facing text is in Spanish (Costa Rican)
- Prices are in Costa Rican colones (₡), rounded to nearest ₡500
- WhatsApp number is obfuscated in source to deter scrapers — keep it split when updating
- Shopping cart uses localStorage (key: `sinfonia_cart`)
- Product data lives as a JS array in `preordenar.html`
- Brand colors: olive green `#637732` background, cream `#f0e6cf` text
- The ODS spreadsheet in the repo root contains cost/margin data and should NOT be committed
