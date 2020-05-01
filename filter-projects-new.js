  /////////////////////////////////////
  // filtering projects based on id  //
  /////////////////////////////////////

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
  
  Object.keys(languages).forEach(item => {
    document.querySelector(`#${item}`).addEventListener('click', (e) => {
      setProjectFilter(e);
      updateProjectsSelection();
    });
  });

  function setProjectFilter(e) {
    const id = e.currentTarget.id;
    // if (allTrue()) Object.keys(languages).forEach(key => languages[key] = false);
    if (languages[id]) {
      e.currentTarget.classList.remove('selected');
      languages[id] = false;
    } else {
      e.currentTarget.classList.add('selected');
      languages[id] = true;
    }
    if (allFalse()) Object.keys(languages).forEach(key => languages[key] = true);
    console.log(languages)
  }

  function updateProjectsSelection() {
    projects.forEach(item => {
      const id = getLangFromClassList(item.classList)[0];
      if (languages[id]) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  const allFalse = () => Object.values(languages).every(item => !item);
  const allTrue = () => Object.values(languages).every(item => !!item);
  const getLangFromClassList = (classList) => Array.from(classList).filter(item => item !== "project")