// collapse burger menu panel in mobile view 

const html = document.querySelector('html');
const body = document.querySelector('body');
const themeButtons = document.querySelectorAll('.theme');
const themeEmojis = document.querySelectorAll('label[for*="theme"] > .emoji');
const mediaQueryMobile = 600;
const burgerCheckBox = document.querySelector('.burger-checkbox-class');
const contactForm = document.querySelector('#contact-form');

const myObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    const contentWidth = entry.contentRect.width;
    if (contentWidth > mediaQueryMobile && burgerCheckBox.checked) {
      burgerCheckBox.checked = false;
    }
  });
});

myObserver.observe(body);

themeButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    const customTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = customTheme;
    invertEmojiColour(customTheme);
    // const customTheme = e.target.checked ? 'clean' : 'dark';
    // updateRecaptcha(customTheme);
  });
});

function invertEmojiColour(customTheme) {
  themeEmojis.forEach(item => {
    if (customTheme === 'light') {
      item.classList.add('light');
    } else {
      item.classList.remove('light');
    }
  });
}

// change recaptcha to dark by setting the data-theme attribute

function updateRecaptcha(customTheme) { 
  const recaptcha = document.querySelector('.g-recaptcha');
  // const temp = document.querySelector('div[data-theme]');
  if (recaptcha) {
    // console.log('data-theme:', recaptcha.getAttribute('data-theme'));
    recaptcha.setAttribute('data-theme', customTheme);
  }
}

// updateRecaptcha('dark');
