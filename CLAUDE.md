# Sinfonía Café Website

## Overview

Static website for a Costa Rican specialty coffee brand hosted on GitHub Pages with custom domain sinfoniacafe.kporras07.com.

## Tech Stack

Pure HTML/CSS/JS — no frameworks, no build tools, no dependencies. Designed for GitHub Pages.

## Project Structure

- `index.html` — Landing page
- `cafe.html` — Coffee catalog (accessible at `/cafe`)
- `preordenar.html` — Product preorder catalog with cart (accessible at `/preordenar`)
- `styles.css` — Shared styles (layout, header, nav, product grid, buttons)
- `main.js` — Shared JS (WhatsApp number, `formatPrice()`, `toggleNav()`, `buildWhatsAppLink()`)
- `images/` — Product images and logo (`logo.jpg`)
- `CNAME` — Custom domain config for GitHub Pages

## Key Details

- All user-facing text is in Spanish (Costa Rican)
- Prices are in Costa Rican colones (₡), rounded to nearest ₡500
- WhatsApp number is obfuscated in `main.js` to deter scrapers — keep it split when updating
- Shopping cart uses localStorage (key: `sinfonia_cart`)
- Preorder product data lives as a JS array in `preordenar.html`; coffee data in `cafe.html`
- Brand colors: olive green `#637732` background, cream `#f0e6cf` text, darker header `#4a5a25`
- Inner pages have a responsive nav: hamburger on mobile, inline links on desktop (768px+)
- Cart is a floating pill button (bottom-right) on the preorder page
- The ODS spreadsheet in the repo root contains cost/margin data and should NOT be committed
