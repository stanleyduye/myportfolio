# Design and performance update

The portfolio uses a restrained green accent, clear typography, consistent spacing,
and coordinated page entrances, scroll reveals, and feedback on interactive elements.
Headings and the portrait remain visible from the first paint. Motion settles quickly
and respects reduced-motion preferences.

The approach follows [Emil Kowalski’s animation guidance](https://emilkowal.ski/ui/you-dont-need-animations),
including purposeful motion, short transitions, visible press feedback, and respect
for reduced motion. Hover transforms apply only to devices with a fine pointer;
keyboard actions show focus without press animations.

## Implementation

- Pages, project listings, the hero, and the footer render as server components.
  The mobile navigation, contact form, and shared motion observer are client components.
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
- Reduced motion removes movement and smooth scrolling, keeping brief entrance and
  menu opacity transitions.
- Contact validation, whitespace rejection, duplicate prevention, pending state, field errors, network
  failure recovery, and success/reset were checked with intercepted responses.
  The checks did not send messages to Formspree.

## Motion update — October 6, 2026

- Page headings, hero copy, actions, and the portrait enter in 50ms steps with a
  600ms ease-out. The [route template](https://nextjs.org/docs/app/api-reference/file-conventions/template)
  restarts these entrances on navigation while the header and footer stay mounted.
  Navigation has no animation wait or duplicate outgoing page.
- One `IntersectionObserver` prepares only content below the initial viewport.
  Sections, project cards, story paragraphs, skill groups, and the footer reveal
  once with a 600ms transition and a 60ms sibling stagger. Completed elements
  lose their animation styles. Keyboard focus reveals pending content instantly.
- Project hover lift, screenshot zoom, directional arrows, link underlines, and
  press feedback use CSS transitions. Hover motion applies only to fine pointers.
- The native mobile dialog and backdrop enter and exit together in 180ms using
  opacity and transform. Display and overlay use discrete transitions to retain
  the top layer during exit where supported. Keyboard actions and desktop resize
  dismiss immediately; interrupted pointer transitions retarget normally.
- Native smooth scrolling respects the sticky header. Next's
  `data-scroll-behavior` attribute preserves its route scroll handling.
- Reduced motion removes translation, scaling, hover movement, and smooth
  scrolling. Brief fades remain. Changing the preference also releases pending
  reveals. Without JavaScript or `IntersectionObserver`, all content stays visible.
- There are no added dependencies, per-frame scroll handlers, animated layout
  properties, retained animation transforms, or permanent `will-change` hints.

Production route JavaScript increased by **496 gzip bytes per route** (about
0.25%), with the same number of script requests. All four routes still prerender.
The measurements compare the build immediately before and after the motion update;
they exclude CSS, images, and network headers.

The browser checks cover 1440px, 390px, and 320px layouts, menu focus and scrolling,
mocked contact submissions, one-time reveals, focus rescue, live reduced-motion
changes, repeated Next navigation, history, interrupted routes and dialogs, and
JavaScript/API fallbacks. Performance measurements are local browser samples,
not field Core Web Vitals or a guarantee for every device.

GPU-enabled idle and transform-animation samples both averaged **16.67ms per
frame (60fps)** at normal CPU speed, with no frame over 34ms. The animation
samples had two layout passes overall, rather than a layout pass on each frame.
Under 4× CPU throttling, frame timing varied in both idle and animated samples;
those results do not establish a guaranteed frame rate on slower devices.
