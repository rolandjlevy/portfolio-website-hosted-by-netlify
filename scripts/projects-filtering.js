////////////////////////////
// Filter projects by id  //
////////////////////////////

document.addEventListener('DOMContentLoaded', (event) => {

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

  const projectContainer = document.querySelector('.project-container');

  projectData.forEach(project => {
    const liNode = document.createElement('li');
    liNode.insertAdjacentHTML('afterbegin', project.getInnerHtml());
    projectContainer.appendChild(liNode.firstElementChild);
  });

  const projects = document.querySelectorAll('.project');

  projects.forEach(div => {
    div.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('hover');
    });
  });
  
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
    projects.forEach(project => {
      const data = getProjectById(project.id);
      const exists = projectLanguagesExist(data.languages);
      if (exists || allFalse() && project.style.display !== 'block') project.style.display = 'block';
      if (!exists && !allFalse() && project.style.display !== 'none') project.style.display = 'none';
    });
  }

  const getProjectById = (id) => projectData.find(project => project.id == id);

  const allFalse = () => Object.values(languages).every(item => !item);
  
  const projectLanguagesExist = (projectLanguages) => projectLanguages.some(id => languages[id]);

});