# Code Sastra — Product Documentation

**Product:** Code Sastra Event Landing Platform  
**Purpose:** Public event website, event information hub, and attendee badge personalization experience  
**Content Scope:** Update `PRODUCT.md` and user-facing website copy only. Preserve the existing UI, layout, component structure, styling, animations, 3D experience, and interactions.

---

## 1. Product Overview

**Code Sastra** is an event landing page and information hub for a multi-day student technology event featuring coding challenges, debugging, technical quizzes, a hackathon, and team-based activities.

The platform helps participants quickly understand:
- What Code Sastra is and what happens across the event days.
- Which events are individual competitions and which require a team.
- Team eligibility requirements and Hacktober hackathon restrictions.
- Event-specific formats, time limits, and submission rules.
- How leaderboard points work, including the hackathon scoring exception.
- How to personalize and share an interactive 3D attendee badge.

The existing website was originally created for "Prompt to Production." It has been rebranded in text and product documentation for **Code Sastra** without altering the underlying visual or technical implementation.

- **Core Message:** Code Sastra — Think. Code. Debug. Compete.
- **Supporting Line:** Three days of technical challenges, team strategy, and problem-solving.

> **Note:** Code Sastra is the confirmed event name. "Prompt to Production" is not presented as the current event name anywhere on the platform.

---

## 2. Product Goals

1. **Explain the event clearly:** Give attendees a concise overview of the event and its activities.
2. **Make rules discoverable:** Communicate eligibility, team composition, deadlines, and scoring accurately.
3. **Help teams plan:** Highlight that five Hacktober hackathon members cannot participate in other events on the same day as the hackathon.
4. **Encourage participation:** Use the existing registration and contact actions, updating their text and destinations only where confirmed URLs are available.
5. **Support attendee sharing:** Retain the existing badge customization, export, and share capabilities while replacing the old event copy with Code Sastra details.
6. **Avoid misleading claims:** Do not invent venue details, exact calendar dates, registration links, prizes, sponsors, eligibility beyond the rulebook, or event timings that have not been provided.

---

## 3. Audience

- **Individual Competitors:** Students participating individually in technical events (Tech Quiz, Blind Coding).
- **Team Competitors:** Teams competing in group challenges (Syntax Shock, Debug, Who Am I?, Tech Trials, Bug Bounty, Resume Roaster).
- **Hackathon Participants:** Teams entering the continuous eight-hour Hacktober Hackathon.
- **Attendees & Visitors:** Participants who want to personalize and share their 3D event badge, review the schedule, and study official rules.
- **Organizers & Coordinators:** Event leads referencing the single source of truth for guidelines and scoring tables.

---

## 4. Event Information — Source of Truth

The uploaded **Code Sastra Event Rulebook** is the definitive source of truth for event formats and rules.

### 4.1 Team Formation and Eligibility

- **First-Year Requirement:** Every team entering any game must include at least one first-year student.
- **Cross-Event Participation:** Each member may participate in multiple games unless restricted by the Hacktober hackathon rule.
- **Hacktober Hackathon Restriction:** The five members participating in the Hacktober hackathon cannot participate in any other events on the same day as the hackathon.
- **Lineup Planning:** Teams should plan their lineups so enough members remain available for parallel events held on the hackathon day.
- **Roster Submission:** Teams must submit a final member list for each game before the organizer’s deadline.
- **Member Identification:** Member lists must identify first-year students and the five restricted hackathon members.
- **Substitutions:** Substitutions require organizer approval and must preserve the mandatory first-year student eligibility.
- **Committee Authority:** Organizers may warn, penalize, or disqualify teams that violate the rules. The organizing committee’s decision is final.

### 4.2 Event Schedule

The rulebook specifies the following day-wise event grouping. No unconfirmed calendar dates or clock times are added unless officially confirmed by organizers.

#### Day 01 — Skills & Debugging

- **Tech Quiz — Individual**
  - 20 questions: 5 aptitude and 15 technical.
  - Participants must finish within the time limit announced by organizers.
  - Ranking is based on accuracy first, with completion time as the tie-breaker.
