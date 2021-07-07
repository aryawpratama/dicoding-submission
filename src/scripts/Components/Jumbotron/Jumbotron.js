import CONFIG from '../../Global/Config'
import './Jumbotron.css'
class Jumbotron extends HTMLElement {
  connectedCallback () {
    this.id = this.getAttribute('idPicture')
    this.name = this.getAttribute('dataName')
    this.address = this.getAttribute('dataAddr')
    this.city = this.getAttribute('dataCity')
    this.render()
  }

  render () {
    if (this.name === null) {
      this.innerHTML = `
        <div class="jumbo">
        <picture>
          <source media="(max-width:500px)" type="image/webp" srcset="./images/heros/hero-image_2-small.webp">
          <source media="(max-width:500px)" type="image/jpeg" srcset="./images/heros/hero-image_2-small.jpg">
          <source type="image/webp" srcset="./images/heros/hero-image_2-large.webp">
          <source type="image/jpeg" srcset="./images/heros/hero-image_2-large.jpg">
          <img class="jumbo-bg" src="./images/heros/hero-image_2.jpg" alt="Jumbotron">
        </picture>
            <div class="jumbo-content">
                <h1>Explore Your</h1>
                <h1>Favourite Restaurant</h1>
                <button class="explorenow" id="skip-content">Explore Now!</button>
            </div>
        </div>
    `
    } else {
      this.innerHTML = `
        <div class="jumbo">
        <picture>
        <source media="(max-width:500px)" type="image/jpeg" srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM}/${this.id}">
                  <img class="jumbo-bg" src="${CONFIG.BASE_IMAGE_URL_LARGE}/${this.id}" alt="Jumbotron">
        </picture>
            <div class="jumbo-detail-content">
                <h1>${this.name}</h1>
                <div class="location">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <div class="location-text">
                <p>${this.address}</p>
                <p>${this.city}</p>
                </div>
                </div>
            </div>
        </div>
    `
    }
  }
}
customElements.define('jumbotron-component', Jumbotron)
