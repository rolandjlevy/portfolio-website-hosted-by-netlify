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
      const theKey = key === 'play' ? 'external-link-alt' : key;
      html += `
      <li class="${key}">
        <a href="${value}" target="_blank"><i class="${fa} fa-${theKey}"></i></a>
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
          <li><i class="fas fa-angle-up m-r-5"></i>${this.heading}</li>
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
  ['express','ejs','bootstrap','javascript'],
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

// Text to Speech
projectData.push(new Project(
  'text-to-speech', 
  './images/projects/text-to-speech.png',
  'Text to Speech',
  'Choose a language, type some text and hear it spoken',
  ['javascript','css'],
  [
    { play: 'https://js-text-to-speech-api.rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/js-text-to-speech-api'},
    { code: 'https://repl.it/@rjlevy/js-text-to-speech-api'}
  ]
));

// Sliders Game
projectData.push(new Project(
  'sliders-game', 
  './images/projects/sliders-game.png',
  'Sliders Game',
  'Slide pieces into the correct order in the fewest possible moves then add your score to the Leader Board',
  ['javascript','css','firebase'],
  [
    { play: 'https://js-sliders-game.rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/js-sliders-game'},
    { code: 'https://repl.it/@rjlevy/js-sliders-game'}
  ]
));

// Solitaire Game
projectData.push(new Project(
  'solitaire-game', 
  './images/projects/solitaire-game.png',
  'Solitaire Game',
  'A game of speed, logic and skill: start with 33 marbles and try to finish with just one marble left in the middle of the board to acheive \'Solitaire\'.',
  ['javascript','css','firebase'],
  [
    { play: 'https://js-solitaire-33-game.rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/js-solitaire-33-game'},
    { code: 'https://repl.it/@rjlevy/js-solitaire-33-game'}
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

// CSS Analogue Clock
projectData.push(new Project(
  'analogue-clock', 
  './images/projects/analogue-clock.jpg',
  'Analogue Clock',
  'An analogue clock which accurately shows the time using pure CSS and a tiny touch of JS',
  ['css','javascript'],
  [
    { play: 'https://js-analogue-clock--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/css-analogue-clock/'},
    { code: 'https://repl.it/@rjlevy/CSS-analogue-clock/'}
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
    { code: 'https://repl.it/@rjlevy/js-random-hex-colour-swatch-generator-oop'}
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

// Colour Creator
projectData.push(new Project(
  'colour-creator', 
  './images/projects/colour-creator.jpg',
  'Colour Creator',
  'RGB colour sliders create swatches with rgb and hex colour values displayed.',
  ['vue','css'],
  [
    { play: 'https://vue-colour-creator--rjlevy.repl.co/'},
    { github: 'https://github.com/rolandjlevy/vue-colour-creator/'},
    { code: 'https://repl.it/@rjlevy/vue-colour-creator/'}
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