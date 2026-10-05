# Design and performance update

The portfolio uses a restrained green accent, clear typography, consistent spacing,
and subtle feedback on interactive elements. Static content is visible immediately;
there are no delayed entrances, typewriter effects, or continuous decorative motion.

The approach follows [Emil Kowalski’s animation guidance](https://emilkowal.ski/ui/you-dont-need-animations),
including purposeful motion, short transitions, visible press feedback, and respect
for reduced motion. Hover transforms apply only to devices with a fine pointer;
keyboard actions show focus without press animations.

## Implementation

- Pages, project listings, the hero, and the footer render as server components.
  The mobile navigation and contact form are the only client components in use.
  See [Next.js server and client components](https://nextjs.org/docs/app/getting-started/server-and-client-components).
- The homepage renders four projects. The Projects page renders all eight.
  Project descriptions and links are fully visible rather than clipped.
- Optimized WebP copies live in `public/Images/optimized`. Original images are
  retained as source assets. Responsive image sizes, lazy project images, and a
  preloaded portrait use [Next.js image optimization](https://nextjs.org/docs/app/getting-started/images).
- Geist is loaded with `next/font`, including a fallback and `display: swap`.
- The mobile menu uses a native modal dialog for focus trapping and Escape,
  restores trigger focus, locks background scrolling, and closes on desktop resize.
- The contact form continues to use the existing Formspree endpoint. Native
  validation, trimmed input, duplicate submission prevention, pending state, field
  errors, retry, and success feedback use native browser APIs and React state.
  Its HTML action also supports submission without JavaScript.
- Each page has one main heading, route metadata, and visible keyboard focus.
  A skip link provides direct access to the main content.

## Measured changes

Measured from production builds on October 5, 2026. JavaScript totals count unique
script sources in each route’s HTML and compress each script with Node’s gzip.
They include the Next.js and React runtime. Image totals cover the eight project
previews and portrait used by the site, before delivery-time image optimization.

| Metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Homepage JavaScript, gzip | 262,010 bytes | 195,927 bytes | 25.2% smaller |
| Projects JavaScript, gzip | 259,672 bytes | 195,927 bytes | 24.5% smaller |
| About JavaScript, gzip | 253,732 bytes | 190,430 bytes | 24.9% smaller |
| Contact JavaScript, gzip | 268,161 bytes | 191,895 bytes | 28.4% smaller |
| Image assets referenced by pages | 8,120,455 bytes | 370,070 bytes | 95.4% smaller |

These are local asset measurements, not field Core Web Vitals or a Lighthouse score.

## Verification

- Production build and TypeScript checks pass; all four public routes prerender.
- Desktop (1440px) and phones (390px and 320px): no horizontal overflow, one main heading,
  correct project counts, and successful loading of visible images.
- Mobile menu: background focus is blocked, trigger focus returns, Escape dismisses,
  background scrolling locks, and the menu closes when resizing to desktop.
- Reduced motion disables transitions.
- Contact validation, whitespace rejection, duplicate prevention, pending state, field errors, network
  failure recovery, and success/reset were checked with intercepted responses.
  The checks did not send messages to Formspree.
