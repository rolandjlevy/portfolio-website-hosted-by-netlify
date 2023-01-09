///////////////////
// Project class //
///////////////////

class Project {
  constructor(props) {
    Object.entries(props).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  getLanguages() {
    return this.languages.map(word => this.amendCase(word)).join(', ');
  }
  getInfoButtons() {
    if (!this.infoButtons) return '';
    let html = `<ul class="info">`;
    Object.entries(this.infoButtons).forEach(([key, value]) => {
      const fa = key === 'github' ? 'fab' : 'fas';
      const theKey = key === 'play' ? 'external-link-alt' : key;
      const labelStyle = value.includes('http') ? '' : ' disabled'
      const icon = value.includes('http') ? `<a href="${value}" target="_blank"><i class="${fa} fa-${theKey}"></i></a>` : `<a href="javascript:void(0)" target="_self"><i class="${fa} fa-${theKey} disabled"></i></a>`;
      html += `
      <li class="${key}${labelStyle}">
        ${icon}
      </li>`;
    });
    html += `</ul>`;
    return html;
  }
  getInnerHtml() {
    return `
      <li id="${this.id}" class="project">
        <img src="./images/projects/${this.image}" loading="lazy" />
        <input id="${this.id}-checkbox" class="toggle" type="checkbox" />
        <label for="${this.id}-checkbox" class="toggle-overlay">
          <i class="fas fa-thumbtack"></i>
        </label>
        <ul class="details">
          <li><i class="fas fa-angle-up m-r-5"></i>${this.heading}</li>
          <li><i class="fas fa-info-circle m-r-5"></i>${this.details}</li>
          <li><i class="fas fa-cog m-r-5"></i>Built with ${this.getLanguages()}.</li>
          <li></li>
        </ul>
        ${this.getInfoButtons()}
      </li>
    `;
  }
  amendCase(word) {
    if (word.toLowerCase() === 'ejs' || word.toLowerCase() === 'css') return word.toUpperCase();
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
}