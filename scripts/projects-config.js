document.addEventListener('DOMContentLoaded', (event) => {
  
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);
  const scroller = true;
  window.projectData = [];

  const languageProps = [ 'javascript', 'node', 'express', 'mysql', 'vue', 'react', 'bootstrap', 'sass', 'css', 'mongodb'];

  const languages = languageProps.reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  const categoryProps = ['animation', 'app', 'app-with-api', 'colour-utility', 'game', 'widget'];

  const categories = categoryProps.reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  const filters = { languages, categories };
  const type = 'languages';

  // fetch data from api
  const baseUrl = 'https://express-portfolio-api.rolandjlevy.repl.co';
  const url = `${baseUrl}/api/routes/projects?origin=${window.origin}`;

  const languageLinks = {
    javascript: { 'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'},
    react: { 'React': 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg' },
    node: { 'Node': 'https://repl.it/public/images/languages/nodejs.svg' },
    express: { 'Express': 'https://c7.uihere.com/files/925/447/818/express-js-node-js-javascript-mongodb-node-js.jpg' },
    mongodb: { 'MongoDB': 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'},
    mysql: { 'MySql': 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/mysql-workbench-icon.png' },
    vue: { 'Vue': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    bootstrap: { 'Bootstrap': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    sass: { 'Sass':  'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' },
    css: {'CSS': 'https://ya-webdesign.com/transparent450_/css-3-logo-png-7.png' }
  }

  const renderLanguages = () => {
    return Object.entries(languageLinks).map(([key, value]) => {
      return Object.entries(value).map(([name, link]) => {
        return `<li><a id="${key}"><img alt="${name}" src="${link}">${name}</a></li>\n`
      }).join('');
    }).join('');
  }

  fetch(url)
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

    $('.tags').innerHTML = renderLanguages();

    $$('.project').forEach(div => {
      div.addEventListener('click', (e) => e.currentTarget.classList.toggle('hover'));
    });

    const setProjectFilter = (e) => {
      const id = e.currentTarget.id;
      if (filters[type][id]) {
        e.currentTarget.classList.remove('selected');
        filters[type][id] = false;
      } else {
        e.currentTarget.classList.add('selected');
        filters[type][id] = true;
      }
    }

    Object.keys(filters[type]).forEach(key => {
      console.log($(`#${key}`))
      $(`#${key}`).addEventListener('click', (e) => {
        setProjectFilter(e);
        updateProjectsSelection();
      });
    });

    const updateProjectsSelection = () => {
      $$('.project').forEach(project => {
        const data = getProjectById(project.id);
        // console.log({data, type})
        // console.log(typeof data);
        // console.log(data[type]);
        const exists = filtersExist(data[type]);
        if (exists || allFalse() && project.style.display !== 'block') project.style.display = 'block';
        if (!exists && !allFalse() && project.style.display !== 'none') project.style.display = 'none';
      });
    }

    const getProjectById = (id) => projectData.find(project => project.id == id);
    const allFalse = () => Object.values(filters[type]).every(item => !item);
    const filtersExist = (projectFilters) => projectFilters.some(id => filters[type][id]);

      
  });

});