import CONFIG from '../../Global/Config'
// CSS From Content
import './Favorite.css'
class Favorite extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute('data')
    this.dataJSON = null
    this.url = window.location.href.split('/')[1] + '/#'
    if (this.dataParsing()) {
      this.contentLoop = ''
      this.contentLooper()
      this.render()
    } else {
      this.render()
    }
    document.querySelector('.back').addEventListener('click', (event) => {
      window.location = this.url
    })
  }

  dataParsing () {
    try {
      this.dataJSON = JSON.parse(this.data)
      return true
    } catch (e) {
      return false
    }
  }

  contentLooper () {
    this.dataJSON.map((e) => {
      this.contentLoop += `
            <a href="#/detail/${e.id}" id='${e.id}' class="card">
                <div class="restopic">
                    <img class="resto" src='${CONFIG.BASE_IMAGE_URL}/${e.pictureId}' alt="${e.name}">
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
  }

  render () {
    if (this.dataJSON !== null) {
      if (this.dataJSON.length === 0) {
        this.innerHTML = `
        <div class="container">
        <h1 class='title-fav'>Favorite</h1>
      <div class="content" id="skip">
        <div class="card">
          <h1 style="font-size:20px;">Data not found</h1>
          <button class="back">Back</button>
        </div>
      </div>
      </div>
        `
      } else {
        this.innerHTML = `
          <div class="container">
            <h1 class='title-fav' id="skip">Favorite</h1>
      <div class="content" id="skip"id="skip">
      <div class="content" >
            ${this.contentLoop}
          </div>
          </div>
          `
      }
    } else {
      this.innerHTML = `
      <load-failed></load-failed>
      `
    }
  }
}
customElements.define('fav-component', Favorite)
