document.addEventListener('DOMContentLoaded', async (event) => {
  
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);
  const scroller = true;
  window.projectData = [];

  const response = await fetch('./scripts/language-links.json');
  const languageLinks = await response.json();

  const languages = Object.keys(languageLinks)
    .reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  const blackListed = ['app'];
  
  const categoryProps = ['animation', 'app', 'app-with-api', 'colour-utility', 'game', 'widget'].filter(item => !blackListed.includes(item));

  const categories = categoryProps.reduce((acc, prop) => {
    acc[prop] = false;
    return acc;
  }, {});

  const filters = { languages, categories };
  const type = 'languages';

  // fetch data from api
  const baseUrl = 'https://express-portfolio-api.rolandjlevy.repl.co';
  const url = `${baseUrl}/api/routes/projects?origin=${window.origin}`;

  const renderLanguages = () => {
    return Object.entries(languageLinks).map(([key, value]) => {
      return Object.entries(value).map(([name, link]) => (`<li><a id="${key}"><img alt="${name}" src="${link}" width="18">${name}</a></li>\n`)).join('');
    }).join('');
  }

  const res = await fetch(url);
  const data = await res.json();

  data.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1);

  data.forEach((item, index) => {
    const project = new Project(item);
    if (project.active) {
      projectData.push(project);
      const liNode = document.createElement('li');
      const html = project.getInnerHtml();
      liNode.insertAdjacentHTML('afterbegin', html);
      const [a, b] = scroller ? ['scroller', 'container'] :  ['container', 'scroller'];
      if (categoryProps.includes(project.category)) {
        $(`.project-${a}.${project.category}`).appendChild(liNode.firstElementChild);
        $(`.project-${b}`).style.display = 'none';
      }
    }
  });

  $('.tags').innerHTML = renderLanguages();

  $$('.project').forEach(div => {
    div.addEventListener('click', (e) => e.currentTarget.classList.toggle('hover'));
  });

  const resetScroller = () => {
    const el = $('.project-scroller');
    const pos = el.getBoundingClientRect();
    el.scrollTo(pos.left, 0);
  }

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
    $(`#${key}`).addEventListener('click', (e) => {
      setProjectFilter(e);
      updateProjectsSelection();
      resetScroller();
    });
  });

  const updateProjectsSelection = () => {
    $$('.project').forEach(project => {
      const data = getProjectById(project.id);
      const exists = filtersExist(data[type]);
      if (exists || allFalse() && project.style.display !== 'block') project.style.display = 'block';
      if (!exists && !allFalse() && project.style.display !== 'none') project.style.display = 'none';
    });
  }

  const getProjectById = (id) => projectData.find(project => project.id == id);
  const allFalse = () => Object.values(filters[type]).every(item => !item);
  const filtersExist = (projectFilters) => projectFilters.some(id => filters[type][id]);

});