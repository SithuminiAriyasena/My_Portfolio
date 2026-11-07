# Sithumini Ariyasena — Portfolio

A single-page portfolio built with Next.js App Router, React, TypeScript and Tailwind CSS. It includes a role switcher for DevOps, Business Analysis and QA, and a Docker/GitHub Actions workflow for practicing delivery.

## Run locally

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before deploying, run:

```bash
npm run lint
npm run build
```

## Edit portfolio content

Update the typed data in [`data/portfolio.ts`](./data/portfolio.ts). It contains the profile, links, summary, skills, projects, learning journey, experience, education and community activities. The page and layout read from that file; ordinary content edits should not require changes to the components.

Replace the example LinkedIn, GitHub, project repository and live-demo URLs with your real links. Add your CV as `public/Sithumini-Ariyasena-CV.pdf` (or update `links.cv`). Review all sample artifact text, especially the example QA observation, before sharing the site.

Project cards use a screenshot-gallery layout. Screenshots are stored in `public/projects/` and referenced by each project's `previewImage` in `data/portfolio.ts`. Add more screenshots to this folder and set the matching `previewImage` path (for example, `/projects/farmtrust-preview.png`) to replace a styled placeholder. NewPath is presented as a learning project and does not claim clinical validation or outcomes.

## Contact form

The contact form uses a `mailto:` fallback and does not send data to a backend. The visitor’s browser opens their email app with the message filled in. To use a hosted form provider such as Formspree later, replace the `submitContact` handler in `components/portfolio-page.tsx`.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the detected Next.js framework settings and deploy.

No environment variables are required for the portfolio. Vercel builds the Next.js app directly; the Dockerfile is for container practice and other compatible hosts.

## Docker

```bash
docker build -t sithumini-portfolio .
docker run --rm -p 3000:3000 sithumini-portfolio
```

The multi-stage Dockerfile builds Next.js in one stage and runs the standalone production output as a non-root user. GitHub Actions runs lint, a production build and a Docker image build on pushes and pull requests to `main`.
