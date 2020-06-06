///////////////////
// Project class //
///////////////////

class Project {
  constructor(id, image, heading, details, languages, infoButtons) {
    this.id = id;
    this.image = image;
    this.heading = heading;
    this.details = details;
    this.languages = languages;
    this.infoButtons = infoButtons;
  }
  amendCase = (word) => {
    if (word.toLowerCase() === 'ejs' || word.toLowerCase() === 'css') return word.toUpperCase();
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  getLanguages() {
    return this.languages.map(word => this.amendCase(word)).join(', ');
  }
  getInfoButtons() {
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
        <label for="${this.id}-checkbox" class="toggle-overlay">
          <i class="fas fa-thumbtack"></i>
        </label>
        <ul class="details">
          <li>${this.heading}</li>
          <li>${this.details}</li>
          <li>Built with ${this.getLanguages()}.</li>
        </ul>
        ${this.getInfoButtons()}
      </li>
    `;
  }
}

/////////////////////////
// Initialize Projects //
/////////////////////////

const projectData = [];

// Photo Finder
projectData.push(new Project(
  'photo-finder', 
  './images/projects/photo-finder.jpg',
  'Photo Finder',
  'Uses the Unsplash API to search for and favourite photos.',
  ['express','ejs','bootstrap'],
  [
    { play: 'https://express-photo-finder-using-unsplash-api--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/express-photo-finder-using-unsplash-api'},
    { code: 'https://repl.it/@rjlevy/express-photo-finder-using-unsplash-api'}
  ]
));

// Google Translator
projectData.push(new Project(
  'google-translator', 
  './images/projects/google-translator.jpg',
  'Google Translator',
  'Uses an API to translate phrases into 14 languages.',
  ['express', 'node', 'ejs', 'bootstrap'],
  [
    { play: 'https://express-google-translate-api-with-ejs--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/express-google-translate-api-with-ejs'},
    { code: 'https://repl.it/@rjlevy/express-google-translate-api-with-ejs'}
  ]
));

// Pixel Grid Draw
projectData.push(new Project(
  'pixel-grid-draw', 
  './images/projects/pixels.gif',
  'Pixel Grid Draw',
  'Draw coloured pixels on a customizable grid.',
  ['vue','css'],
  [
    { play: 'https://vue-pixel-grid-draw--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-pixel-grid-draw/'},
    { code: 'https://repl.it/@rjlevy/vue-pixel-grid-draw/'}
  ]
));

// Swatch Generator
projectData.push(new Project(
  'swatch-generator', 
  './images/projects/swatch-generator.jpg',
  'Swatch Generator',
  'Generates random swatches and displays colour values.',
  ['javascript','css'],
  [
    { play: 'https://js-random-hex-colour-swatch-generator-oop--rjlevy.repl.co'},
    { github: 'https://github.com/rolandjlevy/js-random-hex-colour-swatch-generator-oop'},
    { code: 'https://repl.it/@rjlevy/JS-random-hex-colour-swatch-generator-oop'}
  ]
));

// Portfolio Website
projectData.push(new Project(
  'portfolio-website', 
  './images/projects/portfolio-website.jpg',
  'Portfolio Website',
  'Showcases my projects. All designed and coded from scratch, without frameworks.',
  ['javascript','css'],
  [
    { play: 'https://rolandlevy.co.uk/'},
    { github: 'https://github.com/rolandjlevy/portfolio-website'},
    { code: 'https://repl.it/@rjlevy/portfolio-website'}
  ]
));

// RGB Sliders
projectData.push(new Project(
  'rgb-sliders', 
  './images/projects/rgb-sliders.jpg',
  'RGB Sliders',
  'RGB colour sliders create swatches with colour values displayed.',
  ['vue','css'],
  [
    { play: 'https://vue-rgb-sliders-and-swatch-maker--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-rgb-sliders-and-swatch-maker/'},
    { code: 'https://repl.it/@rjlevy/vue-rgb-sliders-and-swatch-maker/'}
  ]
));

// Better Change
projectData.push(new Project(
  'better-change', 
  './images/projects/better-change.jpg',
  'QR Code App',
  'Enables contactless payments using QR codes. No card-reader needed.',
  ['react', 'redux', 'node', 'express', 'sass'],
  [
    { play: 'http://www.betterchange.net/'},
    { github: 'https://github.com/Benefit-ConstructorLabs/benefit'}
  ]
));

// OurBnB
projectData.push(new Project(
  'ourbnb', 
  './images/projects/beach.jpg',
  'OurBnB',
  'Accommodation booking app for London, New York and Sydney.',
  ['react', 'node', 'express', 'sass'],
  [
    { play: 'https://ourbnb.herokuapp.com/'},
    { github: 'https://github.com/OurBnB/OurBnB'}
  ]
));

// Moviewer
projectData.push(new Project(
  'moviewer',
  './images/projects/moviewer-popcorn.jpg',
  'Movie Explorer',
  'A movie search engine which uses the Open Movie Database API.',
  ['react', 'node', 'css'],
  [
    { play: 'https://moviewer.herokuapp.com/'},
    { github: 'https://github.com/rolandjlevy/moviewer'}
  ]
));

// Lovely Grubbly
projectData.push(new Project(
  'lovely-grubbly',
  './images/projects/italian-bread.jpg',
  'Food Delivery',
  'Online takeaway food delivery service.',
  ['react','node','express','sass'],
  [
    { play: 'https://lovely-grubbly.herokuapp.com/'},
    { github: 'https://github.com/rolandjlevy/lovely-grubbly'}
  ]
));

// Which City?
projectData.push(new Project(
  'which-city',
  './images/projects/louvre.jpg',
  'Quiz game',
  'Which City? involves browsing photos and trying to guess the city.',
  ['react','sass'],
  [
    { play: 'https://github.com/rolandjlevy/which-city'},
    { github: 'https://which-city.herokuapp.com/'}
  ]
));