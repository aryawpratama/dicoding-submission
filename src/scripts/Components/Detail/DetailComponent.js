import "./Detail.css"
class Detail extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute("data")
    this.parse = JSON.parse(this.data)
    console.log(this.parse)
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
    console.log(this.foodLoop)
    // Render
    this.render()
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
    this.foodLoop += `</ul>`
  }

  drink () {
    this.parse.menus.drinks.map(res => {
      this.drinkLoop += `
      <li>${res.name}</li>
      `
    })
    this.drinkLoop += `</ul>`
  }

  render () {
    this.innerHTML = `
      <jumbotron-component dataName='${this.parse.name}' dataAddr='${this.parse.address}' dataCity='${this.parse.city}' bg='https://restaurant-api.dicoding.dev/images/large/${this.parse.pictureId}'></jumbotron-component>
      <div id="skip" class="content-detail">
        <div class="rating-detail">
        <i class="fa fa-star" aria-hidden="true"></i>
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
      `
  }
}
customElements.define("detail-component", Detail)
