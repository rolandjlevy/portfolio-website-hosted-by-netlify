// collapse burger menu panel in mobile view 

const html = document.querySelector('html');
const body = document.querySelector('body');
const theme = document.querySelector('#theme');
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


theme.addEventListener('click', (e) => {
  html.dataset.theme = e.target.checked ? 'light' : 'dark';
  updateRecaptcha(html.dataset.theme);
});

// change recaptcha to dark by setting the data-theme attribute

function updateRecaptcha(mode) { 
  const recaptcha = document.querySelector('.g-recaptcha');
  if (recaptcha) {
    setTimeout(() => {
      recaptcha.setAttribute("data-theme", mode);
    }, 0);
  }
}

updateRecaptcha();
