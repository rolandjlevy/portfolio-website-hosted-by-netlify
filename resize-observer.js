document.addEventListener('DOMContentLoaded', (event) => {

  ///////////////////////////////////////////////
  // collapse burger menu panel in mobile view //
  ///////////////////////////////////////////////

  const mediaQueryMobile = 585;
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

});