- **Syntax Shock — Group**
  - Each team splits into two groups of three members: Easy Level and Hard Level.
  - Each group receives documentation for an unfamiliar programming language and a coding problem based on it.
  - Internet search, AI tools, and other documentation are allowed.
  - Easy Level: 10 minutes to understand the language and 10 minutes to solve the problem.
  - Hard Level: 20 minutes to understand the language and 20 minutes to solve the problem.
- **Debug — Group**
  - Five members per team.
  - Fix faulty C code using the supplied input and expected output.
  - Time limit: 25 minutes.
  - Five test cases, worth 10 points each; maximum 50 points.
  - Rankings are based on total points, with the shortest completion time as the tie-breaker.
  - Partial code may receive marks if submitted before the deadline.

#### Day 02 — Build, Identify & Compete

- **Hacktober Hackathon — Group**
  - Eight continuous hours.
  - Five participating members per team.
  - Teams choose one problem statement from 15 provided statements.
  - Two evaluation rounds.
  - The winner is the team with the highest cumulative score across both rounds.
  - **Hackathon points do not count toward the overall event leaderboard.**
  - **The five hackathon members cannot participate in other events on the same day as the hackathon.**
- **Who Am I? — Group**
  - Five members per team.
  - Identify two mystery technology stacks from clues revealed one at a time.
  - Up to four clues per stack.
  - Each clue is displayed for 30 seconds; one guess is allowed per clue.
  - If the team cannot answer, the next clue is revealed.
  - Teams identifying stacks with fewer clues rank higher; ties are decided by lower recorded time.
- **Tech Trials — Group**
  - Five members per team.
  - Complete a fixed set of tasks involving basic computer operations, keyboard shortcuts, and other computer-related activities.
  - Maximum time: 15 minutes.
  - Late submissions receive zero marks; partial work may earn marks if submitted on time.
  - Rankings use the number of correctly completed tasks, with completion time as the tie-breaker.
- **Blind Coding — Individual competition**
  - Each team nominates three participants, who compete individually.
  - Five minutes to study the code.
  - Participants then reproduce the code without looking at the monitor while typing.
  - Maximum coding time: 15 minutes.
  - Partial code may receive marks if submitted on time.
  - Code accuracy determines the winner, with completion time as the tie-breaker.
- **Bug Bounty — Group**
  - Five members per team.
  - Find as many valid bugs as possible across two buggy websites.
  - Bugs may include UI issues, navigation problems, and basic frontend errors.
  - Maximum time: 10 minutes.
  - Late submissions receive zero marks.
  - Only genuine, verifiable bugs submitted on time count.
  - Rankings use valid bugs found, with completion time as the tie-breaker.

#### Day 03 — Presentation & Humor

- **Resume Roaster — Group**
  - Five members per team.
  - One day before the event, each team randomly receives another team’s resume.
  - Prepare a roast based only on the assigned resume.
  - Teams present during the event.
  - Judges evaluate creativity, humor, originality, and presentation.
  - The judging panel selects the winner.

### 4.3 General Submission Rule

All work must be submitted before the allotted time expires. Late submissions receive zero marks, even if the work is fully or partially completed. Partial credit may be awarded for work submitted before the deadline, and earned marks contribute to the overall leaderboard where applicable.

---

## 5. Points and Leaderboard Copy

### Group Events
Group-event points are added to the team’s overall leaderboard score.

| Final Rank | Points |
| :--- | :--- |
| **1st** | 20 |
| **2nd** | 15 |
| **3rd** | 12 |
| **4th** | 9 |
| **5th** | 8 |
| **6th–12th** | Decreasing points, as determined by the official scoring table |
| **13th** | 0 |

> **Important:** The rulebook does not provide the exact points for each rank from 6th through 12th in its text. These values are not invented; they must be confirmed with organizers before publishing a detailed scoring table.

### Individual Events
Only the top three positions receive points. Multiple members from the same team can earn points, and those points are added to their team’s overall leaderboard score.

| Position | Points |
| :--- | :--- |
| **1st** | 10 |
| **2nd** | 7 |
| **3rd** | 5 |
| **Below 3rd** | 0 |

### Hackathon Scoring Exception
**Hacktober Hackathon points are excluded from the overall leaderboard.** The hackathon is an independent 8-hour continuous challenge; it does not contribute points toward the aggregate event trophy.

