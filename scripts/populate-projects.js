////////////////////////////
// Populate project nodes //
////////////////////////////

const projectData = [
  {
    id: 'better-change',
    image: 'https://rolandlevy.co.uk/images/better-change-slide.png',
    heading: 'Better Change',
    languages: 'react,node,express,sass'
   },
  { 
    id: 'ourbnb',
    image: 'https://rolandlevy.co.uk/images/ourbnb-slide.png',
    heading: 'OurBnB',
    languages: 'react,node,express,sass'
   },
  { 
    id: 'lovely-grubbly',
    image: 'https://rolandlevy.co.uk/images/lovely-grubbly-slide.png',
    heading: 'Lovely Grubbly',
    languages: 'react,node,express,sass'
   },
  { 
    id: 'which-city',
    image: 'https://rolandlevy.co.uk/images/which-city-slide.png',
    heading: 'Which City?',
    languages: 'react,sass'
   },
  { 
    id: 'moviewer',
    image: 'https://rolandlevy.co.uk/images/moviewer-slide.png',
    heading: 'Moviewer',
    languages: 'react,node,css'
   }
];

const getProjectById = (id) => {
  return projectData.find(project => project.id === id);
}

const getList = (array) => array.split(',').map(li => `<li>${li}</li>`).join('');

document.addEventListener('DOMContentLoaded', (event) => {

  const projectContainer = document.querySelector('.project-container');

  let liNode = document.createElement('li');
  liNode.insertAdjacentHTML('afterbegin', getProjectHtml('better-change'));
  projectContainer.appendChild(liNode.firstElementChild); 

  liNode = document.createElement('li');
  liNode.insertAdjacentHTML('afterbegin', getProjectHtml('ourbnb'));
  projectContainer.appendChild(liNode.firstElementChild);

  liNode = document.createElement('li');
  liNode.insertAdjacentHTML('afterbegin', getProjectHtml('lovely-grubbly'));
  projectContainer.appendChild(liNode.firstElementChild); 

  liNode = document.createElement('li');
  liNode.insertAdjacentHTML('afterbegin', getProjectHtml('which-city'));
  projectContainer.appendChild(liNode.firstElementChild);

  liNode = document.createElement('li');
  liNode.insertAdjacentHTML('afterbegin', getProjectHtml('moviewer'));
  projectContainer.appendChild(liNode.firstElementChild); 

  function getProjectHtml(id) {
    const project = getProjectById(id);
    const list = getList(project.languages);
    const str = `
      <li id="${project.id}" class="project" style="background-image:url(${project.image})" data-lang="${project.languages}">
        <div class="view"></div>
        <ul class="details"><li>${project.heading}</li>${list}</ul>
      </li>
    `;
    return str;
  }

  // const liNode = document.createElement('li');
  // liNode.id = 'ourbnb';
  // liNode.classList.add('project');
  // liNode.style.backgroundImage = "url(https://rolandlevy.co.uk/images/ourbnb-slide.png)";
 

});