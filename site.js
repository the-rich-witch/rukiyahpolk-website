/* Live booking URLs. HTML also contains the Square URL as a no-JavaScript fallback. */
const SESSION_URL = 'https://book.squareup.com/appointments/quqavoq6ke15pq/location/LB268NWTFYPY7/services/C2CN5B4JAG7CDQW4VJFT6VXZ'; // Money Behavior Strategy™ Session Square booking
const FOUNDING_URL = 'mailto:rukiyah@rukiyahpolk.com?subject=Founding%20Client%20Experience'; // Replace with Square Founding Client checkout when ready

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


/* Quick-answer chat: service information only, with a clear human handoff. */
(() => {
  const EMAIL = 'mailto:rukiyah@rukiyahpolk.com?subject=Money%20Behavior%20Strategy%20Support';
  const workLink = 'work-with-me.html';
  const chat = document.createElement('div');
  chat.className = 'mbs-chat';
  chat.innerHTML = `
    <button class="mbs-chat-launcher" type="button" aria-expanded="false" aria-controls="mbs-chat-panel">Questions?</button>
    <section class="mbs-chat-panel" id="mbs-chat-panel" aria-label="Money Behavior Strategy quick-answer chat" hidden>
      <div class="mbs-chat-head">
        <div><strong>Quick Answers</strong><span>Money Behavior Strategy™</span></div>
        <button class="mbs-chat-close" type="button" aria-label="Close chat">×</button>
      </div>
      <div class="mbs-chat-body" aria-live="polite">
        <div class="mbs-chat-message bot">Hi. I can answer common questions about services, booking, payment, and what to expect. I do not give personal money advice.</div>
        <div class="mbs-chat-options">
          <button type="button" data-chat="compare">Which service fits me?</button>
          <button type="button" data-chat="session">What happens in the $247 session?</button>
          <button type="button" data-chat="founding">What is the 4-week experience?</button>
          <button type="button" data-chat="afterpay">What happens after I pay?</button>
          <button type="button" data-chat="binder">What is the Mini Money Binder?</button>
          <button type="button" data-chat="human">I need a real person</button>
        </div>
      </div>
      <div class="mbs-chat-foot"><a href="${EMAIL}">Email a real person →</a></div>
    </section>`;
  document.body.appendChild(chat);

  const launcher = chat.querySelector('.mbs-chat-launcher');
  const panel = chat.querySelector('.mbs-chat-panel');
  const close = chat.querySelector('.mbs-chat-close');
  const body = chat.querySelector('.mbs-chat-body');

  const answers = {
    compare: `If you have one clear money problem you want help with, start with the $247 Money Behavior Strategy™ Session. If the same money patterns keep showing up and you want four weeks to test changes in real life, look at the Founding Client Experience. <a href="${workLink}#compare">Compare both options →</a>`,
    session: `The $247 session is one focused 60-minute private session. Bring one money problem. You and Rukiyah look at what happened, ask why it made sense at the time, decide what to try differently, and build a Money Action Plan™. <a href="${SESSION_URL}">Book the session →</a>`,
    founding: `The Founding Client Experience is four weeks of private, virtual work for repeating money patterns. You move through SEE → ASK WHY → TRY → MAKE A PLAN and build My Money Playbook™. The Founding Client price is $597. <a href="${workLink}#founding">See the 4-week experience →</a>`,
    afterpay: `After you pay, you receive confirmation and the next steps for your offer. For the Founding Client Experience, the website also has a welcome flow with your Starting Point and what happens before Week 1. If anything is unclear, use the human-support link below.`,
    binder: `The Mini Money Binder is included with the four-week Founding Client Experience. It holds your observations, practice pages, 70/10/10/10 work, and My Money Playbook™. It is part of the method, not a random bonus.`,
    human: `Absolutely. This chat is only for quick service questions. <a href="${EMAIL}">Email the Money Behavior Strategy™ support team →</a>`
  };

  function openChat(){ panel.hidden = false; launcher.setAttribute('aria-expanded','true'); }
  function closeChat(){ panel.hidden = true; launcher.setAttribute('aria-expanded','false'); }
  launcher.addEventListener('click', () => panel.hidden ? openChat() : closeChat());
  close.addEventListener('click', closeChat);
  document.querySelectorAll('.support-chat-open').forEach((btn)=>btn.addEventListener('click', openChat));
  chat.querySelectorAll('[data-chat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.chat;
      const user = document.createElement('div');
      user.className = 'mbs-chat-message user';
      user.textContent = btn.textContent;
      const bot = document.createElement('div');
      bot.className = 'mbs-chat-message bot';
      bot.innerHTML = answers[key] || `I don't have that answer here. <a href="${EMAIL}">Email the support team →</a>`;
      body.append(user, bot);
      body.scrollTop = body.scrollHeight;
    });
  });
})();