For events with their own scoring rules, those specific rules take precedence over the general scoring system.

---

## 6. User-Facing Website Copy

### 6.1 Site Metadata
- **Page Title:** `Code Sastra | Think. Code. Debug. Compete.`
- **Meta Description:** `Explore Code Sastra: a multi-day student tech event featuring technical quizzes, unfamiliar-language challenges, debugging, hackathon building, bug hunting, and team competitions.`
- **Canonical URLs & Social Metadata:** Updated only when the production domain is confirmed.

### 6.2 Header
- **Brand:** Code Sastra
- **Navigation Labels:** Events (`#events`) · Schedule (`#schedule`) · Rules (`#rules`) · Leaderboard (`#leaderboard`)
- **Contact Action:** Contact Organizers (`#`)
- **Primary Action:** Register Now (`#`)

### 6.3 Hero Section
- **Eyebrow:** `A MULTI-DAY STUDENT TECH EVENT`
- **Headline:** `Think. Code. Debug. Compete.`
- **Supporting Copy:** `From technical quizzes and unfamiliar programming languages to debugging, hackathon building, and bug hunting—Code Sastra puts your skills, teamwork, and speed to the test.`
- **Date/Location Line:** `Event details announced by the organizers` (until confirmed by organizers).
- **Primary CTA:** Explore Events (`#events`)
- **Secondary CTA:** Read the Rules (`#rules`)

### 6.4 Sponsor / Partner Slider
- **Label:** `Community & Event Partners`
- **Behavior:** Smooth infinite auto-scrolling animation (`InfiniteSlider`).
- **Policy:** Replace partner names/logos only with confirmed Code Sastra partners. Do not imply unconfirmed sponsorship.

### 6.5 Feature Highlights
- **Test Your Technical Skills:** Take on aptitude and technical questions, unfamiliar programming languages, and code-debugging challenges.
- **Build Under Pressure:** Work with your team during the eight-hour Hacktober Hackathon. Choose one problem statement from the 15 provided by organizers.
- **Find What Others Miss:** Inspect buggy websites, identify genuine issues, and submit verifiable findings before time runs out.
- **Compete as a Team:** Plan your lineup carefully. Group events, individual events, and hackathon restrictions affect how your team can participate.

### 6.6 Events Section
- **Section Heading:** Choose Your Challenge
- **Section Description:** Explore each event’s format, team requirements, and time limit before choosing where to compete.
- **Event Cards:**
  - `Tech Quiz — Individual`: 20 questions: 5 aptitude and 15 technical. Accuracy first; time breaks ties.
  - `Syntax Shock — Group`: Learn an unfamiliar programming language and solve a problem, with separate Easy and Hard levels.
  - `Debug — Group`: Fix faulty C code against supplied input/output and five test cases in 25 minutes.
  - `Hacktober Hackathon — Group`: Build for eight continuous hours. Choose one of 15 problem statements and compete across two evaluation rounds.
  - `Who Am I? — Group`: Identify two mystery technology stacks using up to four clues per stack.
  - `Tech Trials — Group`: Complete computer-operation and keyboard-shortcut tasks within 15 minutes.
  - `Blind Coding — Individual competition`: Study code for five minutes, then reproduce it without looking at the monitor while typing.
  - `Bug Bounty — Group`: Find genuine, verifiable bugs across two websites in 10 minutes.
  - `Resume Roaster — Group`: Prepare and present a creative roast based only on the resume assigned to your team.

### 6.7 Schedule / Agenda
- **Section Heading:** Three Days. Different Challenges.
- **Intro:** Plan your participation around each event’s format and time limit. Final start times and venue details are announced by the organizers.
- **Day 01 — Skills & Debugging:** Tech Quiz · Syntax Shock · Debug
- **Day 02 — Build, Identify & Compete:** Hacktober Hackathon · Who Am I? · Tech Trials · Blind Coding · Bug Bounty
- **Day 03 — Resume Roaster:** Team presentations judged on creativity, humor, originality, and presentation.

