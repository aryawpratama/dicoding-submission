import axios from 'axios'
import qs from 'qs'
import Swal from 'sweetalert2'
import CONFIG from '../../Global/Config'
import './Detail.css'
class Detail extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute('data')
    this.parse = null
    if (this.dataParsing()) {
    // Categories
      this.categories = []
      this.category()
      this.join = this.categories.join()
      // Menu Food
      this.foodLoop = `
    <ul>
    `
      this.food()
      // Menu Drink
      this.drinkLoop = `
    <ul>
    `
      this.drink()
      // Review
      this.reviewLoop = ''
      this.review()
      this.render()
      this.modalBox()
    } else {
      // Render
      this.render()
    }
  }

  dataParsing () {
    try {
      this.parse = JSON.parse(this.data)
      return true
    } catch (e) {
      return false
    }
  }

  modalBox () {
    document.querySelector('#add-review').addEventListener('click', event => {
      event.preventDefault()
      document.querySelector('.modalbox').style.visibility = 'visible'
    })
    document.querySelector('#close').addEventListener('click', event => {
      event.preventDefault()
      document.querySelector('.modalbox').style.visibility = 'hidden'
    })
    document.querySelector('#submit').addEventListener('click', event => {
      event.preventDefault()
      document.querySelector('.modalbox').style.visibility = 'hidden'
      this.inputName = document.querySelector('#name')
      this.inputReview = document.querySelector('#review')
      this.postData = {
        id: this.parse.id,
        name: this.inputName.value,
        review: this.inputReview.value
      }
      if (this.nameValue === '' || this.reviewValue === '') {
        Swal.fire({
          icon: 'error',
          title: 'Failed to add review',
          text: 'Name or review should be filled'

        })
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Please Wait',
          text: 'We are trying to add your review'
        })
        axios({
          url: `${CONFIG.BASE_API_URL}/review`,
          method: 'post',
          data: qs.stringify(this.postData),
          headers: {
            'X-Auth-Token': CONFIG.API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded'
          }

        })
          .then(res => {
            Swal.fire({
              icon: 'success',
              title: 'Review Added'
            })
            this.review(res.data.customerReviews)
            document.querySelector('#content-review').innerHTML = this.reviewLoop
            this.inputReview.value = ''
            this.inputName.value = ''
          }).catch(err => {
            if (!err.response) {
              Swal.fire({
                icon: 'error',
                title: 'Failed to add your review',
                text: 'Network Error'
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Failed to add your review',
                text: `${err.response.status}`
              })
            }
          })
      }
    })
  }

  category () {
    this.parse.categories.map(res => {
      this.categories.push(res.name)
    })
  }

  food () {
    this.parse.menus.foods.map(res => {
      this.foodLoop += `
      <li>${res.name}</li>
      `
    })
    this.foodLoop += '</ul>'
  }

  drink () {
    this.parse.menus.drinks.map(res => {
      this.drinkLoop += `
      <li>${res.name}</li>
      `
    })
    this.drinkLoop += '</ul>'
  }

  review (params) {
    if (params === undefined) {
      this.parse.customerReviews.map(res => {
        this.reviewLoop += `
          <div class="review-card">
            <h1>${res.name}</h1>
            <h2>${res.date}</h2>
            <p>${res.review}</p>
          </div>
  `
      })
    } else {
      this.reviewLoop = ''
      params.map(res => {
        this.reviewLoop += `
        <div class="review-card">
          <h1>${res.name}</h1>
          <h2>${res.date}</h2>
          <p>${res.review}</p>
        </div>
`
      })
    }
  }

  render () {
    if (this.parse !== null) {
      this.innerHTML = `
      <jumbotron-component dataName='${this.parse.name}' dataAddr='${this.parse.address}' dataCity='${this.parse.city}' bg='${CONFIG.BASE_IMAGE_URL}/${this.parse.pictureId}'></jumbotron-component>
      <div id="skip" class="content-detail">
        <div class="rating-detail">
        <img class="rating" src="/images/rating.png" alt="Rating">
        <p>${this.parse.rating}</p>
        <button class='favorite'><i class="fa fa-heart" aria-hidden="true"></i></button>
        </div>
        <div class="categories">
          <h1>Categories</h1>
          <p>${this.join}</p>
        </div>
        <div class="description">
          <h1>Description</h1>
          <p>${this.parse.description}</p>
        </div>
        <div class="menu-detail">
          <h1>Menu</h1>
          <div class="menu-content">
            <div class="foods">
            <h2>Food :</h2>
            ${this.foodLoop}
            </div>
            <div class="drinks">
            <h2>Drink :</h2>
            ${this.drinkLoop}
            </div>
          </div>
        </div>
        <div class="review-detail">
          <h1>Review</h1>
          <button id="add-review" class="add-review">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          <div id="content-review">
          ${this.reviewLoop}
          </div>
        </div>
        <div class="modalbox">
          <div class="modalbox-card">
          <button type="submit" id="close">
          <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <h1>Add Review</h1>
          <div class="modalbox-name">
          <label for="name">Nama</label>
          <input required type="text" name="name" id="name">
          </div>
          <div class="modalbox-review">
          <label for="review">Review</label>
          <textarea required name="review" id="review"></textarea>
          </div>
          <button type="submit" id="submit">Submit</button>
          </div>
        </div>
      </div> 
      `
    } else {
      this.innerHTML = `
        <load-failed></load-failed>
      `
    }
  }
}
customElements.define('detail-component', Detail)
