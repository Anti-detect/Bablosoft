# Bablosoft

This repository is a simple multi-language review site scaffold for BABLOSOFT — a site for comparing and reviewing antidetect browsers (Multilogin, GoLogin, Dolphin{anty}, etc.).

Structure
- /style.css - main site styles
- /script.js - small UI helpers
- /multilogin-review.html - placeholder for Multilogin deep review
- /vi/index.html - Vietnamese homepage (primary content)
- /en/, /zh/, /ru/, /pt/ - language folders with placeholder homepages

What I added
- Clean dark UI style and responsive layout.
- Vietnamese homepage with comparison table and CTA.
- Language folders with Copilot prompt comments so you can let GitHub Copilot translate/expand content per language.

Next steps
1. Replace YOUR_AFFILIATE_LINK_HERE in `multilogin-review.html` with your actual affiliate URL.
2. Use GitHub Copilot in VS Code: open each `index.html` in the language folders and accept Copilot suggestions to translate and expand content.
3. Add real logos, screenshots, and full review copy (Copilot prompts are included in files to help generate these).
4. Optimize SEO: add meta descriptions, structured data, and localized URLs.

License
This scaffold is provided as-is. Update content and links responsibly.

Affiliate & Coupon
- Affiliate link (Multilogin): https://multilogin.com/#a_aid=ADB
- Coupon code: ADBNEW50 (50% off) — already embedded in `multilogin-review.html` and referenced in `/vi/index.html`.

How to finalize content with Copilot
1. Open `multilogin-review.html` in VS Code. The file already contains a full review; edit or expand sections as needed. Replace `/assets` images with real screenshots.
2. For translations: open each language `index.html` (in /en, /zh, /ru, /pt) and accept Copilot suggestions to translate the Vietnamese content.
3. Test pages locally by opening the HTML files in a browser or serving with a simple static server.

Notes
- Disclosure: `multilogin-review.html` already contains a disclosure line indicating this site may earn commission from affiliate links. Keep disclosure visible to comply with affiliate rules.