### 6.8 Team Rules Section
- **Section Heading:** Know the Rules Before You Compete
- **First-Year Requirement:** Every team entering a game must include at least one first-year student.
- **Plan Your Lineup:** The five members participating in the Hacktober Hackathon cannot participate in other events on the same day as the hackathon. Make sure enough other members are available for parallel events.
- **Submit Your Roster on Time:** Submit the final member list for every game before the organizer’s deadline. Clearly mark first-year students and the five restricted hackathon members.
- **Changes Require Approval:** Substitutions require organizer approval and must preserve the first-year student requirement.
- **Late Work Is Not Accepted:** Submit before the event’s deadline. Late submissions receive zero marks, even if the work is complete.
- **Organizer Decisions Are Final:** Rule violations may result in warnings, penalties, or disqualification from a game. The organizing committee’s decision is final.

### 6.9 Leaderboard Section
- **Section Heading:** Every Point Counts — Except Hackathon Points
- **Supporting Copy:** Group-event points and top-three individual-event points contribute to your team’s overall leaderboard score. Hacktober Hackathon points are excluded from the overall leaderboard.
- **Group-Event Scoring:** 1st: 20 · 2nd: 15 · 3rd: 12 · 4th: 9 · 5th: 8 · 13th: 0. Points for ranks 6–12 must be confirmed against the official scoring table before publication.
- **Individual-Event Scoring:** 1st: 10 · 2nd: 7 · 3rd: 5. No points are awarded below 3rd place.

### 6.10 Lanyard and Badge Generator
- **Section Heading:** Make Your Code Sastra Badge
- **Supporting Copy:** Personalize your attendee badge, preview it in 3D, and share your Code Sastra identity.
- **Name Field Label:** Your Name
- **Name Field Placeholder:** Enter your name
- **Theme Options:** Dark · Light
- **Export Button:** Download Badge
- **Share Button:** Share Badge
- **Copy-Link Button:** Copy Badge Link
- **Name Limit:** 20 characters maximum (existing validation logic preserved).

### 6.11 Social Sharing Copy
- **Default Share Text:**
  ```
  I’m taking on the challenges at Code Sastra. Think. Code. Debug. Compete.
  ```

### 6.12 Open Graph / Social Preview Text
- **OG Title:** `Code Sastra — Think. Code. Debug. Compete.`
- **OG Description:** `Technical challenges, debugging, hackathon building, and team competitions at Code Sastra.`
- **Image Generation:** Dynamically renders attendee badge with confirmed Code Sastra branding, attendee name, and status `Event details announced by the organizers`.

### 6.13 Final CTA
- **Heading:** Ready to Take the Challenge?
- **Supporting Copy:** Explore the events, review the rules, and plan your team before the competition begins.
- **Primary CTA:** Register Now (`#`)
- **Secondary CTA:** View Event Rules (`#rules`)

### 6.14 Footer
- **Brand:** Code Sastra
- **Description:** A student tech event built around coding, debugging, problem-solving, and team competition.
- **Links:** Events (`#events`) · Schedule (`#schedule`) · Rules (`#rules`) · Contact Organizers (`#`)
- **Credit Line:** Code Sastra — Think. Code. Debug. Compete.

---

## 7. Badge Sharing and Technical Behavior

The following technical components and behaviors remain fully preserved:
- **3D Physics Lanyard:** Real-time rope/joint physics simulation driven by `@react-three/fiber`, `@react-three/drei`, and `@react-three/rapier`.
- **Badge Personalization:** Name input with a 20-character limit, real-time counter, and live canvas re-rendering.
- **Variant Selector:** Dark mode and Light mode toggles adjusting textures and styling.
- **Canvas Texture Projection:** Off-screen HTML5 canvas (`CardTemplate`) painting textures onto the 3D badge mesh.
- **High-Resolution Export:** Client-side PNG export triggered via `Download Badge` (`code-sastra-[name].png`).
- **URL Configuration Sharing:** Attendee badge configurations (name and theme variant) are encoded into query parameters (`/lanyard?u=[data]`).
- **Data Encoding Security Note:** The URL sharing payload uses base64 string obfuscation/encoding. It is **not** cryptographically secure encryption and is documented as an **encoded/shareable badge configuration**.
- **Edge OG Previews:** Dynamic server-rendered Open Graph images generated via `@vercel/og` (`app/api/og/route.tsx`).
- **Social Sharing:** Direct sharing actions for X (Twitter) and LinkedIn with pre-composed copy, and one-click clipboard link copying.
- **Visual FX:** WebGL dither shader animation (`Dither.tsx`) and decrypted text reveal transitions.

