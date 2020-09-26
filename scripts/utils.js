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

// change recaptcha to dark by setting the data-theme attribute
const recaptcha = document.querySelector('.g-recaptcha');
if (recaptcha) {
  recaptcha.setAttribute("data-theme", "dark");
}

theme.addEventListener('click', (e) => {
  html.dataset.theme = e.target.checked ? 'light' : 'default';
});