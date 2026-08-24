# Money Behavior Strategy™ — Deployment Package (Master)

This is the complete, production-ready static site for rukiyahpolk.com.
No build step required — it's plain HTML, CSS, and JavaScript.

---

## What's in this folder

- `index.html` — Homepage (hero, Bridge Moment picker, Stakes, Patterns,
  Framework, Success, Path/Work With Me 1:1)
- `about.html` — About page
- `resources.html` — Resources page (white paper, quizzes, dollar
  simulator, Daily Money Truth)
- `money-pattern-quiz.html` — Money Pattern Quiz
- `money-health-check.html` — Money Health Check
- `styles.css` — All site styling
- `site.js` — Button link logic + mobile nav
- `favicon.svg` — Browser tab icon
- `assets/` — All images and the white paper PDF

---

## Current offer sequence

**Founding 1:1 Clients first → refine Money Behavior Strategy™ → Cohort
later, as its own campaign.**

The Behavior Bridge Group cohort popup and top banner have been fully
removed from the evergreen site. "Work With Me 1:1" is the single primary
CTA sitewide, with free resources offered as the lower-commitment
fallback everywhere. When the cohort is ready to launch, build it as a
separate landing page/campaign rather than reintroducing it into this
site's core pages.

---

## Before you go live — 2 things to fix

### 1. Add your real booking links
Open `site.js` and replace the two placeholder URLs at the top:

```js
const CONSULTATION_URL = '#';    // paid one-on-one booking/checkout
```

Until these are real URLs, every button safely falls back to scrolling to
the "Work With Me 1:1" section on the homepage (`#work-with-me`) — nothing
is a dead link, it's just not final yet.

### 2. Check the white paper PDF is the version you want
`assets/the-behavior-bridge-white-paper.pdf` is included. Swap it out with
a newer version any time — just keep the filename the same, or update the
link in the HTML if you rename it.

---

## How to deploy with GitHub + Cloudflare Pages

### Step 1: Push this folder to GitHub
1. Create a new repository on GitHub (e.g., `rukiyahpolk-website`)
2. Upload every file in this folder to that repository, keeping the folder
   structure exactly as-is (the `assets/` folder must stay a subfolder)

### Step 2: Connect Cloudflare Pages
1. Log into Cloudflare → **Workers & Pages** → **Create application** →
   **Pages** → **Connect to Git**
2. Select the GitHub repository you just created
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank — there's nothing to build)*
   - **Build output directory:** `/` (the root)
4. Click **Save and Deploy**

Cloudflare will give you a temporary `.pages.dev` link immediately, and
redeploy automatically every time you push a change to GitHub.

### Step 3: Point your real domain at it
1. In the same Cloudflare Pages project, go to **Custom domains**
2. Add `rukiyahpolk.com` (and `www.rukiyahpolk.com` if you want both)
3. If your domain's DNS is already on Cloudflare, this connects in minutes
   with automatic SSL. If it's registered elsewhere, Cloudflare will walk
   you through updating your nameservers.

---

## Making future edits

Once this is connected, editing the live site is simple:
1. Edit the file directly on GitHub (or edit locally and push)
2. Cloudflare Pages automatically redeploys within about a minute
3. No hosting fees, no server to maintain

---

## Naming structure — FINAL, do not re-litigate

This site uses a deliberate three-level naming structure:

- **Money Behavior Strategy™** — the named method/framework
- **Money Habit Coach** — Rukiyah's simple, public-facing title (used in
  the homepage proof bar and the About page eyebrow)
- **Money Behavior Strategist** — secondary professional title, used only
  where deeper credentials/positioning make sense (currently: the About
  page credentials list)

**The rule:** never show all three to a visitor at once. "Money Habit
Coach" was a deliberate choice, not an oversight — it's immediately
understandable in plain English, which is exactly the standard the rest of
this site is held to. This has been raised and reconsidered more than
once; it is now final. Future copy passes should not remove or question it
without a direct, explicit decision from Rukiyah.

---

## Plain-language standard (for future edits)

Every round of copy edits on this site has followed one test:

> Would someone understand this immediately if nobody had ever taught them
> about money before?

Practical rules that came out of that:
- Say **money**, not *financial* or *finances* — except inside real
  credential titles (e.g., "Certified Financial Educator"), which keep
  their official wording
- Say **plan**, not *system*, wherever a plan is simpler
- Named terms — **Money Behavior Strategy™**, **The Behavior Bridge™**,
  and the four-step framework **Notice → Understand → Practice → Build**
  — stay locked and consistent. Don't rename them. Simplify the
  *explanations* around them instead, not the names themselves.

---

## A note on the Daily Money Truth and dollar simulator

Both live entirely in the visitor's browser — there's no database. The
Daily Money Truth picks based on each visitor's own device calendar date,
so it's consistent for one person throughout a day and changes for everyone
the next day, but there's no shared tracking of who's seen what.

If you ever want real backend features — a truly shared "quote of the day,"
saved quiz results, or working contact forms — Cloudflare Pages supports
**Cloudflare Functions**, which can add that without needing separate
hosting. Worth revisiting later, not needed to launch.

---

## Open item for review

The two quiz result pages (`money-pattern-quiz.html` and
`money-health-check.html`) still offer their own contextual next step
right after the result — free resources after the Pattern Quiz, and
"Book Your Consultation" after the Money Health Check — rather than
leading with "Work With Me 1:1" like every other page. This was a
deliberate choice (soft next-step right after a free tool, not a hard
pitch), but worth a second look to confirm it still fits the current offer
sequence.


## Cashvertising / friction-reduction update
- Added `work-with-me.html` as a guided decision page so ready visitors do not have to figure out which paid path fits.
- Current paths: Money Behavior Strategy™ Session; Founding Client Experience (8 spots); free resources for people who want to learn first.
- Homepage Work With Me section now self-sorts visitors by their actual need.
- Homepage money-pattern copy now shows recognizable behavior instead of leading with emotion labels.
- The Money Behavior Strategy™ Session Square URL is live in `site.js`. Add the Founding Client URL using `FOUNDING_URL` once enrollment is finalized.
- Founding Client pricing/session cadence remains intentionally unpublished on the live page until the program design is finalized.

## Founding Client checkout handoff — Aug 21, 2026

- Founding Client Experience price: $597 pay in full; payment plan: 2 payments of $325; planned standard price: $797; 8 Founding Client spots.
- Added `founding-client-welcome.html` as the post-purchase redirect page for Square.
- Square redirect URL after deployment: `https://rukiyahpolk.com/founding-client-welcome.html`
- The page is intentionally `noindex,nofollow` and is not linked in the public navigation.
- The Founding Client payment link is still not wired into `site.js`; add it to `FOUNDING_URL` after Square creates the final payment link.
