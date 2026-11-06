let pending = [...document.querySelectorAll('.reveal')];
const reveal = () => {
  const limit = innerHeight * 0.92;
  pending = pending.filter(el => el.getBoundingClientRect().top < limit ? (el.classList.add('in'), false) : true);
  if (!pending.length) removeEventListener('scroll', reveal);
};
addEventListener('scroll', reveal, { passive: true });
addEventListener('resize', reveal);
reveal();

const nav = document.getElementById('menu');
const toggle = nav.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));
