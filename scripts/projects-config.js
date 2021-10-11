document.addEventListener('DOMContentLoaded', (event) => {
  
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);
  const scroller = true;
  window.projectData = [];

  const languageProps = [ 'javascript', 'node', 'express', 'mysql', 'vue', 'react', 'bootstrap', 'sass', 'css'];

  const languages = languageProps.reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  const categoryProps = ['animation', 'app', 'app-with-api', 'colour-utility', 'game', 'widget'];

  const categories = categoryProps.reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  // fetch data from api
  const baseUrl = 'https://express-portfolio-api.rolandjlevy.repl.co';

  fetch(`${baseUrl}/api/projects?origin=${window.origin}`)
  .then(res => res.json())
  .then(data => {

    data.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1);

    data.forEach(item => {
      const project = new Project(item);
      if (project.active) {
        projectData.push(project);
        const liNode = document.createElement('li');
        const html = project.getInnerHtml();
        liNode.insertAdjacentHTML('afterbegin', html);
        if (scroller) {
          $('.project-scroller').appendChild(liNode.firstElementChild);
          $('.project-container').style.display = 'none';
        } else {
          $('.project-container').appendChild(liNode.firstElementChild);
          $('.project-scroller').style.display = 'none';
        }
      }
    });

    $$('.project').forEach(div => {
      div.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('hover');
      });
    });

    const setProjectFilter = (e) => {
      const id = e.currentTarget.id;
      if (languages[id]) {
        e.currentTarget.classList.remove('selected');
        languages[id] = false;
      } else {
        e.currentTarget.classList.add('selected');
        languages[id] = true;
      }
    }

    Object.keys(languages).forEach(key => {
      $(`#${key}`).addEventListener('click', (e) => {
        setProjectFilter(e);
        updateProjectsSelection();
      });
    });

    const updateProjectsSelection = () => {
      $$('.project').forEach(project => {
        const data = getProjectById(project.id);
        const exists = languagesExist(data.languages);
        if (exists || allFalse() && project.style.display !== 'block') project.style.display = 'block';
        if (!exists && !allFalse() && project.style.display !== 'none') project.style.display = 'none';
      });
    }

    const getProjectById = (id) => projectData.find(project => project.id == id);

    const allFalse = () => Object.values(languages).every(item => !item);
    
    const languagesExist = (projectLanguages) => projectLanguages.some(id => languages[id]);
      
  });

});