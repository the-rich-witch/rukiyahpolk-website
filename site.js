/* Live booking URLs. HTML also contains the Square URL as a no-JavaScript fallback. */
const SESSION_URL = 'https://book.squareup.com/appointments/quqavoq6ke15pq/location/LB268NWTFYPY7/services/C2CN5B4JAG7CDQW4VJFT6VXZ'; // Money Behavior Strategy™ Session Square booking
const EXPERIENCE_URL = 'founding-client-enrollment.html'; // Money Behavior Strategy™ 4-Week Experience enrollment form

// Only replace an existing page anchor when a real external URL has been added.
// Until then, buttons fall back to scrolling to the #work-with-me section on the page.
if (SESSION_URL && SESSION_URL !== '#') {
  document.querySelectorAll('.session-booking-link').forEach((link) => { link.href = SESSION_URL; });
}
if (EXPERIENCE_URL && EXPERIENCE_URL !== '#') {
  document.querySelectorAll('.founding-interest-link').forEach((link) => { link.href = EXPERIENCE_URL; });
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
    <button class="mbs-chat-launcher" type="button" aria-expanded="false" aria-controls="mbs-chat-panel">Find Something</button>
    <section class="mbs-chat-panel" id="mbs-chat-panel" aria-label="Money Behavior Strategy quick answers" hidden>
      <div class="mbs-chat-head">
        <div class="mbs-chat-avatar mbs-chat-badge" aria-hidden="true">MBS</div>
        <div class="mbs-chat-title"><strong>What are you looking for?</strong><span>Find a resource or get a quick answer</span></div>
        <button class="mbs-chat-close" type="button" aria-label="Close quick answers">×</button>
      </div>
      <div class="mbs-chat-body" aria-live="polite">
        <div class="mbs-chat-message bot"><strong>What can I help you find?</strong> Choose a question below or type what you’re looking for. I can explain the two ways to work with Rukiyah, help you choose where to start, or point you to free resources. I’m an automated site tool, not Rukiyah or a human, and I don’t give personal money advice.</div>
        <form class="mbs-chat-search" role="search">
          <input type="search" aria-label="What are you looking for?" placeholder="Try: workbook, budget, quiz…">
          <button type="submit">Find</button>
        </form>
        <p class="mbs-chat-search-hint">Type a word or choose a shortcut below.</p>
        <div class="mbs-chat-options">
          <button type="button" data-chat="workbook">Find the 5 Steps workbook</button>
          <button type="button" data-chat="free">Show me free resources</button>
          <button type="button" data-chat="quiz">Help me find a quiz</button>
          <button type="button" data-chat="articles">Show me money articles</button>
        </div>
        <div class="mbs-chat-options mbs-chat-intent-options">
          <button type="button" data-chat="ready-session">I’m ready for the $247 session</button>
          <button type="button" data-chat="ready-experience">I’m ready for the Money Behavior Strategy™ 4-Week Experience</button>
        </div>
        <div class="mbs-chat-options">
          <button type="button" data-chat="starting-point">I’m not sure which help fits</button>
          <button type="button" data-chat="compare">Compare the paid options</button>
          <button type="button" data-chat="session">What happens in the $247 session?</button>
          <button type="button" data-chat="value">What do I leave the $247 session with?</button>
          <button type="button" data-chat="experience">What is the Money Behavior Strategy™ 4-Week Experience?</button>
          <button type="button" data-chat="experience-start">When does the 4-Week Experience begin?</button>
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
    workbook: `You can find <strong>5 Steps to Winning Financially</strong> on the Resources page. It’s a self-guided illustrated digital workbook. <a href="resources.html#workbook">See the workbook →</a>`,
    free: `Start on the Free Help page for the Money Check, Money Health Check, Behavior Bridge™ white paper, 70/10/10/10 tool, and Money Behavior Notes. <a href="resources.html">See free resources →</a>`,
    quiz: `If you want help seeing what keeps happening with your money, try the <a href="money-pattern-quiz.html">Money Check →</a>. If you want a quick check-in on where your money habits stand, try the <a href="money-health-check.html">Money Health Check →</a>. If you are trying to decide which service or free route fits, use <a href="find-my-starting-point.html">Find My Starting Point →</a>`,
    articles: `Money Behavior Notes has short, plain-language articles about spending, budgets, and getting back on track. <a href="notes.html">Read Money Behavior Notes →</a>`,
    'ready-session': `<strong>You can book now.</strong> The Money Behavior Strategy™ Session is $247 for one focused 60-minute session. Payment is required when you book. <a href="${SESSION_URL}">Choose your time and book the $247 session →</a>`,
    'ready-experience': `<strong>Introductory enrollment is open.</strong> Only 8 spots are available at $597 for the Money Behavior Strategy™ 4-Week Experience. Enrollment closes September 20 or when all 8 spots are filled. Start with the short enrollment form. After it is reviewed, Rukiyah will set up your client account and send your payment instructions and next steps. Your spot is saved after payment. <a href="${EXPERIENCE_URL}">Start my enrollment →</a>`,
    'starting-point': `If you are not sure which kind of help fits, use <strong>Find My Starting Point</strong>. Three short questions will point you toward the 1:1 session, the Money Behavior Strategy™ 4-Week Experience, or free help. <a href="find-my-starting-point.html">Find My Starting Point →</a>`,
    compare: `Have <strong>one focused money problem</strong> you want help working through? Start with the $247 Money Behavior Strategy™ Session. If <strong>the problem keeps coming back</strong> and you want time to practice a different way of handling it, the Money Behavior Strategy™ 4-Week Experience includes four private 60-minute sessions, a Mini Money Binder, and My Money Playbook™. Introductory enrollment is limited to 8 spots at $597. <a href="${workLink}#compare">Compare both options →</a>`,
    session: `The $247 Money Behavior Strategy™ Session is one focused 60-minute private session. Bring one money problem. You and Rukiyah look at what happened, ask why it made sense at the time, decide what to try differently, and build a Money Action Plan™ for what happens next. <a href="${SESSION_URL}">Book the session →</a>`,
    value: `You bring <strong>one focused money problem</strong>. During the 60-minute private session, you and Rukiyah use SEE → ASK WHY → TRY → MAKE A PLAN to work through what is happening. You leave with a Money Action Plan™ for what to do next. <a href="${SESSION_URL}">See available times →</a>`,
    experience: `The Money Behavior Strategy™ 4-Week Experience is private 1:1 help for a money problem that keeps coming back. You complete four 60-minute weekly sessions, move through SEE → ASK WHY → TRY → MAKE A PLAN, use your Mini Money Binder, and build My Money Playbook™ as you go. <strong>Introductory enrollment is limited to 8 spots at $597.</strong> Enrollment closes September 20 or when all 8 spots are filled. <a href="${workLink}#founding">See the 4-Week Experience →</a>`,
    'experience-start': `The Money Behavior Strategy™ 4-Week Experience opens September 22, 2026. <strong>Introductory enrollment closes September 20 or when all 8 spots at $597 are filled.</strong> Your four private sessions are scheduled individually, and the four-session package is valid for two months to allow room for scheduling or rescheduling. <a href="${workLink}#founding">See the 4-Week Experience details →</a>`,
    ready: `No. You don’t need a perfect budget, a cleaned-up bank account, or everything figured out first. Bring what’s actually happening. That’s what you and Rukiyah work with. <a href="${workLink}#compare">See which option fits →</a>`,
    control: `No. Rukiyah isn’t there to police your spending or hand you a list of things you’re allowed to buy. The work is about seeing what’s happening, understanding your choices, and building a plan you can actually use in your real life.`,
    avoid: `If you open the app, see the number, want to close it again, or keep telling yourself you’ll deal with it later, you don’t have to clean that up before getting help. That’s useful information about what’s happening right now. <a href="money-health-check.html">Start with the Money Health Check →</a>`,
    afterpay: `For the $247 session, payment is made when you book and Square sends your confirmation and appointment details. For the 4-Week Experience, you first submit the enrollment form. After it is reviewed, Rukiyah sets up your client account and sends payment instructions. Your spot is saved after payment. Once your package is active, you’ll receive instructions for scheduling your four weekly sessions.`,
    weekly: `The Money Behavior Strategy™ 4-Week Experience includes four 60-minute weekly sessions. After your enrollment and payment are complete, Rukiyah will activate your four-session package and send you instructions for scheduling your sessions. The package is set to expire after two months so there is room for scheduling and rescheduling.`,
    binder: `The Mini Money Binder is included with the Money Behavior Strategy™ 4-Week Experience. You use it for observations, practice pages, 70/10/10/10 work, and My Money Playbook™. It’s a working tool you use throughout the experience.`,
    before: `Yes. You do not need an intro call before booking. If the $247 session fits, you can book it directly. If you want the Money Behavior Strategy™ 4-Week Experience, <a href="${EXPERIENCE_URL}">start the short enrollment form →</a>. If you still have a question, <a href="${EMAIL}">contact the support team →</a>`,
    human: `Need more help? Contact the Money Behavior Strategy support team. This quick-answer tool is automated, so a real person will pick up from here. <a href="${EMAIL}">Contact the support team →</a>`
  };


  const searchForm = assistant.querySelector('.mbs-chat-search');
  const searchInput = searchForm ? searchForm.querySelector('input') : null;
  function searchAnswer(query){
    const q = (query || '').trim().toLowerCase();
    if(!q) return 'Type what you’re looking for, like “workbook,” “budget,” “quiz,” or “session.”';
    if(/workbook|5 steps|winning financially|etsy/.test(q)) return answers.workbook;
    if(/free|resource|white paper|behavior bridge|70\/10|tool/.test(q)) return answers.free;
    if(/quiz|pattern|health check|check/.test(q)) return answers.quiz;
    if(/article|note|budget|spending|save|saving|back on track/.test(q)) return answers.articles;
    if(/247|session|one problem|appointment|book/.test(q)) return answers.session;
    if(/four week|4 week|binder|playbook/.test(q)) return answers.experience;
    if(/starting point|where to start|which help|help me choose/.test(q)) return answers['starting-point'];
    if(/compare|which option|which service/.test(q)) return answers.compare;
    if(/pay|payment|afterpay|after pay/.test(q)) return answers.afterpay;
    if(/human|person|support|contact|email/.test(q)) return answers.human;
    return `I couldn’t match that to a page yet. Try “starting point,” “workbook,” “budget,” “quiz,” “session,” or “4-Week Experience.” Or <a href="${EMAIL}">contact the support team →</a>`;
  }
  if(searchForm){
    searchForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const query=searchInput.value;
      const user=document.createElement('div');
      user.className='mbs-chat-message user';
      user.textContent=query || 'Search';
      const bot=document.createElement('div');
      bot.className='mbs-chat-message bot';
      bot.innerHTML=searchAnswer(query);
      body.append(user,bot);
      body.scrollTop=body.scrollHeight;
      searchInput.value='';
    });
  }

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
