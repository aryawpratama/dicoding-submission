import './Jumbotron.css'
class Jumbotron extends HTMLElement {
  connectedCallback () {
    this.background = this.getAttribute('bg')
    this.render()
    document.querySelector(
      '.jumbo'
    ).style.backgroundImage = `url(${this.background})`
  }

  render () {
    this.innerHTML = `
        <div class="jumbo">
            <div class="jumbo-content">
                <h1>Explore Your</h1>
                <h1>Favourite Restaurant</h1>
                <a class="explorenow" href="#explore">Explore Now!</a>
            </div>
        </div>
    `
  }
}
customElements.define('jumbotron-component', Jumbotron)
