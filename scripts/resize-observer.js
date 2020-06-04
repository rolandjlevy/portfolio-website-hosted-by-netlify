document.addEventListener('DOMContentLoaded', (event) => {

  ///////////////////////////////////////////////
  // collapse burger menu panel in mobile view //
  ///////////////////////////////////////////////

  const mediaQueryMobile = 600;
  const burgerCheckBox = document.querySelector('.burger-checkbox-class');
  const body = document.querySelector('body');

  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const contentWidth = entry.contentRect.width;
      if (contentWidth > mediaQueryMobile && burgerCheckBox.checked) {
      burgerCheckBox.checked = false;
      }
    });
  });
  
  myObserver.observe(body);

  // const myframe = document.getElementById("myiFrame");
  // let content = (myframe.contentWindow || myframe.contentDocument);
  // if (content.document) content = content.document;
  // content.body.innerHTML = content.body.innerHTML + 
  // `<style>
  //   h2 {
  //     color: blue;
  //   }
  //   body {
  //     background: yellow;
  //   }
  // </style>
  // `;
  

});