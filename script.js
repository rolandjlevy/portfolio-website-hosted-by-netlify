// filtering for projects

document.addEventListener('DOMContentLoaded', (event) => {
  const software = {};
  const projects = document.querySelectorAll('.project');
  const projectContainer = document.querySelector('.project-container');
  const projectContainerInnerHTML = document.querySelector('.project-container').innerHTML;

  ['node', 'javascript', 'express', 'vue', 'react', 'mysql'].forEach(item => {
    document.querySelector(`#${item}`).addEventListener('click', (e) => {
      setFilter(e);
      updateSoftware();
    });
  });

  function setFilter(e) {
    const id = e.target.id;
    if (software[id]) {
      e.target.classList.remove('selected');
      delete software[id];
    } else {
      e.target.classList.add('selected');
      software[id] = getProjectByName(id);
    }
  }

  function updateSoftware() {
    if (!Object.values(software).length) {
      projectContainer.innerHTML = projectContainerInnerHTML;
      return;
    }
    projectContainer.innerHTML = Object.values(software)
    .filter(a => !!a)
    .map(b => b.map(c => c.outerHTML).join(''))
    .join('')
  }

  function getProjectByName(name) {
    return Array.from(projects).filter(item => item && item.classList && item.classList.value.includes(name));
  }

});

// collapse burger menu panel in mobile view
const mediaQueryMobile = 585;
const burgerCheckBox = document.querySelector('.burger-checkbox');
const navbg = document.querySelector('.navbg');
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

