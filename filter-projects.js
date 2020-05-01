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
      const id = getLangFromClassList(item.classList);
      if (languages[id] || allFalse()) item.style.display = 'block';
      if (!languages[id] && !allFalse()) item.style.display = 'none';
    });
  }

  const allFalse = () => Object.values(languages).every(item => !item);

  const getLangFromClassList = (classList) => {
    return Array.from(classList)
    .filter(item => item !== "project")
    .shift();
  };

});