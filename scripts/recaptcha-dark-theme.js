document.addEventListener('DOMContentLoaded', (event) => {

  const iframe = document.querySelector('.g-recaptcha iframe');

  let content = (iframe.contentWindow || iframe.contentDocument);
  if (content.document) {
    content = content.document;
  }

  const cssFile = '/styles/recaptcha-dark-theme.css'
  let file = content.createElement("link");
  file.setAttribute("rel", "stylesheet");
  file.setAttribute("type", "text/css");
  file.setAttribute("href", cssFile);
  content.head.appendChild(file);
  
  // content.body.innerHTML = content.body.innerHTML +
  // `<style>

  // </style>
  // `;

});