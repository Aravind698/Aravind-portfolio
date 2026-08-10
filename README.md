# Aravind — Developer Portfolio (Light Theme)

A one-page developer portfolio built with plain HTML, CSS and JavaScript
(no frameworks, no build step). Bright, colorful light theme with a
blue/purple gradient accent.

## Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── images/        ← add profile.jpg, cert screenshots, project screenshots here
├── resume/        ← add your resume PDF here
└── README.md
```

## Still to fill in

Open `index.html` and search for:

- `+91YOUR_PHONE_NUMBER` — your real phone number (2 places: `tel:` link and display text)
- `YOUR_CERTIFICATE_ID` — your real Udemy certificate URL (find it under Udemy → My Learning → the course → Certificate)
- `resume/Aravind_Resume.pdf` — add your actual resume PDF at this path

## Adding your photo

Drop a square-ish photo into `images/` named `profile.jpg`. It will automatically
appear inside the circular gradient frame in the hero. If the file is missing,
the frame falls back to showing your initials ("AS") — nothing breaks either way.

To use a different filename or format, update this line in `index.html`:

```html
<img src="images/profile.jpg" alt="Aravind Sankaran" id="profileImg" onerror="this.style.display='none'">
```

## Adding a certificate image

The Certificates section currently shows a placeholder icon tile next to
each certificate. To show an actual screenshot of your certificate instead,
replace the `.cert-thumb` div for that entry with an image, e.g.:

```html
<img src="images/cert-100-days-of-code.jpg" alt="100 Days of Code certificate" class="cert-thumb-img">
```

and add this small rule to `style.css` so it matches the existing tile size:

```css
.cert-thumb-img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}
```

The "View Certificate" button already links out to your Udemy certificate
URL — just replace `YOUR_CERTIFICATE_ID` with your real one.

## Running locally

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying (GitHub Pages)

```bash
git init
git add .
git commit -m "Redesign portfolio with light theme"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from branch → main → / (root) → Save**.

## Notes

- Palette: white (`#FFFFFF`) / soft blue-white (`#F8FAFC`) backgrounds, navy
  text (`#0F172A`), royal blue (`#2563EB`) and purple (`#7C3AED`) accents.
- Respects `prefers-reduced-motion` and is keyboard-navigable.
- All project and contact details reflect only what you provided — nothing invented.