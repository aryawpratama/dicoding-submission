import "./Detail.css"
class Detail extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute("data")
    this.parse = JSON.parse(this.data)
    this.render()
  }

  render () {
    this.innerHTML = `
      <jumbotron-component dataName='${this.parse.name}' dataAddr='${this.parse.address}' dataCity='${this.parse.city}' bg='https://restaurant-api.dicoding.dev/images/large/${this.parse.pictureId}'></jumbotron-component>
      <div id="content">
      <div class="rating">
      <i class="fa fa-star" aria-hidden="true"></i>
      <p>${this.parse.rating}</p>
      <button class='favorite'><i class="fa fa-heart" aria-hidden="true"></i>Favorite</button>
      </div>
      </div> 
      `
  }
}
customElements.define("detail-component", Detail)
