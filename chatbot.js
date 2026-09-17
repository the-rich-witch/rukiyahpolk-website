(function(){
  if (document.getElementById('rp-chatbot')) return;

  const inNote = /\/notes\//.test(window.location.pathname);
  const local = (path) => (inNote ? '../' : '') + path;

  const routes = {
    home: local('index.html'),
    about: local('about.html'),
    notes: local('notes.html'),
    contact: local('contact.html'),
    attention: local('21-days.html'),
    work: local('index.html#work'),
    mbs: 'https://makemymoneyplan.com',
    nas: 'https://nowalternativesoulutions.org',
    witch: 'https://rukiyahtherichwitch.com'
  };

  const root = document.createElement('div');
  root.id = 'rp-chatbot';
  root.className = 'rp-chatbot';
  root.innerHTML = `
    <button class="rp-chat-launch" type="button" aria-expanded="false" aria-controls="rp-chat-panel">
      <span aria-hidden="true">?</span><span class="rp-chat-launch-label">Ask the site</span>
    </button>
    <section class="rp-chat-panel" id="rp-chat-panel" aria-label="Website guide" hidden>
      <header class="rp-chat-header">
        <div>
          <strong>Ask the site</strong>
          <span>I’m the site guide — not Rukiyah.</span>
        </div>
        <button class="rp-chat-close" type="button" aria-label="Close website guide">×</button>
      </header>
      <div class="rp-chat-log" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="rp-chat-quick" aria-label="Suggested questions"></div>
      <form class="rp-chat-form">
        <label class="sr-only" for="rp-chat-input">Ask about Rukiyah or this website</label>
        <input id="rp-chat-input" type="text" autocomplete="off" maxlength="180" placeholder="Ask me something…">
        <button type="submit">Send</button>
      </form>
      <p class="rp-chat-privacy">Nothing you type here is sent anywhere. This guide runs in your browser.</p>
    </section>`;
  document.body.appendChild(root);

  const launch = root.querySelector('.rp-chat-launch');
  const panel = root.querySelector('.rp-chat-panel');
  const close = root.querySelector('.rp-chat-close');
  const log = root.querySelector('.rp-chat-log');
  const quick = root.querySelector('.rp-chat-quick');
  const form = root.querySelector('.rp-chat-form');
  const input = root.querySelector('#rp-chat-input');

  const suggestions = [
    ['Who is Rukiyah?', 'about'],
    ['Money work', 'money'],
    ['Community work', 'community'],
    ['Magick & rootwork', 'magick'],
    ['Read Notes', 'notes'],
    ['21 Days', 'attention'],
    ['Contact', 'contact']
  ];

  function addMessage(text, who, links){
    const wrap = document.createElement('div');
    wrap.className = 'rp-chat-msg ' + (who === 'user' ? 'is-user' : 'is-bot');
    const bubble = document.createElement('div');
    bubble.className = 'rp-chat-bubble';
    bubble.textContent = text;
    wrap.appendChild(bubble);
    if (links && links.length){
      const actions = document.createElement('div');
      actions.className = 'rp-chat-actions';
      links.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        if (/^https?:/.test(item.href)){ a.target='_blank'; a.rel='noopener'; }
        actions.appendChild(a);
      });
      wrap.appendChild(actions);
    }
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
  }

  function showSuggestions(){
    quick.innerHTML='';
    suggestions.forEach(([label,key]) => {
      const b=document.createElement('button');
      b.type='button'; b.textContent=label; b.dataset.ask=key;
      quick.appendChild(b);
    });
  }

  function answerFor(raw){
    const q = raw.toLowerCase().trim();

    if (/\b(money|credit|budget|saving|save|debt|financial|mbs)\b/.test(q)) {
      return {
        text: 'Money Behavior Strategy™ focuses on the gap between knowing what to do with money and actually doing it in real life. If you’re looking for sessions, money education, or Rukiyah’s money work, start there.',
        links: [{label:'Visit Money Behavior Strategy',href:routes.mbs}]
      };
    }
    if (/\b(community|nonprofit|nas|period|hygiene|donat|volunteer|kidz|kern)\b/.test(q)) {
      return {
        text: 'Now Alternative Soulutions is Rukiyah’s nonprofit work. It focuses on dignity, access, and practical community support, including period care, hygiene, family support, and financial empowerment.',
        links: [{label:'Visit Now Alternative Soulutions',href:routes.nas}]
      };
    }
    if (/\b(magick|magic|rootwork|witch|cartomancy|cards|herbal|spiritual)\b/.test(q)) {
      return {
        text: 'Rukiyah The Rich Witch is her separate magickal practice, including rootwork, cartomancy with playing cards, and herbalism. It is not presented as the same thing as her money or nonprofit work.',
        links: [{label:'Visit The Rich Witch',href:routes.witch}]
      };
    }
    if (/\b(21[\s-]?days?|paying attention|daily practice|daily emails?|email practice|sign[\s-]?up|subscribe|newsletter|join|start paying attention)\b/.test(q)) {
      return {
        text: '21 Days of Paying Attention is a free daily email practice with Rukiyah: one small thing to notice, question, or try each day.',
        links: [{label:'Start 21 Days of Paying Attention',href:routes.attention}]
      };
    }
    if (/\b(note|notes|article|read|writing|blog|relationship|behavior|thinking)\b/.test(q)) {
      return {
        text: 'Notes From Rukiyah is where her longer thinking lives — money, behavior, community, relationships, parenting, spirituality, magick, and whatever else she’s paying attention to.',
        links: [{label:'Read Notes',href:routes.notes}]
      };
    }
    if (/\b(contact|email|speaking|speaker|podcast|interview|media|workshop|panel|partnership|book)\b/.test(q)) {
      return {
        text: 'For speaking, workshops, panels, interviews, media, and partnerships, use the contact page. If you want one of Rukiyah’s specific services, I can point you to the right body of work instead.',
        links: [{label:'Contact Rukiyah',href:routes.contact}]
      };
    }
    if (/\b(training|credentials?|certif|education|qualified|qualifications?)\b/.test(q)) {
      return {
        text: 'Rukiyah’s training includes financial education and health counseling, trauma-informed money work, credit, hypnotherapy, NLP, rootwork, herbalism, and other practitioner training. The About page has the working list.',
        links: [{label:'See education & training',href:routes.about}]
      };
    }
    if (/\b(what do you do|what does she do|services|help me|work with)\b/.test(q)) {
      return {
        text: 'There are three different places to work with or support Rukiyah’s work: Money Behavior Strategy™, Now Alternative Soulutions, and Rukiyah The Rich Witch. Tell me whether you mean money, community work, or magick and I’ll point you there.',
        links: [{label:'See all three',href:routes.work}]
      };
    }
    if (/^(hi|hello|hey|hiya|yo)\b/.test(q)) {
      return {text:'Hey 👋 I can help you find your way around Rukiyah’s site. Ask about her work, Notes, background, speaking, money work, community work, or magick.'};
    }
    if (/\b(who|about|rukiyah|your story|her story)\b/.test(q)) {
      return {
        text: 'Rukiyah Polk is a writer, educator, founder, and practitioner whose work crosses money behavior, community care, relationships, critical thinking, spirituality, and magick. Her three main bodies of work stay distinct, even though they share the same founder.',
        links: [{label:'About Rukiyah',href:routes.about},{label:'See her work',href:routes.work}]
      };
    }
    return {
      text: 'I may not have that answer in this little site guide. Try asking about Rukiyah, money work, community work, magick, Notes, speaking, or contact — or use the contact page for something more specific.',
      links: [{label:'Contact Rukiyah',href:routes.contact}]
    };
  }

  function ask(text){
    const cleaned=(text||'').trim();
    if (!cleaned) return;
    addMessage(cleaned,'user');
    const a=answerFor(cleaned);
    window.setTimeout(()=>addMessage(a.text,'bot',a.links),120);
  }

  function openPanel(){
    panel.hidden=false;
    launch.setAttribute('aria-expanded','true');
    if (!log.children.length){
      addMessage('Hey 👋 I can help you find what you’re looking for without making you dig through the whole site. What are you here for?','bot');
      showSuggestions();
    }
    window.setTimeout(()=>input.focus(),0);
  }
  function closePanel(){
    panel.hidden=true;
    launch.setAttribute('aria-expanded','false');
    launch.focus();
  }

  launch.addEventListener('click',()=> panel.hidden ? openPanel() : closePanel());
  close.addEventListener('click',closePanel);
  quick.addEventListener('click',(e)=>{
    const b=e.target.closest('button[data-ask]'); if(!b)return;
    const map={about:'Who is Rukiyah?',money:'Tell me about the money work',community:'Tell me about the community work',magick:'Tell me about magick and rootwork',notes:'Where can I read Notes?',contact:'How do I contact Rukiyah?',attention:'Tell me about 21 Days of Paying Attention'};
    ask(map[b.dataset.ask]||b.textContent);
  });
  form.addEventListener('submit',(e)=>{e.preventDefault(); const val=input.value; input.value=''; ask(val);});
  document.addEventListener('keydown',(e)=>{if(e.key==='Escape' && !panel.hidden) closePanel();});
})();
