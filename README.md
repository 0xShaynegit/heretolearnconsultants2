# Here to Learn Consultants

Static website for Here to Learn Consultants, a network of educational consultants supporting schools across Asia. Deployed on Cloudflare Pages from `main`.

## Pages
- `index.html` Home
- `services.html` Services
- `about.html` About and network
- `contact.html` Enquiry form
- `404.html` Not found page (served automatically by Cloudflare Pages)

## Files
- `assets/css/styles.css` Theme (graphite, bone and brass)
- `assets/js/main.js` Navigation, scroll reveals, enquiry form
- `assets/img/` Favicon, touch icon, social share image
- `_headers` Cloudflare security and caching headers
- `sitemap.xml`, `robots.txt` Search engine files

## Quality
- Accessibility: zero axe-core WCAG 2 A/AA violations across all pages
- Structured data: ProfessionalService and FAQPage (JSON-LD)
- Motion respects `prefers-reduced-motion`

## To do
- Replace placeholder email `hello@heretolearnconsultants.com`
- Update `https://heretolearnconsultants2.pages.dev` in canonical links, `sitemap.xml` and `robots.txt` when a custom domain is added
- Connect the enquiry form to a form service (it currently opens the visitor's email app)
- Add consultant profiles and photography
