# VYSHIRL Photography — React

A React + Vite JavaScript portfolio converted from the supplied static website. It preserves the photographs, styling, category filters, Instagram links, and keyboard-controlled photo viewer. You own the source and can push it to your own GitHub repository.

## 1. Run locally

Install Node.js 24 LTS (which includes npm) from https://nodejs.org/. Extract this project, open a terminal **inside the folder containing package.json**, then run:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. Changes to source files update the page automatically. Stop the server with Ctrl+C.

**Do not double-click index.html.** React source needs the development server or a production build. CSS is imported in `src/main.jsx` and Vite bundles it for deployment.

## 2. Project map

```text
.github/workflows/deploy.yml  GitHub Pages build and deployment
public/assets/               Original local photographs
src/
  components/
    Header.jsx               Branding and navigation
    Hero.jsx                 Introductory headline and description
    Gallery.jsx              Category state, filters, and photo cards
    Lightbox.jsx             Modal viewer, arrows, Escape, focus handling
    Perspective.jsx          About/perspective text
    Footer.jsx               Footer and contact link
  data/
    photos.js                Photo records and image URL helper
    site.js                  Shared Instagram profile URL
  App.jsx                    Page composition
  main.jsx                   React entry and global CSS import
  styles.css                 Original responsive design
index.html                   Page title and search description
vite.config.js               React plugin and asset base path
package.json                 Dependencies and commands
package-lock.json            Exact dependency versions
```

## 3. Edit your portfolio

### Add or replace a photograph

1. Put the image in `public/assets/`, for example `lake-sunrise.jpg`.
2. Add an object to the `photos` array in `src/data/photos.js`:

```js
{
  id: 'lake-sunrise',              // Unique stable identifier
  title: 'First light',           // Caption displayed on the site
  category: 'Nature',             // Filters are generated automatically
  filename: 'lake-sunrise.jpg',    // Exact filename, including capitalization
  postId: 'YOUR_INSTAGRAM_POST_ID',
  alt: 'Orange sunrise reflected across a quiet lake',
},
```

The post ID is the part after `/p/` in an Instagram post URL. Keep it as a string. Use descriptive alt text. Reorder objects to reorder the gallery, or remove an object to remove a photograph. The displayed total updates automatically. New categories automatically appear as filter buttons. `All` is reserved for the combined view.

Photos are bundled local copies, not a live Instagram feed. Instagram changes will not update the app automatically. Some original labels were editorial captions; review them to suit your work.

### Change text, links, and appearance

- Edit the introductory wording in `Hero.jsx`, about wording in `Perspective.jsx`, and branding/navigation in `Header.jsx` and `Footer.jsx`.
- Update the shared profile link in `src/data/site.js`.
- Change browser title and search description in root `index.html`.
- Edit `src/styles.css`. Color variables are near the start; responsive rules are near the end.
- Add a new section as a component and render it in `src/App.jsx`.

The gallery uses React state instead of manually changing the DOM. `Gallery` owns the selected category and active image; `Lightbox` receives those values and callbacks as props. The native dialog supplies modal focus containment. Escape closes it, left/right arrows change photographs, and closing returns focus to the original photo button.

## 4. Production build

```sh
npm run build
npm run preview
```

Upload or deploy the generated **dist** directory. `npm run preview` is only a local build check, not a production server. Never deploy the unbuilt source as the finished site. The relative `base: './'` in Vite config keeps assets working on both root domains and GitHub Pages repository paths for this single-page app.

## 5. Push to GitHub

Create an empty repository on GitHub. From this project directory:

