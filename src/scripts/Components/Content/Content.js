import './Content.css'

class Content extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute('data')
    this.dataJSON = JSON.parse(this.data)
    console.log(this.dataJSON)
    this.contentLoop = ''
    this.dataJSON.restaurants.map((e) => {
      this.contentLoop += `
            <a href="#" id='${e.id}' class="card">
                <div class="restopic">
                    <img class="resto" src='${e.pictureId}' alt="${e.name}">
                </div>
                <div class="rate">
                    <img class="rating" src="/images/rating.png" alt="Rating">
                    <p>${e.rating}</p>
                </div>
                <div class="identity">
                    <h1>${e.name}</h1>
                    <h2>${e.city}</h2>
                </div>
                <div class="desc">
                    <p class='overflow'>${e.description}</p>
                </div>
            </a>
            `
    })
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="container">
        <h1 class='title' id="explore">Explore</h1>
        <div class="search">
                <input type="text" placeholder="Search Your Favourite Restaurant Here">
                <button aria-label="search button"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
        <div class="content">
        ${this.contentLoop}
        </div>
        </div>
        `
  }
}
customElements.define('content-component', Content)
