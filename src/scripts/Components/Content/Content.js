import axios from 'axios'
import './Content.css'

class Content extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute('data')
    this.dataJSON = JSON.parse(this.data)
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
  }

  search () {
    this.value = document.querySelector('#input').value
    axios.get(`https://restaurant-api.dicoding.dev/search?q=${this.value}`).then(res => {
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
                    <img class="resto" src='https://restaurant-api.dicoding.dev/images/large/${e.pictureId}' alt="${e.name}">
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
        <h1 style="font-size:20px;">Data Tidak Ditemukan</h1>
        <button class="back">Kembali</button>
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
  }
}
customElements.define('content-component', Content)
