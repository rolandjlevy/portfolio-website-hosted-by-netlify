// filtering for projects

document.addEventListener('DOMContentLoaded', (event) => {
  const software = {};
  const projects = document.querySelectorAll('.project');
  const projectContainer = document.querySelector('.project-container');
  const projectContainerInnerHTML = document.querySelector('.project-container').innerHTML;
  const languages = ['javascript', 'node', 'express', 'mysql', 'vue', 'react', 'bootstrap', 'css'];
  languages.forEach(item => {
    document.querySelector(`#${item}`).addEventListener('click', (e) => {
      setProjectFilter(e);
      updateProjectsSelection();
    });
  });

  function setProjectFilter(e) {
    const id = e.currentTarget.id;
    if (software[id]) {
      e.currentTarget.classList.remove('selected');
      delete software[id];
    } else {
      e.currentTarget.classList.add('selected');
      software[id] = getProjectByName(id);
    }
  }

  function updateProjectsSelection() {
    if (!Object.values(software).length) {
      projectContainer.innerHTML = projectContainerInnerHTML;
      return;
    }
    projectContainer.innerHTML = Object.values(software)
    .filter(a => !!a)
    .map(b => b.map(c => c.outerHTML).join(''))
    .join('');
  }

  function getProjectByName(name) {
    return Array.from(projects).filter(item => item && item.classList && item.classList.value.includes(name));
  }

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


});