///////////////////
// Project class //
///////////////////

class Project {
  constructor(id, image, heading, languages) {
    this.id = id;
    this.image = image;
    this.heading = heading;
    this.languages = languages;
  }
  getList() {
    return this.languages.map(li => `<li>${li}</li>`).join('');
  }
  getInnerHtml() {
    return `
      <li id="${this.id}" class="project">
        <img src="${this.image}" />
        <input id="${this.id}-checkbox" class="toggle" type="checkbox" />
        <label for="${this.id}-checkbox" class="toggle-overlay"><i class="fas fa-thumbtack"></i></label>
        <div class="view-icon"></div>
        <ul class="details"><li>${this.heading}</li>${this.getList()}</ul>
      </li>
    `;
  }
}

const projectData = [];

projectData.push(new Project(
  'better-change', 
  'https://rolandlevy.co.uk/images/better-change-slide.png',
  'Better Change',
  ['react','node','express','sass']
));

projectData.push(new Project(
  'ourbnb', 
  'https://rolandlevy.co.uk/images/ourbnb-slide.png',
  'OurBnB',
  ['react','node','express','sass']
));

projectData.push(new Project(
  'lovely-grubbly',
  'https://rolandlevy.co.uk/images/lovely-grubbly-slide.png',
  'Lovely Grubbly',
  ['react','node','express','sass']
));

projectData.push(new Project(
  'which-city',
  'https://rolandlevy.co.uk/images/which-city-slide.png',
  'Which City?',
  ['react','sass']
));

projectData.push(new Project(
  'moviewer',
  'https://rolandlevy.co.uk/images/moviewer-slide.png',
  'Moviewer',
  ['react','node','css']
));