# Xuran Wang — Academic Homepage

Live site: https://xuranwang02.github.io/

A clean, zero-dependency static academic homepage inspired by minimalist AcadHomepage aesthetics.

## Structure

```text
.
├── index.html                   # Entry HTML
├── .nojekyll                    # Direct static GitHub Pages serving
└── assets/
    ├── css/main.css             # Minimalist academic styling & responsive rules
    ├── js/
    │   ├── site-data.js         # Single source of truth for all page content
    │   └── app.js               # Renderer & interactive components
    └── images/                  # Avatar, paper figures, and institution emblems
```

## Updating Content

Edit `assets/js/site-data.js` to update bio, news, publications, experience, honors, acknowledgements, or contact settings, then commit and push to `main`:

```bash
git add . && git commit -m "Update homepage" && git push
```
