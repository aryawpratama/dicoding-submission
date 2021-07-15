import axios from 'axios'
import './Content.css'
import CONFIG from '../../Global/Config'
class Content extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute('data')
    this.dataJSON = null
    if (this.dataParsing()) {
      this.contentLoop = ''
      this.contentLooper()
      this.render()
      document.querySelector('#search').addEventListener('click', (event) => {
        this.search()
      })
      document.querySelector('#input').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          this.search()
        }
      })
    } else {
      this.render()
    }
  }

  dataParsing () {
    try {
      this.dataJSON = JSON.parse(this.data)
      return true
    } catch (e) {
      return false
    }
  }

  search () {
    this.value = document.querySelector('#input').value
    axios.get(`${CONFIG.BASE_API_URL}/search?q=${this.value}`).then(res => {
      this.dataJSON = res.data.restaurants
      this.contentLoop = ''
      this.contentLooper()
      this.render()
      document.querySelector('#search').addEventListener('click', (event) => {
        this.search()
      })
      document.querySelector('#input').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          this.search()
        }
      })
      document.querySelector('.back').addEventListener('click', (event) => {
        this.search()
      })
    })
  }

  contentLooper () {
    this.dataJSON.map((e) => {
      this.contentLoop += `
            <a href="#/detail/${e.id}" id='${e.id}' class="card">
                <div class="restopic">
                    <img class="resto lazyload" height="220" width="270" data-src='${CONFIG.BASE_IMAGE_URL}/${e.pictureId}' alt="${e.name}">
                </div>
                <div class="rate">
                    <picture>
                      <source type="image/webp" srcset="./images/rating.webp">
                      <source type="image/jpeg" srcset="./images/rating.png">
                      <img class="rating" src="/images/rating.png" alt="Rating">
                    </picture>
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
        <h1 class='title' id="skip">Explore</h1>
        <div class="search">
          <input type="text" placeholder="Search Your Favourite Restaurant Here" id="input">
          <button aria-label="search button" id="search"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      <div class="content">
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
            <h1 class='title' id="skip">Explore</h1>
            <div class="search">
              <input type="text" placeholder="Search Your Favourite Restaurant Here" id="input">
              <button aria-label="search button" id="search"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
          <div class="content">
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
customElements.define('content-component', Content)