```sh
git init
git add .
git commit -m "Create React photography portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the example repository URL. If a Git repository or origin already exists, reuse it rather than repeating those initialization steps. Commit `package-lock.json` and `.github/`; do not commit `node_modules`, `dist`, or private environment files. The included `.gitignore` handles these.

## 6. Publish

### GitHub Pages (included workflow)

1. Push this folder's contents to the repository's `main` branch.
2. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open the **Actions** tab and run **Deploy to GitHub Pages**, or push another commit.
4. After the workflow succeeds, get the published address from **Settings → Pages** or the workflow's deployment link.

The workflow installs the lockfile dependencies, builds the app, and deploys `dist`. Ensure GitHub Actions and Pages are enabled for your repository/account. It runs only on pushes to `main` or manual runs; adjust the branch if needed.

### Vercel, Netlify, or Cloudflare Pages

Import the GitHub repository. Set the build command to `npm run build`, output directory to `dist`, and Node version to 24. Use the Vite framework preset if offered. No server or database is required for the current portfolio.

## 7. Future integrations

- **API or CMS photos:** Replace the local array with a data-loading hook/service, then pass the loaded photos into Gallery. Add loading and error states and keep records compatible with the fields above. Adapt `photoSrc` if using remote image URLs.
- **Contact form:** Add a form component plus a backend or form service; include pending, success, and error feedback.
- **Authentication, uploads, payments:** Add an appropriate backend/service. The current app has none of these features.
- **More pages:** Add a router when needed. Configure your host's fallback to `index.html` for client-side routes; GitHub Pages needs a routing strategy such as hash routing. Revisit Vite's base path if changing routing.
- **Secrets:** Browser code is public. Variables prefixed with `VITE_` are exposed to visitors, so use them only for public configuration. Keep Instagram access tokens and other private credentials on a backend, never in this repository or browser bundle.

Avoid introducing a backend until a feature needs one. This project is a client-side React application, so its production build can still use static hosting.

## 8. Troubleshooting

- **npm is not recognized:** Install Node.js and reopen your terminal.
- **Blank page or missing CSS:** Run `npm run dev` locally, or deploy the complete `dist` output after `npm run build`. Do not open the source HTML directly.
- **Missing photo:** Check `filename`, capitalization, and that the image is in `public/assets/`. Do not include `public/` in the record's filename.
- **Pages workflow fails at npm ci:** Update dependencies with `npm install`, verify the build, and commit both package files.
- **Port is busy:** Use `npm run dev -- --port 5174`.

## References

- React learning guide: https://react.dev/learn
- Vite getting started: https://vite.dev/guide/
- Vite deployment guide: https://vite.dev/guide/static-deploy.html

## Ownership

No third-party license for your photography has been added. Choose an appropriate license for code separately if desired; do not assume a code license grants rights to the photographs.

## 9. Languages and translations

The app uses `react-i18next` and `i18next`. Each supported language has its own UTF-8 JSON file:

- `src/locales/en.json` — English (fallback)
- `src/locales/es.json` — Spanish
- `src/locales/te.json` — Telugu
- `src/locales/hi.json` — Hindi

The header language selector switches text immediately. The visitor's selection is stored in `localStorage` under `vyshirl-language`. On a first visit, the first supported browser language is selected, otherwise English. If browser storage is unavailable, switching still works for the current visit. No translation service or API key is needed; the four JSON files are bundled with the app.

`src/i18n.js` registers translations and updates the HTML `lang` attribute, browser title, and meta description. Components use `useTranslation()` and `t('key')`. Navigation, page copy, filters, image captions, image alt text, and accessible button labels are translated. The brand and Instagram platform name stay unchanged.

### Edit a translation

Edit the same key in all four JSON files. Keep valid JSON: double quotes, no comments, no trailing commas. Keep interpolation placeholders such as `{{title}}` unchanged. Use `t()` for new UI text instead of hardcoding strings in components.

Photo translations live under `photos`, keyed by the stable photo ID. When adding a photo, add its `title` and `alt` under that ID in each language. The original title and alt fields in `src/data/photos.js` remain fallback values. Keep category identifiers such as `Nature` stable in data; translate their display labels under `categories` in each JSON file. For a new category, add the corresponding key in all four files.

### Add another language

1. Copy `en.json` to a new language JSON file and translate its values.
2. Import it and register its `translation` resource in `src/i18n.js`.
3. Add its code and native label to the exported `languages` list.
4. Check typography, narrow screens, captions, and the photo viewer. Right-to-left languages would additionally need direction-aware layout changes.

Run `npm run check:translations` to check matching translation keys, photo translations, and placeholders, then `npm run build`. Translation key checks do not replace linguistic review.

The current language switcher shares one URL for all languages. If you later want separate indexed language URLs and `hreflang` metadata for search engines, add a routing/SEO strategy; those are not configured by this switcher.

Library documentation: https://react.i18next.com/latest/using-with-hooks