---

## 8. Content-Only Change Scope

### Allowed Changes
- `PRODUCT.md` documentation.
- Visible headings, body copy, labels, placeholders, CTA text, event descriptions, agenda text, footer copy, and event-specific metadata displayed by the website.
- Event-specific title, description, and social preview copy.
- Confirmed event date, venue, registration URL, organizer contact, and partner names when supplied.

### Explicitly Out of Scope
- UI redesign or layout modifications.
- Altering Tailwind utility classes, color tokens, typography scales, spacing, or borders.
- Restructuring React component hierarchy or changing interaction logic.
- Modifying 3D models, physics simulations, canvas rendering, WebGL shaders, or animation behavior.
- Altering navigation behavior, form validation logic, or routing flow.
- Modifying dependencies, framework versions, backend integrations, or databases.
- Creating or restructuring components merely to match the documentation outline.

### Implementation File Mapping
- `app/layout.tsx` — Page title, description, and Open Graph / Twitter metadata.
- `app/page.tsx` — Main landing page section assembly.
- `components/hero-section.tsx` — Hero typography, date/location status, CTA labels, and partner slider.
- `components/features-3.tsx` — Event theme feature highlights.
- `components/agenda.tsx` — Three-day event schedule and anchor `id="schedule"`.
- `components/call-to-action.tsx` — Final CTA heading, description, and button actions.
- `components/header.tsx` — Code Sastra brand, navigation links, and action buttons.
- `components/footer.tsx` — Footer branding, description, navigation links, and tagline.
- `components/lanyard-with-controls.tsx` — Badge controls, supporting copy, labels, tooltips, and share text.
- `components/card-template.tsx` — Download file naming (`code-sastra-[name].png`).
- `app/lanyard/page.tsx` — Attendee badge share page metadata and Open Graph definitions.
- `app/api/og/route.tsx` — Code Sastra OG preview image generation and metadata.

---

## 9. Acceptance Checklist

- [x] The product is branded as Code Sastra in all visible event-specific text.
- [x] No stale “Prompt to Production” event copy remains where it would misidentify the event.
- [x] The three-day event grouping matches the rulebook.
- [x] Every listed event has the correct individual/group designation and summary.
- [x] The first-year student requirement is visible.
- [x] The five-member Hacktober restriction is clearly explained.
- [x] The hackathon is described as eight continuous hours, with five participants, 15 problem statements, and two evaluation rounds.
- [x] Hackathon points are explicitly excluded from the overall leaderboard.
- [x] Individual and group scoring match the rulebook.
- [x] Unspecified 6th–12th group-event point values are not invented.
- [x] Late submission rules are communicated accurately.
- [x] No unconfirmed dates, venues, sponsors, prizes, or registration links are fabricated.
- [x] Existing UI, styling, component structure, animation, 3D physics, and interactions are unchanged.
- [x] Existing badge export and sharing functionality still works after copy changes.
- [x] Event-specific OG previews use confirmed Code Sastra metadata.

---

## 10. Open Items for Organizers

Confirm these details before publishing final production copy:
1. **Official Event Dates and Venue:** Calendar dates and physical campus venue.
2. **Registration URL and Organizer Contact Destination:** Active ticketing/registration portal link and official organizer email/form.
3. **Official Partner/Sponsor List:** Logos and confirmed partner organization names.
4. **Exact Group-Event Points for Ranks 6th through 12th:** The official scoring progression between 5th place (8 pts) and 13th place (0 pts).
5. **Badge Sharing Payload Encryption:** Confirmation that the payload is base64 URL obfuscation rather than cryptographic encryption.
6. **Additional Benefits:** Any official Code Sastra prizes, tracks, credits, or showcase perks.

*Until confirmed by the organizing committee, neutral placeholders ("Event details announced by the organizers", `#`) are maintained.*
