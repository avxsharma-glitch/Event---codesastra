    # BG.md — Codebase Bug Audit

    ## 1. Executive Summary

    - **Audit scope:** All tracked application, component, utility, route, configuration, and public asset files in the repository snapshot.
    - **Technology stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Motion, Three.js/React Three Fiber, Rapier, and Vercel Analytics.
    - **Confirmed issues:** 7
    - **Potential issues:** 3
    - **Items requiring verification:** 3
    - **Areas successfully tested:** Production build, standalone TypeScript checking, local HTTP responses for `/`, `/lanyard`, and `/api/og?format=og`, static asset existence.
    - **Areas not tested:** Browser-level clicking, WebGL rendering and drag behavior, clipboard permissions, social share windows, and real external-font failure scenarios. No credentials or backend services are configured in the inspected project.
    - **Scope exclusions:** `node_modules`, generated build output, and the attached read-only prompt were not treated as application source.

    ## 2. Severity Summary

    | Severity | Count | Description |
    |---|---:|---|
    | Critical | 0 | No confirmed issue that prevents the application from starting or exposes a confirmed critical security problem. |
    | High | 3 | Broken primary actions or build/type validation defects affecting reliability. |
    | Medium | 5 | Broken navigation, user feedback, or likely runtime/performance risks. |
    | Low | 2 | Lower-impact robustness and verification items. |

    ## 3. Bug Inventory

    | ID | Severity | Category | File | Title | Confidence |
    |---|---|---|---|---|---|
    | BUG-001 | High | Navigation | `components/header.tsx`, `components/hero-section.tsx`, `components/call-to-action.tsx`, `components/footer.tsx` | Rules links target a missing section | Confirmed |
    | BUG-002 | Medium | Navigation | `components/header.tsx` | Leaderboard link targets a missing section | Confirmed |
    | BUG-003 | High | UI Interaction | `components/header.tsx`, `components/footer.tsx`, `components/call-to-action.tsx` | Registration and contact actions are placeholders | Confirmed |
    | BUG-004 | High | Build | `components/motion-primitives/animated-group.tsx` | TypeScript errors in animation variant consumers | Confirmed |
    | BUG-005 | High | Build | `components/motion-primitives/animated-group.tsx` | Dynamic Motion component construction is not type-safe | Confirmed |
    | BUG-006 | Medium | Build | `next.config.mjs`, `package.json` | Build and lint validation are not reliable | Confirmed |
    | BUG-007 | Medium | UI Interaction | `components/lanyard-with-controls.tsx` | Clipboard failures provide no user-visible feedback | Confirmed |
    | BUG-008 | Medium | Performance | `components/ui/lanyard.tsx` | Custom textures may not be disposed reliably | Needs Verification |
    | BUG-009 | Medium | Runtime | `components/lanyard-with-controls.tsx`, `components/card-template.tsx` | Initial badge capture can race image loading | Needs Verification |
    | BUG-010 | Low | API | `app/api/og/route.tsx` | OG generation depends on an unchecked external font fetch | Needs Verification |

    ## 4. Detailed Findings

    ### BUG-001 — Rules links target a missing section

    - **Severity:** High
    - **Category:** Navigation
    - **Confidence:** Confirmed
    - **Location:** `components/header.tsx:40`, `components/hero-section.tsx:88`, `components/call-to-action.tsx:56`, `components/footer.tsx:14-16`
    - **Problem:** Multiple visible links use `href="#rules"`, but no rendered element in the inspected application has `id="rules"`.
    - **Expected behavior:** Selecting a Rules link should scroll to an existing rules section or navigate to a dedicated rules route.
    - **Observed behavior / evidence:** The only section IDs found are `events` and `schedule`; `#rules` has no target. The browser therefore changes or attempts to resolve the fragment without presenting rules content.
    - **Reproduction steps:** Open `/`, activate “Read the Rules”, “View Event Rules”, the header Rules link, or the footer Rules link.
    - **Suggested investigation:** Add or restore the intended rules destination and verify all four links against it.
    - **Related findings:** BUG-002, BUG-003.

    ### BUG-002 — Leaderboard link targets a missing section

    - **Severity:** Medium
    - **Category:** Navigation
    - **Confidence:** Confirmed
    - **Location:** `components/header.tsx:41`
    - **Problem:** The header exposes a “Leaderboard” link with `href="#leaderboard"`, but no `leaderboard` element or route exists.
    - **Expected behavior:** The link should scroll to leaderboard content or navigate to a leaderboard page.
    - **Observed behavior / evidence:** Repository-wide inspection found no `id="leaderboard"` and no `/leaderboard` route.
    - **Reproduction steps:** Open `/` and select “Leaderboard” in the header.
    - **Suggested investigation:** Confirm whether leaderboard content was omitted or the navigation item should be removed/redirected.
    - **Related findings:** BUG-001.

    ### BUG-003 — Registration and contact actions are placeholders

    - **Severity:** High
    - **Category:** UI Interaction
    - **Confidence:** Confirmed
    - **Location:** `components/header.tsx:48-55`, `components/footer.tsx:18-20`, `components/call-to-action.tsx:47`
    - **Problem:** “Contact Organizers” and “Register Now” controls use `href="#"` instead of an actionable contact destination, registration route, or form.
    - **Expected behavior:** Contact should open a valid contact method, and registration should open the registration flow.
    - **Observed behavior / evidence:** `#` is a placeholder fragment and no handler or alternate destination is attached. Activating these controls cannot start either flow.
    - **Reproduction steps:** Select either header CTA, footer Contact Organizers, or the bottom Register Now CTA.
    - **Suggested investigation:** Confirm the intended organizer contact and registration endpoints, then test keyboard and mouse activation.
    - **Related findings:** BUG-001.

    ### BUG-004 — TypeScript errors in animation variant consumers

    - **Severity:** High
    - **Category:** Build
    - **Confidence:** Confirmed
    - **Location:** `components/hero-section.tsx:61`, `components/hero-section.tsx:103`, `components/features-3.tsx:33`, `components/agenda.tsx:33`, `components/call-to-action.tsx:31`
    - **Problem:** `pnpm exec tsc --noEmit` reports that the imported `transitionVariants` object is not assignable to the `Variants` type. Its inferred `transition.type` is `string`, not the narrower Motion animation type.
    - **Expected behavior:** Standalone TypeScript validation should complete without errors.
    - **Observed behavior / evidence:** The command exited with code 2 and reported `TS2322` at each consumer, including “Type 'string' is not assignable to type 'AnimationGeneratorType | undefined'.”
    - **Reproduction steps:** Run `pnpm exec tsc --noEmit`.
    - **Suggested investigation:** Type the shared transition definition against Motion's supported transition type and rerun standalone validation.
    - **Related findings:** BUG-006.

    ### BUG-005 — Dynamic Motion component construction is not type-safe

    - **Severity:** High
    - **Category:** Build
    - **Confidence:** Confirmed
    - **Location:** `components/motion-primitives/animated-group.tsx:127-131`, `components/motion-primitives/animated-group.tsx:150`
    - **Problem:** The component casts `as` and `asChild` through `keyof JSX.IntrinsicElements` and passes the resulting dynamically created components to JSX. TypeScript reports invalid `string | number | symbol` arguments, missing `JSX` namespace, and a `className` overload failure.
    - **Expected behavior:** The reusable animation component should type-check under the repository's configured React and TypeScript versions.
    - **Observed behavior / evidence:** `pnpm exec tsc --noEmit` reports `TS2345`, `TS2503`, and `TS2769` for this file.
    - **Reproduction steps:** Run `pnpm exec tsc --noEmit`.
    - **Suggested investigation:** Align the `as`/`asChild` prop types and Motion component factory usage with the installed React type definitions.
    - **Related findings:** BUG-004, BUG-006.

    ### BUG-006 — Build and lint validation are not reliable

    - **Severity:** Medium
    - **Category:** Build
    - **Confidence:** Confirmed
    - **Location:** `next.config.mjs:4`, `package.json:8`
    - **Problem:** The Next configuration explicitly sets `typescript.ignoreBuildErrors: true`, so a production build can succeed while the standalone type checker fails. The configured `lint` script also cannot run because the `eslint` executable is unavailable in the installed project.
    - **Expected behavior:** CI/build validation should fail on source type errors, and the declared lint command should be runnable from the declared dependencies.
    - **Observed behavior / evidence:** `pnpm build` exited successfully but printed “Skipping validation of types”; `pnpm exec tsc --noEmit` exited with code 2. `pnpm lint` exited with code 1 and reported `'eslint' is not recognized`; `package.json` does not declare `eslint` in `devDependencies`.
    - **Reproduction steps:** Run `pnpm build`, `pnpm exec tsc --noEmit`, and `pnpm lint`.
    - **Suggested investigation:** Decide whether type errors should block builds and ensure the lint tool/version is intentionally declared and installed.
    - **Related findings:** BUG-004, BUG-005.

    ### BUG-007 — Clipboard failures provide no user-visible feedback

    - **Severity:** Medium
    - **Category:** UI Interaction
    - **Confidence:** Confirmed
    - **Location:** `components/lanyard-with-controls.tsx:121-129`
    - **Problem:** The Copy Badge Link action catches clipboard errors and only writes to `console.error`; the UI does not show failure state or provide a fallback.
    - **Expected behavior:** Users should be told when copying is unavailable and be given an alternate way to obtain the link.
    - **Observed behavior / evidence:** The catch block logs `Failed to copy link` but leaves `copied` false and renders no notification.
    - **Reproduction steps:** Use the Copy Badge Link control in a browser context where clipboard permission is denied or `navigator.clipboard` is unavailable.
    - **Suggested investigation:** Test permission-denied and insecure-origin behavior and add repository-standard visible error handling or fallback copying.

    ### BUG-008 — Custom textures may not be disposed reliably

    - **Severity:** Medium
    - **Category:** Performance
    - **Confidence:** Needs Verification
    - **Location:** `components/ui/lanyard.tsx:129-153`
    - **Problem:** The texture-loading effect cleanup closes over the `customCardTexture` value from the effect's render, while the loaded texture is assigned later through state. Cleanup can therefore observe `null` and fail to dispose the texture loaded by that effect.
    - **Expected behavior:** Every custom Three.js texture should be disposed when replaced or when the component unmounts.
    - **Observed behavior / evidence:** The effect's cleanup references `customCardTexture`, but the loader callback calls `setCustomCardTexture(loadedTexture)` asynchronously. This is a lifecycle risk requiring browser/GPU verification.
    - **Reproduction steps:** Repeatedly apply different badge names/themes and monitor GPU texture allocations in browser developer tooling.
    - **Suggested investigation:** Verify disposal on texture replacement and unmount with a Three.js resource inspection tool.

    ### BUG-009 — Initial badge capture can race image loading

    - **Severity:** Medium
    - **Category:** Runtime
    - **Confidence:** Needs Verification
    - **Location:** `components/lanyard-with-controls.tsx:77-91`, `components/card-template.tsx:28-34`, `components/card-template.tsx:43-50`
    - **Problem:** When a shared lanyard URL includes a name, the controls wait a fixed 150 ms before calling `captureTexture`, while the base card image loads independently. If the image is not loaded by then, capture intentionally draws a black fallback.
    - **Expected behavior:** The initial 3D badge should use the selected base card artwork whenever the asset is available.
    - **Observed behavior / evidence:** `captureTexture` draws a black background when `baseImage` is null, and the mount path uses a fixed timeout rather than waiting for the image load promise.
    - **Reproduction steps:** Open a shared `/lanyard?u=...` URL on a slow connection or with cache disabled and inspect the initial 3D badge texture.
    - **Suggested investigation:** Test under throttled network conditions and compare the first rendered texture with a later manually applied texture.

    ### BUG-010 — OG generation depends on an unchecked external font fetch

    - **Severity:** Low
    - **Category:** API
    - **Confidence:** Needs Verification
    - **Location:** `app/api/og/route.tsx:37-50`, `app/api/og/route.tsx:177-182`
    - **Problem:** Every OG image request fetches CSS and font bytes from Google Fonts, without timeout, response validation for the CSS request, or a local fallback. External availability directly controls whether the route returns an image.
    - **Expected behavior:** Social image generation should either use a bundled/reliable font source or fail quickly with a clearly diagnosed, bounded error.
    - **Observed behavior / evidence:** The local smoke test returned `200 image/png`, but external dependency failure behavior was not tested. `loadGoogleFont` calls `fetch` twice and throws only after the font resource lookup fails.
    - **Reproduction steps:** Request `/api/og?format=og` while external font access is blocked or delayed.
    - **Suggested investigation:** Test timeout and non-200 responses in a controlled local environment without contacting production services.

    ## 5. Broken Links and Routes

    | Source | Destination | Result |
    |---|---|---|
    | Header Rules, hero Read the Rules, CTA View Event Rules, footer Rules | `#rules` | Broken: no matching section ID exists. |
    | Header Leaderboard | `#leaderboard` | Broken: no matching section ID exists. |
    | Header Contact Organizers, header Register Now, footer Contact Organizers, CTA Register Now | `#` | Placeholder: no contact or registration behavior is implemented. |
    | Header/home and logo links | `/` | Verified as valid by local smoke testing of `/`. |
    | Lanyard OG metadata and route | `/lanyard`, `/api/og` | Route responses verified locally; valid encrypted badge behavior was not browser-tested. |

    ## 6. Dead Buttons and Interactions

    - **Register Now:** dead placeholder link; see BUG-003.
    - **Contact Organizers:** dead placeholder link; see BUG-003.
    - **Rules and Leaderboard navigation:** destination sections do not exist; see BUG-001 and BUG-002.
    - **Apply, badge theme radios, download, social share, and copy controls:** handlers are present in code. Download, pop-up behavior, WebGL rendering, and clipboard permissions were not browser-tested.

    ## 7. Runtime, Build, and Type Errors

    - `pnpm build`: exited 0 and produced the route table, but explicitly skipped TypeScript validation because of `next.config.mjs:4`. It emitted a non-fatal stale `baseline-browser-mapping` data warning.
    - `pnpm exec tsc --noEmit`: exited 2 with `TS2322` errors in animation variant consumers and `TS2345`, `TS2503`, and `TS2769` errors in `components/motion-primitives/animated-group.tsx`.
    - `pnpm lint`: exited 1 because the `eslint` executable was not available.
    - Local smoke test: `/`, `/lanyard`, and `/api/og?format=og` each returned HTTP 200; the OG route returned `image/png`.

    ## 8. Security and Data-Handling Risks

    - The lanyard username URL encoding in `lib/utils.ts` is obfuscation, not encryption. It is suitable only for concealment from casual viewing; usernames remain recoverable by anyone with the URL. No authentication or authorization data was found in the inspected code.
    - The OG route embeds the decoded username into generated output. The name is user-controlled but rendered as text by `ImageResponse`; no confirmed code injection was found.
    - No secrets, tokens, passwords, or credentials were included in this report.

    ## 9. Untested Areas

    - Browser click/keyboard behavior for every navigation and CTA.
    - WebGL/Three.js canvas rendering, drag physics, mobile performance, and GPU resource disposal.
    - Clipboard permission-denied fallback behavior.
    - Social share pop-up blockers and third-party share endpoint behavior.
    - External Google Fonts failure, timeout, and rate-limit behavior.
    - No real forms, accounts, emails, purchases, or production mutations were submitted.

    ## 10. Recommended Fix Order

    1. Establish an intentional type-checking policy and resolve BUG-004, BUG-005, and BUG-006.
    2. Replace the placeholder registration/contact links with real destinations or implemented flows (BUG-003).
    3. Add the missing Rules and Leaderboard destinations or remove the links (BUG-001 and BUG-002).
    4. Add visible clipboard failure handling (BUG-007).
    5. Verify and correct texture lifecycle disposal (BUG-008).
    6. Make initial badge capture wait for image readiness (BUG-009).
    7. Bound and harden external font loading for OG images (BUG-010).

    ## 11. Audit Integrity Statement

    - No bug fixes were applied.
    - No source code was modified.
    - No dependencies were changed.
    - No existing functionality was intentionally changed.
    - `BG.md` was the only file created or updated by the audit.
