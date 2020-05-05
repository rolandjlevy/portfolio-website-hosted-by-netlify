  ////////////////////////////
  // Filter projects by id  //
  ////////////////////////////

document.addEventListener('DOMContentLoaded', (event) => {

  const projects = document.querySelectorAll('.project');

  const languages = {
    javascript: false, 
    node: false,
    express: false,
    mysql: false,
    vue: false,
    react: false,
    bootstrap: false,
    sass: false,
    css: false
  };
  
  Object.keys(languages).forEach(key => {
    document.querySelector(`#${key}`).addEventListener('click', (e) => {
      setProjectFilter(e);
      updateProjectsSelection();
    });
  });

  function setProjectFilter(e) {
    const id = e.currentTarget.id;
    if (languages[id]) {
      e.currentTarget.classList.remove('selected');
      languages[id] = false;
    } else {
      e.currentTarget.classList.add('selected');
      languages[id] = true;
    }
  }

  function updateProjectsSelection() {
    projects.forEach(item => {
      const projectLanguages = item.dataset.lang.split(',');
      const exists = projectLanguagesExist(projectLanguages);
      if (exists || allFalse()) item.style.display = 'block';
      if (!exists && !allFalse()) item.style.display = 'none';
    });
  }

  const allFalse = () => Object.values(languages).every(item => !item);
  
  const projectLanguagesExist = (projectLanguages) => projectLanguages.some(id => languages[id]);

});