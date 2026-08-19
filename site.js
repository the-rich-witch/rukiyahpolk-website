/* Add live booking URLs before publishing. The paid 1:1 offer remains the primary CTA. */
const INTRO_CALL_URL = '#';      // free Intro Call scheduler
const CONSULTATION_URL = '#';    // paid one-on-one Consultation booking/checkout

// Only replace an existing page anchor when a real external URL has been added.
// Until then, buttons fall back to scrolling to the #work-with-me section on the page.
if (INTRO_CALL_URL && INTRO_CALL_URL !== '#') {
  document.querySelectorAll('.booking-link').forEach((link) => { link.href = INTRO_CALL_URL; });
}
if (CONSULTATION_URL && CONSULTATION_URL !== '#') {
  document.querySelectorAll('.consultation-link').forEach((link) => { link.href = CONSULTATION_URL; });
}

const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}
