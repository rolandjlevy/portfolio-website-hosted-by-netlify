///////////////////
// Project class //
///////////////////

class Project {
  constructor(id, image, heading, languages, infoButtons) {
    this.id = id;
    this.image = image;
    this.heading = heading;
    this.languages = languages;
    this.infoButtons = infoButtons;
  }
  getList() {
    return this.languages.map(li => `<li>${li}</li>`).join('');
  }
  getInfoButton() {
    if (!this.infoButtons) return '';
    let html = `<ul class="info">`;
    this.infoButtons.forEach(item => {
      const key = Object.keys(item).shift();
      const value = Object.values(item).shift();
      const fa = key === 'github' ? 'fab' : 'fas';
      html += `
      <li class="${key}">
        <a href="${value}" target="_blank"><i class="${fa} fa-${key}"></i></a>
      </li>`;
    });
    html += `</ul>`;
    return html;
  }
  getInnerHtml() {
    return `
      <li id="${this.id}" class="project">
        <img src="${this.image}" />
        <input id="${this.id}-checkbox" class="toggle" type="checkbox" />
        <label for="${this.id}-checkbox" class="toggle-overlay"><i class="fas fa-thumbtack"></i></label>
        ${this.getInfoButton()}
        <ul class="details"><li>${this.heading}</li>${this.getList()}</ul>
      </li>
    `;
  }
}

const projectData = [];

projectData.push(new Project(
  'pixel-grid-draw', 
  './images/pixel-grid-draw.gif',
  'Pixel Grid Draw',
  ['vue','css'],
  [
    { play: 'https://vue-pixel-grid-draw--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-pixel-grid-draw/'},
    { code: 'https://repl.it/@rjlevy/vue-pixel-grid-draw/'}
  ]
));

projectData.push(new Project(
  'colour-swatch-maker', 
  './images/colour-swatch-maker-4.gif',
  'Colour Swatch Maker',
  ['vue','css'],
  [
    { play: 'https://vue-rgb-sliders-and-swatch-maker--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-rgb-sliders-and-swatch-maker/'},
    { code: 'https://repl.it/@rjlevy/vue-rgb-sliders-and-swatch-maker/'}
  ]
));

https://repl.it/@rjlevy/vue-rgb-sliders-and-swatch-maker

projectData.push(new Project(
  'better-change', 
  'https://rolandlevy.co.uk/images/better-change-slide.png',
  'Better Change',
  ['react','node','express','sass'],
  [
    { play: 'http://www.betterchange.net/'},
    { github: 'https://github.com/Benefit-ConstructorLabs/benefit'},
    { code: 'https://github.com/Benefit-ConstructorLabs/benefit'}
  ]
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