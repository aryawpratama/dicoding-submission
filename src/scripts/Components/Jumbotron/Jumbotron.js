import './Jumbotron.css'
class Jumbotron extends HTMLElement {
  connectedCallback () {
    this.background = this.getAttribute('bg')
    this.id = this.getAttribute("id")
    this.name = this.getAttribute("dataName")
    this.address = this.getAttribute("dataAddr")
    this.city = this.getAttribute("dataCity")
    this.render()
    document.querySelector(
      '.jumbo'
    ).style.backgroundImage = `url(${this.background})`
  }

  render () {
    if (this.name === null) {
      this.innerHTML = `
        <div class="jumbo">
            <div class="jumbo-content">
                <h1>Explore Your</h1>
                <h1>Favourite Restaurant</h1>
                <a class="explorenow" href="#skip">Explore Now!</a>
            </div>
        </div>
    `
    } else {
      this.innerHTML = `
        <div class="jumbo">
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
