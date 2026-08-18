# Responsive Design Issues — QA Portfolio

Audit date: 2026-08-17
Stack: React 19 + Tailwind CSS v4
Breakpoints referenced: mobile `<640px`, `sm >=640px`, `md >=768px`, `lg >=1024px`, `xl >=1280px`.

Issues are grouped by severity and reference `file:line`.

---

## HIGH SEVERITY

### 1. Hero grid has no fallback below `xl`
- **File:** `src/components/sections/HeroSection.jsx:86`
- **Current:** `grid items-center gap-12 xl:grid-cols-[1fr_190px_1.05fr] xl:gap-8`
- **Problem:** The 3-column layout only kicks in at `xl` (>=1280px). Between 640px and 1279px, the three blocks collapse to a single column with no explicit intermediate handling. Middle "QA checks" rail and right "dashboard" panel end up full-width and awkward on tablets.
- **Fix:** Set an explicit mobile-first single-column base, and consider a 2-column arrangement at `lg` before the 3-column at `xl`. Also add responsive `gap` values (`gap-8 md:gap-10 xl:gap-8`).

### 2. Hero left-rail padding hardcoded at `pl-12`
- **File:** `src/components/sections/HeroSection.jsx:184`
- **Current:** `flex flex-col gap-4 pl-12 xl:h-full xl:justify-between xl:gap-0 xl:py-2 xl:pl-0`
- **Problem:** 48px left padding is a lot on 320–360px phones. Combined with the absolutely positioned rail node at `-left-[34px]` (line 190), the node can clip near the viewport edge.
- **Fix:** Scale padding: `pl-10 sm:pl-12`, or slightly smaller on the tightest screens.

### 3. Contact CTA buttons overflow on mobile
- **File:** `src/components/sections/ContactSection.jsx:38`
- **Current:** `mt-8 flex flex-wrap justify-center gap-4`
- **Problem:** Four pill buttons (Email, Call, GitHub, LinkedIn) with `flex-wrap` produce an uneven 2–2 or 3–1 pattern on narrow phones. On very small viewports (<360px) they can also overflow.
- **Fix:** Stack vertically on mobile: `flex-col sm:flex-row`, and make buttons full-width on mobile (`w-full sm:w-auto`).

### 4. Contact section `py-20` too large on mobile
- **File:** `src/components/sections/ContactSection.jsx:32`
- **Current:** `px-6 py-20`
- **Problem:** 80px top/bottom is excessive on short viewports.
- **Fix:** `px-6 py-12 md:py-20`.

### 5. Card `p-6` padding doesn't shrink on mobile
- **File:** `src/components/sections/ExperienceSection.jsx:12`
- **Current:** `rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8`
- **Problem:** 24px inner padding on a phone leaves narrow content space.
- **Fix:** `p-4 sm:p-6 md:p-8`.

### 6. Section grids skip the `sm:` breakpoint
- **Files:**
  - `src/components/sections/ProjectsSection.jsx:14`
  - `src/components/sections/QAProcessSection.jsx:14`
- **Current:** `grid gap-6 md:grid-cols-2 lg:grid-cols-3`
- **Problem:** Cards stay single-column until 768px. On 640–767px tablets/large phones a 2-column layout is more efficient.
- **Fix:** Add `sm:grid-cols-2 lg:grid-cols-3` (drop redundant `md:grid-cols-2`).

### 7. Hero right dashboard panel padding
- **File:** `src/components/sections/HeroSection.jsx:208`
- **Current:** `rounded-[1.75rem] border ... p-4 shadow-2xl ... md:p-6`
- **Problem:** OK but inner strengths panel is `p-5 md:p-6` (line 236) plus the outer `p-4`, so nested paddings compound. On mobile the actual content width is small.
- **Fix:** Reduce inner to `p-4 md:p-6` for better mobile density.

---

## MEDIUM SEVERITY

### 8. Global `Section` uses fixed `py-20`
- **File:** `src/components/common/Section.jsx:5`
- **Current:** `py-20`
- **Problem:** Every section on the page is `py-20` (80px) on mobile — vertical space piles up.
- **Fix:** `py-12 md:py-16 lg:py-20`.

### 9. `Container` uses fixed `px-6`
- **File:** `src/components/common/Container.jsx:2`
- **Current:** `mx-auto max-w-7xl px-6`
- **Problem:** 24px horizontal padding on both sides removes ~48px from a 320px viewport.
- **Fix:** `px-4 sm:px-6`.

