// collapse burger menu panel in mobile view 
const $ = (elem) => document.querySelector(elem);
const $$ = (elem) => document.querySelectorAll(elem);
const mediaQueryMobile = 600;

$('#year').textContent = new Date().getFullYear();

const myObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const contentWidth = entry.contentRect.width;
    if (contentWidth > mediaQueryMobile && $('.burger-checkbox-class').checked) {
      $('.burger-checkbox-class').checked = false;
    }
  });
});

myObserver.observe($('body'));

$$('.theme').forEach(item => {
  item.addEventListener('click', (e) => {
    const theme = $('html').dataset.theme === 'dark' ? 'light' : 'dark';
    $('html').dataset.theme = theme;
    invertEmojiColour(theme);
    updateRecaptcha(theme);
    setVarToLocalStorage('theme', theme);
  });
});

function setVarToLocalStorage(varName, value) {
  window.localStorage.setItem(varName, value);
}

setVarToLocalStorage('theme', 'dark');

// change recaptcha to dark by setting the data-theme attribute
function updateRecaptcha(theme) {
  const recaptcha = document.querySelector('.g-recaptcha');
  if (recaptcha) {
    recaptcha.dataset.theme = theme;
    recaptcha.setAttribute('data-theme', theme);
  }
}

updateRecaptcha('dark');

// initialise recaptcha on body onload event
function recaptchaCallback(theme) {
  grecaptcha.render('recaptcha-element', {
    'sitekey' : '6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9',
    'theme' : theme
  });
};

function invertEmojiColour(customTheme) {
  $$('label[for*="theme"] > .emoji').forEach(item => {
    if (customTheme === 'light') {
      item.classList.add('light');
    } else {
      item.classList.remove('light');
    }
  });
}

$('.more').addEventListener('click', (e) => {
  $$('p[data-visible]').forEach(item => {
    const state = item.dataset.visible == 'true' ? 'false' : 'true';
    item.dataset.visible = state;
  });
});
