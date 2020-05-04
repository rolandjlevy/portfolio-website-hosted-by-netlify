document.addEventListener('DOMContentLoaded', (event) => {

  /////////////////////////////////////
  // filtering projects based on id  //
  /////////////////////////////////////
  const software = {};
  const projects = document.querySelectorAll('.project');
  const projectContainer = document.querySelector('.project-container');
  const projectContainerInnerHTML = document.querySelector('.project-container').innerHTML;
  const languages = ['javascript', 'node', 'express', 'mysql', 'vue', 'react', 'bootstrap', 'css'];
  languages.forEach(item => {
    document.querySelector(`#${item}`).addEventListener('click', (e) => {
      setProjectFilter(e);
      updateProjectsSelection(e);
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

});