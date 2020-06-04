document.addEventListener('DOMContentLoaded', (event) => {

  const iframe = document.querySelector('.g-recaptcha iframe');
  let content = (iframe.contentWindow || iframe.contentDocument);
  if (content.document) {
    content = content.document;
  }
  content.body.innerHTML = content.body.innerHTML +
  `<style>

    .rc-anchor-light.rc-anchor-normal {
      border: 1px solid #666 !important;
    }

    .rc-anchor-light {
      background: #333 !important;
      color: #fff !important;
    }

    .recaptcha-checkbox-border {
      background-color: #333 !important;
      border: 2px solid #666 !important;
    }
    
  </style>
  `;

});