### 10. `AutomationSection` code block overflow risk
- **File:** `src/components/sections/AutomationSection.jsx:27-43`
- **Current:** Outer `p-6`, inner `font-mono text-sm`, `<pre className="mt-4 overflow-x-auto whitespace-pre-wrap">`.
- **Problem:** On mobile the mono font at `text-sm` combined with the padded card leaves little width. `whitespace-pre-wrap` prevents horizontal scroll but forces awkward wraps.
- **Fix:** Reduce font on mobile (`text-xs sm:text-sm`) and shrink card padding (`p-4 sm:p-6`).

### 11. `SectionTitle` heading jump
- **File:** `src/components/common/SectionTitle.jsx:7`
- **Current:** `text-3xl font-bold text-white md:text-4xl`
- **Problem:** Jumps from 30px to 36px at 768px only; no intermediate. Fine on wide phones but heavy on 320px.
- **Fix:** `text-2xl sm:text-3xl md:text-4xl`.

### 12. Hero H1 non-smooth scaling
- **File:** `src/components/sections/HeroSection.jsx:97`
- **Current:** `text-4xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl xl:text-[3rem]`
- **Problem:** `text-4xl sm:text-4xl` is a no-op; then leaps to `text-5xl` at 768px. Feels choppy.
- **Fix:** `text-3xl sm:text-4xl md:text-5xl xl:text-[3rem]`.

### 13. Contact H2 tight jump
- **File:** `src/components/sections/ContactSection.jsx:35`
- **Current:** `text-3xl font-bold text-white md:text-5xl`
- **Problem:** Jumps 30→48px at md.
- **Fix:** `text-2xl sm:text-3xl md:text-5xl`.

### 14. `StatGrid` "bar" variant jumps 1→3 columns at `sm:`
- **File:** `src/components/common/StatGrid.jsx:23`
- **Current:** `grid ... grid-cols-1 ... sm:grid-cols-3 sm:divide-x sm:divide-y-0`
- **Problem:** At 640px, three stat tiles + dividers get cramped when parent container is narrow (e.g. inside the hero left column at `lg` — 3 columns competing for space).
- **Fix:** Acceptable as-is since `max-w-xl` caps it, but for consistency consider `sm:grid-cols-3 md:grid-cols-3` and check hero left column width at `lg`.

### 15. `SkillsSection` grid missing `sm:`
- **File:** `src/components/sections/SkillsSection.jsx:25,39`
- **Current:** `grid gap-4 md:grid-cols-2 lg:grid-cols-3`
- **Problem:** Same skip-`sm:` pattern as Projects/QAProcess.
- **Fix:** `grid gap-4 sm:grid-cols-2 lg:grid-cols-3`.

### 16. `DeliverablesSection` items may truncate poorly
- **File:** `src/components/sections/DeliverablesSection.jsx:16`
- **Current:** `flex items-center gap-3 rounded-2xl border ... p-4` with `<span>{item}</span>`
- **Problem:** Long deliverable strings can overflow at narrow widths.
- **Fix:** Add `min-w-0` to the flex parent, `truncate` on the span, or `break-words`.

### 17. `AutomationSection` grid drops columns only at `lg`
- **File:** `src/components/sections/AutomationSection.jsx:9`
- **Current:** `grid gap-8 lg:grid-cols-[0.9fr_1.1fr]`
- **Problem:** Single column until 1024px. On 768–1023px tablets the empty space either side of the code block is wasted.
- **Fix:** Consider `md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]` OR keep as-is if the vertical stack reads better (design call — flag for review).

---

## LOW SEVERITY

### 18. `Footer` padding fixed
- **File:** `src/components/layout/Footer.jsx:5`
- **Current:** `border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500`
- **Fix:** `px-6 py-6 md:py-8`.

### 19. `IconCard` padding not scaling
- **File:** `src/components/common/IconCard.jsx:3`
- **Current:** `rounded-3xl border ... p-6 transition ...`
- **Fix:** `p-4 sm:p-6`.

### 20. `ProjectCard` padding + heading size on mobile
- **File:** `src/components/common/ProjectCard.jsx:6,11`
- **Current:** Card `p-6`, title `text-2xl font-bold text-white`.
- **Fix:** Card `p-4 sm:p-6`, title `text-xl sm:text-2xl`.

### 21. Navbar logo could scale down
- **File:** `src/components/layout/Navbar.jsx:11`
- **Current:** `text-lg font-bold tracking-tight text-white`
- **Fix (optional):** `text-base sm:text-lg` — only worth doing if the logo string is long.

---

## FIX ORDER

1. Doc written (this file).
2. Global `Section` + `Container` padding — one change, biggest visual impact everywhere.
3. Hero section (highest complexity, most visible above the fold).
4. Contact section (buttons + padding).
5. Card padding pass (Experience, IconCard, ProjectCard).
6. Grid pass (Projects, QAProcess, Skills — add `sm:` breakpoint).
7. Automation code block.
8. Heading scaling (SectionTitle, ContactSection H2, Hero H1).
9. Footer.
