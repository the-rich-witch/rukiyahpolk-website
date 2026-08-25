/* Live booking URLs. HTML also contains the Square URL as a no-JavaScript fallback. */
const SESSION_URL = 'https://book.squareup.com/appointments/quqavoq6ke15pq/location/LB268NWTFYPY7/services/C2CN5B4JAG7CDQW4VJFT6VXZ'; // Money Behavior Strategy™ Session Square booking
const FOUNDING_URL = 'founding-client-enrollment.html'; // Founding Client pilot enrollment form

// Only replace an existing page anchor when a real external URL has been added.
// Until then, buttons fall back to scrolling to the #work-with-me section on the page.
if (SESSION_URL && SESSION_URL !== '#') {
  document.querySelectorAll('.session-booking-link').forEach((link) => { link.href = SESSION_URL; });
}
if (FOUNDING_URL && FOUNDING_URL !== '#') {
  document.querySelectorAll('.founding-interest-link').forEach((link) => { link.href = FOUNDING_URL; });
}

const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}


/* Quick-answer assistant: service information only, with a clear handoff to Rukiyah. */
(() => {
  const EMAIL = 'mailto:rukiyah@rukiyahpolk.com?subject=Money%20Behavior%20Strategy%20Support';
  const workLink = 'work-with-me.html';
  const assistant = document.createElement('div');
  assistant.className = 'mbs-chat';
  assistant.innerHTML = `
    <button class="mbs-chat-launcher" type="button" aria-expanded="false" aria-controls="mbs-chat-panel">Questions?</button>
    <section class="mbs-chat-panel" id="mbs-chat-panel" aria-label="Money Behavior Strategy quick answers" hidden>
      <div class="mbs-chat-head">
        <div class="mbs-chat-avatar mbs-chat-badge" aria-hidden="true">MBS</div>
        <div class="mbs-chat-title"><strong>What can I help you with?</strong><span>Quick answers · Money Behavior Strategy™</span></div>
        <button class="mbs-chat-close" type="button" aria-label="Close quick answers">×</button>
      </div>
      <div class="mbs-chat-body" aria-live="polite">
        <div class="mbs-chat-message bot">Hi. I’m the Money Behavior Strategy™ quick-answer tool. I can answer common questions about services, booking, payment, and what to expect. I’m not Rukiyah or a human, and I don’t give personal money advice.</div>
        <div class="mbs-chat-options mbs-chat-intent-options">
          <button type="button" data-chat="ready-session">I’m ready for the $247 session</button>
          <button type="button" data-chat="ready-founding">I’m ready for the Founding Client Pilot</button>
        </div>
        <div class="mbs-chat-options">
          <button type="button" data-chat="compare">Which option fits me?</button>
          <button type="button" data-chat="session">What happens in the $247 session?</button>
          <button type="button" data-chat="value">What exactly am I paying $247 for?</button>
          <button type="button" data-chat="founding">What is the Founding Client Pilot?</button>
          <button type="button" data-chat="pilot">When does the pilot start?</button>
          <button type="button" data-chat="ready">Do I need to have my money together first?</button>
          <button type="button" data-chat="control">Will Rukiyah tell me what I can and can't buy?</button>
          <button type="button" data-chat="avoid">What if I keep avoiding looking at my money?</button>
          <button type="button" data-chat="afterpay">What happens after I pay?</button>
          <button type="button" data-chat="weekly">How do I book the 4 weekly sessions?</button>
          <button type="button" data-chat="binder">What is the Mini Money Binder?</button>
          <button type="button" data-chat="before">Can I ask a question before I book?</button>
          <button type="button" data-chat="human">Talk to the Support Team</button>
        </div>
      </div>
      <div class="mbs-chat-foot"><a href="${EMAIL}">Contact the support team →</a></div>
    </section>`;
  document.body.appendChild(assistant);

  const launcher = assistant.querySelector('.mbs-chat-launcher');
  const panel = assistant.querySelector('.mbs-chat-panel');
  const close = assistant.querySelector('.mbs-chat-close');
  const body = assistant.querySelector('.mbs-chat-body');

  const answers = {
    'ready-session': `<strong>You can book now.</strong> The Money Behavior Strategy™ Session is $247 for one focused 60-minute session. Payment is required when you book. <a href="${SESSION_URL}">Choose your time and book the $247 session →</a>`,
    'ready-founding': `<strong>You’re ready to become a Founding Client.</strong> The Founding Client Experience is $597 and limited to 8 Founding Clients. Start with the short enrollment form. Rukiyah personally sets up each Founding Client account, then you’ll receive payment instructions and next steps. <a href="${FOUNDING_URL}">Start my enrollment →</a>`,
    compare: `If you have <strong>one specific money problem you want help with now</strong>, the $247 Money Behavior Strategy™ Session is the problem-focused option: one 60-minute session. If you are dealing with <strong>deeper or repeating money patterns</strong>, the $597 Founding Client Pilot is the pattern-focused option: four weeks, four 60-minute sessions, a Mini Money Binder, and My Money Playbook™. This pilot is limited to 8 clients and officially launches September 22, 2026. Each Founding Client completes four private one-on-one sessions on their own schedule. <a href="${workLink}#compare">Compare both options →</a>`,
    session: `The $247 Money Behavior Strategy™ Session is one focused 60-minute private session. Bring one money problem. You and Rukiyah look at what happened, ask why it made sense at the time, decide what to try differently, and build a Money Action Plan™ for what happens next. <a href="${SESSION_URL}">Book the session →</a>`,
    value: `You’re paying for a focused 60-minute working session with Rukiyah. You bring one real money problem, work through it using SEE → ASK WHY → TRY → MAKE A PLAN, and leave with a Money Action Plan™ you can use after the call. <a href="${SESSION_URL}">See available times →</a>`,
    founding: `The Founding Client Pilot is a $597 four-week private, one-on-one guided experience for deeper or repeating money patterns. It’s limited to 8 Founding Clients and officially launches September 22, 2026, on the autumn equinox. This is not group coaching or a cohort. Each client completes four private 60-minute Founding Client Weekly Sessions on their own schedule and receives a Mini Money Binder. You move through SEE → ASK WHY → TRY → MAKE A PLAN and build My Money Playbook™ as you go. <a href="${workLink}#founding">See the pilot →</a>`,
    pilot: `The Autumn Equinox Founding Client Pilot officially launches September 22, 2026. Enrollment closes September 20 or when all 8 Founding Client spots are filled. Each Founding Client begins their own four-week experience with their first private session and follows their individual schedule; the Square package remains valid for two months only to allow room for scheduling or rescheduling. <a href="${workLink}#founding">See the pilot details →</a>`,
    ready: `No. You don’t need a perfect budget, a cleaned-up bank account, or everything figured out first. Bring what’s actually happening. That’s what you and Rukiyah work with. <a href="${workLink}#compare">See which option fits →</a>`,
    control: `No. Rukiyah isn’t there to police your spending or hand you a list of things you’re allowed to buy. The work is about seeing what’s happening, understanding your choices, and building a plan you can actually use in your real life.`,
    avoid: `If you open the app, see the number, want to close it again, or keep telling yourself you’ll deal with it later, you don’t have to clean that up before getting help. That’s useful information about what’s happening right now. <a href="money-health-check.html">Start with the Money Health Check →</a>`,
    afterpay: `After you pay for the $247 session, Square sends your booking confirmation and appointment details. After Founding Client enrollment, Rukiyah will personally set up your Founding Client package and send your payment and next-step instructions. Once your package is active, you’ll receive instructions for scheduling your four weekly sessions.`,
    weekly: `The Founding Client Pilot includes four 60-minute weekly sessions. After your enrollment and payment are complete, Rukiyah will activate your four-session Founding Client package and send you instructions for scheduling your sessions. The package is set to expire after two months so there is room for scheduling and rescheduling.`,
    binder: `The Mini Money Binder is included with the four-week Founding Client Pilot. You use it for observations, practice pages, 70/10/10/10 work, and My Money Playbook™. It’s a working tool you use throughout the experience.`,
    before: `Yes. If you understand the $247 session and are ready, you can book it without an extra call. If you are ready for the Founding Client Experience, <a href="${FOUNDING_URL}">start the short enrollment form →</a>. For any other question first, <a href="${EMAIL}">contact the support team →</a>`,
    human: `Need more help? Contact the Money Behavior Strategy support team. This quick-answer tool is automated, so a real person will pick up from here. <a href="${EMAIL}">Contact the support team →</a>`
  };

  function openChat(){ panel.hidden = false; launcher.setAttribute('aria-expanded','true'); }
  function closeChat(){ panel.hidden = true; launcher.setAttribute('aria-expanded','false'); }
  launcher.addEventListener('click', () => panel.hidden ? openChat() : closeChat());
  close.addEventListener('click', closeChat);
  document.querySelectorAll('.support-chat-open').forEach((btn)=>btn.addEventListener('click', openChat));
  assistant.querySelectorAll('[data-chat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.chat;
      const user = document.createElement('div');
      user.className = 'mbs-chat-message user';
      user.textContent = btn.textContent;
      const bot = document.createElement('div');
      bot.className = 'mbs-chat-message bot';
      bot.innerHTML = answers[key] || `I don’t have that answer here. <a href="${EMAIL}">Contact the support team →</a>`;
      body.append(user, bot);
      body.scrollTop = body.scrollHeight;
    });
  });
})();
