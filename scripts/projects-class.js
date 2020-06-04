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
        <ul class="details"><li>${this.heading}</li>${this.getList()}</ul>
        ${this.getInfoButton()}
      </li>
    `;
  }
}

/////////////////////////
// Initialize Projects //
/////////////////////////

const projectData = [];

projectData.push(new Project(
  'photo-finder', 
  './images/projects/photo-finder.jpg',
  'Photo Finder',
  ['express','bootstrap','css'],
  [
    { play: 'https://express-photo-finder-using-unsplash-api--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/express-photo-finder-using-unsplash-api'},
    { code: 'https://repl.it/@rjlevy/express-photo-finder-using-unsplash-api'}
  ]
));

projectData.push(new Project(
  'portfolio-website', 
  './images/projects/portfolio-website.jpg',
  'Portfolio Website',
  ['javascript','css'],
  [
    { play: 'https://rolandlevy.co.uk/'},
    { github: 'https://github.com/rolandjlevy/portfolio-website'},
    { code: 'https://repl.it/@rjlevy/portfolio-website'}
  ]
));

projectData.push(new Project(
  'google-translator', 
  './images/projects/google-translator.jpg',
  'Google Translator',
  ['express','bootstrap','css'],
  [
    { play: 'https://express-google-translate-api-with-ejs--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/express-google-translate-api-with-ejs'},
    { code: 'https://repl.it/@rjlevy/express-google-translate-api-with-ejs'}
  ]
));

projectData.push(new Project(
  'swatch-generator', 
  './images/projects/swatch-generator.jpg',
  'Swatch Generator',
  ['javascript','css'],
  [
    { play: 'https://js-random-hex-colour-swatch-generator-oop--rjlevy.repl.co'},
    { github: 'https://github.com/rolandjlevy/js-random-hex-colour-swatch-generator-oop'},
    { code: 'https://repl.it/@rjlevy/JS-random-hex-colour-swatch-generator-oop'}
  ]
));

projectData.push(new Project(
  'pixel-grid-draw', 
  './images/projects/pixels.gif',
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
  './images/projects/swatches.jpg',
  'Colour Swatch Maker',
  ['vue','css'],
  [
    { play: 'https://vue-rgb-sliders-and-swatch-maker--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-rgb-sliders-and-swatch-maker/'},
    { code: 'https://repl.it/@rjlevy/vue-rgb-sliders-and-swatch-maker/'}
  ]
));

projectData.push(new Project(
  'better-change', 
  './images/projects/better-change.jpg',
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
  './images/projects/beach.jpg',
  'OurBnB',
  ['react','node','express','sass']
));

projectData.push(new Project(
  'lovely-grubbly',
  './images/projects/italian-bread.jpg',
  'Lovely Grubbly',
  ['react','node','express','sass']
));

projectData.push(new Project(
  'which-city',
  './images/projects/louvre.jpg',
  'Which City?',
  ['react','sass']
));

projectData.push(new Project(
  'moviewer',
  './images/projects/moviewer-popcorn.jpg',
  'Moviewer',
  ['react','node','css']
));