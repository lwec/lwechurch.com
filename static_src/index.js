const Rellax = require('rellax');

require('./styles/lw14-base.less');

// Parallax effect
// eslint-disable-next-line no-new
new Rellax('.lw14-page-intro header', {
  speed: -2,
});

// Set up mobile nav toggle

document
  .querySelector('.lw14-nav__mobile-nav-toggle')
  .addEventListener('click', showMobileNav);
document
  .querySelector('.lw14-mobile-nav__close')
  .addEventListener('click', hideMobileNav);

function showMobileNav() {
  const mobileNavEl = document.querySelector('.lw14-mobile-nav');
  mobileNavEl.classList.add('lw14-mobile-nav--active');
}

function hideMobileNav() {
  const mobileNavEl = document.querySelector('.lw14-mobile-nav');
  mobileNavEl.classList.remove('lw14-mobile-nav--active');
}

setTimeout(() => {
  document.querySelector('.lw14-mobile-nav').style.right = 0;
}, 500);
