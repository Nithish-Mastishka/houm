# HOUM Website — React + TypeScript

The HOUM website built from the Figma file *HOUM Website* (`TfdYWTvqGGF80YN8yJuuYQ`): 81 pages covering
home, company, products, solutions, support, training, partner connect, marketing and account screens.

**Stack:** Vite · React 19 · TypeScript (strict) · Tailwind CSS v4 · React Router 7

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve dist/
```

Node 20+ is recommended.

## Project structure

```
src/
  main.tsx, App.tsx        router, 1440px canvas scaling, chat widget
  routes.ts                every page: slug, path, title, menu group, Figma frame id (lazy-loaded)
  index.css                Tailwind import + brand tokens (houm-red, houm-maroon, houm-ink, …)
  components/
    Header.tsx             top bar + navbar with mega menus
    navigation.ts          mega-menu content (typed data)
    Footer.tsx, ContactStrip.tsx, ChatWidget.tsx
    PageLayout.tsx         <Page> / <Section> — places sections at their Figma positions
  pages/<slug>/
    index.tsx              the page: list of <Section x y w h> boxes
    *Section.tsx           one component per design section
  lib/                     shared logic: form validation, captcha, calculators, accordions,
                           support sidebar & download tables, product filters, carousels, …
  assets/                  images and icons exported from Figma (large images compressed to WebP)
```

## How layout works

The design is a fixed 1440px desktop layout. Each page renders its sections in document flow, using the
position and size of each section in the Figma frame (`<Section x y w h>`), so spacing matches the design
exactly. `App.tsx` scales the 1440px canvas to the window width with CSS `zoom`, so the site fills any
screen and never scrolls sideways. There is no separate mobile design in Figma; if you add one, replace the
zoom in `useFitToViewport` with responsive breakpoints section by section.

## Behaviour

- Forms (contact, enquiry, webinar/training, login, register, forgot password, feedback) validate on the
  client via `lib/forms-validation.ts` and `lib/core-captcha.ts`. They don't send data yet: hook your API
  into each form's `onSubmit`.
- Calculators (lens, HDD & bandwidth, CarKam storage) compute live; formulas are in `lib/tools-calculators.ts`.
- Download, video and print buttons show an inline "available on the live site" note: replace with real
  file URLs / players when you have them.
- The chat widget returns a fixed reply; connect `ChatWidget` to your chat backend.
- Login accepts the design's demo verification code `12345`.

## Deploying

The app uses browser routing (`/about`, `/sol-banking`, …). Configure your host to serve `index.html`
for unknown paths (SPA fallback), e.g. Netlify `_redirects`: `/* /index.html 200`, Vercel rewrites, or
nginx `try_files $uri /index.html;`.

## Content notes

Text is exactly as in Figma, including placeholder copy that still needs replacing (e.g. the
"From heart care to pediatrics…" intros, demo email/phone/address, a few typos such as "HOLM’s", "hte",
"10 digir"). Search the code for these strings when the real copy is ready.
