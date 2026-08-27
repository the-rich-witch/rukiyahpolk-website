# Money Behavior Strategy™ Website — Current Working Build

This folder contains the current static website for **rukiyahpolk.com**. It uses plain HTML, CSS, and JavaScript and does not require a build step.

## Current status

This build includes the Formspree-connected Founding Client enrollment flow. The next deployment test should include one real enrollment-form submission to confirm that Formspree delivers the request correctly and that the on-page confirmation appears as expected.

Do not rely on older website handoff notes that mention a Free Intro Call, Money Habit Coach, unpublished Founding Client pricing, or an unresolved Founding Client URL. Those decisions have been superseded.

## Current offers

### Money Behavior Strategy™ Session
- **$247**
- One focused **60-minute** private session
- Problem-focused: bring one specific money situation
- Client leaves with a **Money Action Plan™**
- Square booking link is live and should remain intact

### Founding Client Experience
- **$597**
- **8 Founding Client spots**
- Four-week, pattern-focused private experience
- Four **60-minute** Founding Client Weekly Sessions
- Mini Money Binder included
- Client builds **My Money Playbook™**
- Current public framework language: **See It → Ask Why → Try Something New → Make a Plan**
- Pilot launch: **September 22, 2026**
- Enrollment closes **September 20, 2026 or when all 8 spots are filled**

For this first eight-person pilot, enrollment is intentionally handled through a short website form followed by personal setup by Rukiyah. Do not replace this with an unverified Square public-package checkout link.

## Founding Client enrollment flow

The current flow is:

**Website / chatbot → Founding Client enrollment form → confirmation → Rukiyah personally sets up the client → $597 payment instructions → four-session Square package activated → scheduling instructions → four weekly sessions.**

### Enrollment page
`founding-client-enrollment.html`

The form collects only:
- First and last name
- Email address
- Phone number
- Preferred contact method: email or text
- Required acknowledgment that submission does not secure the spot until payment is completed

The form posts to Formspree and uses JavaScript to keep the visitor on rukiyahpolk.com. A successful submission hides the form and displays the **“You’re Almost In.”** confirmation state.

### Formspree
The current form action is configured in `founding-client-enrollment.html`.

Do not change the Formspree endpoint unless Rukiyah explicitly requests it. After deployment, submit one real test enrollment and verify that:
1. The submission arrives at the intended inbox.
2. All four requested fields are present.
3. The acknowledgment is included.
4. The visitor sees the on-site success message.
5. The failure state provides the direct email fallback if submission fails.

### Post-payment welcome page
`founding-client-welcome.html`

This page remains part of the post-payment/onboarding stage. It is not the initial enrollment form.

## Chatbot / Quick Answers

The sitewide Quick Answers tool lives in `site.js`.

Its job is to reduce uncertainty around services, booking, payment, what to expect, and how to reach a real person. It must not pretend to be Rukiyah or a human and must not provide personalized money advice.

### Founding Client chatbot rule
When a visitor says they are ready to join, the chatbot should route directly to:

`founding-client-enrollment.html`

Do not send Founding Client prospects to an obsolete Square Collect Payment link or the experimental Sell Item link.

The chatbot should not promise an untested Square package-redemption process. Current wording should simply explain that Rukiyah personally activates the four-session package and sends scheduling instructions after enrollment and payment.

## Human support

The Work With Me page includes a real photograph of a member of the Money Behavior Strategy™ support team near the support section. The person shown is **not Rukiyah**. Do not relabel the image or imply otherwise.

The support photo is intentional: it demonstrates that a real person is available behind the website/chatbot rather than using generic stock customer-service imagery.

## Current naming and language

Use these consistently:
- **Rukiyah Polk — Money Behavior Strategist**
- **Money Behavior Strategy™**
- **Money Action Plan™** for the $247 session
- **My Money Playbook™** for the four-week Founding Client Experience
- **See It → Ask Why → Try Something New → Make a Plan** for public-facing framework language
- **LIVE / SAVE / GROW / GIVE** for 70/10/10/10

Use plain **money** language whenever possible. Keep client-facing copy simple, human, direct, and roughly around a 5th–6th grade reading level. Do not reintroduce a Free Intro Call.

## Key website files

- `index.html` — Homepage
- `work-with-me.html` — Service comparison, $247 offer, Founding Client offer, support, FAQ and CTAs
- `founding-client-enrollment.html` — Short Formspree enrollment form and confirmation state
- `founding-client-welcome.html` — Post-payment welcome/onboarding page
- `about.html` — About / credibility
- `resources.html` — Resources and tools
- `money-pattern-quiz.html` — Money Pattern Quiz
- `money-health-check.html` — Money Health Check
- `site.js` — Live $247 URL, Founding Client enrollment route, mobile nav and Quick Answers chatbot
- `styles.css` — Sitewide styles
- `assets/` — Images and downloadable assets

## Cashvertising operating principle

The website has been refined using the completed Cashvertising Online study. Do not add techniques just because they appear in the book.

Use the operating sequence:

**Learn → Audit → Form a hypothesis → Establish a control → Test → Measure → Keep the winner → Test again.**

Priorities are clarity, credibility, relevant emotion, ease, reassurance, and an obvious next step. Do not manufacture testimonials, scarcity, guarantees, urgency, or outcomes.

## Deployment

The site is plain static HTML/CSS/JS and is deployed through the existing GitHub/Cloudflare workflow. Preserve folder structure when uploading changes.

Before treating a new ZIP as the master build, verify:
- local links and assets resolve
- `site.js` has no syntax errors
- $247 booking still points to the existing Square booking URL
- Founding Client CTAs point to `founding-client-enrollment.html`
- Formspree submission works in production
- chatbot routes and human-support links work on desktop and mobile

## Immediate next step

Deploy this build and make **one test Founding Client enrollment submission**. If the request arrives correctly and the visitor receives the correct on-site confirmation, this build can become the new working master for the enrollment flow.


## August 25, 2026 — Resources + site navigator
- Featured **5 Steps to Winning Financially** on the Resources page with the actual workbook cover and Etsy CTA.
- Upgraded the sitewide quick-answer chatbot into a lightweight **“What are you looking for?”** navigator with keyword routing for the workbook, free resources, quizzes, articles, services, and support.
- No separate site search engine was added; the chatbot handles lightweight find/navigation instead.


## Founding Client payment flow — current pilot process
For the first 8 Founding Clients, account/package setup in Square is manual. The website flow is: Get Help → Founding Client enrollment form → Rukiyah personally sets up the client in Square → client receives $597 payment instructions → spot is saved after payment → four-session package is activated → welcome/Starting Point steps are sent. Do not replace this with an untested direct package checkout flow.

## Homepage hero image — August 26, 2026
The homepage hero now uses `assets/hero-family-transformation.webp`. The image is intentionally a candid, lived-in family scene showing the desired after experience: everyday life, connection, and calm around money. Rukiyah appears shortly below the hero as the human guide. Do not replace this with generic cash/calculator imagery without explicit approval.
