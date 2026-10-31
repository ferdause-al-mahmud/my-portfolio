# mahmud.dev

Portfolio of **Ferdause AL Mahmud**, a Next.js & TypeScript developer.
Live at [mahmud-dev.netlify.app](https://mahmud-dev.netlify.app).

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (pre-renders every page)
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
  app/              routes: layout, home page, /project/[id], 404, sitemap, robots
  components/       page sections (Home, About, WorkExperience, …) and ui/ helpers
  data/             all content: profile.js, experience.js, projects.js
  assets/portfolio/ project screenshots (optimized by next/image)
  hooks/            section scrolling and active-section tracking
public/             photo, resume, tech icons, favicon, manifest
```

## Updating content

Most changes only touch files in `src/data/`:

- **Profile, socials, WhatsApp:** `src/data/profile.js`
- **Work experience:** `src/data/experience.js`
- **Projects:** `src/data/projects.js`. To add one, put its screenshot in
  `src/assets/portfolio/`, import it at the top of the file and add an entry.
  A page is generated for it automatically at `/project/<id>`, with its own
  title and link preview.

## Deploying

Deployed on Netlify; `netlify.toml` sets the build command and output folder.
