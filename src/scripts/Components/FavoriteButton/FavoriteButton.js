import $ from 'jquery'
import { DBController } from '../../Data/FavouriteIDB'
class FavButton extends HTMLElement {
  connectedCallback () {
    this.indexedDB = { id: null }
    this.data = this.getAttribute('data')
    this.parse = null
    if (this.dataParsing()) {
      this.databaseFetch()
      this.render()
      this.favoriteButton()
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

  databaseFetch () {
    DBController.get(this.parse.id).then(res => {
      if (res !== undefined) {
        this.indexedDB = res
        if (this.parse.id === this.indexedDB.id) {
          $('#favorite').removeClass('favorite')
          $('#favorite').addClass('favorited')
        }
      } else {
        this.indexedDB = { id: null }
      }
    })
  }

  favoriteButton () {
    this.favorite = document.querySelector('#favorite')
    this.favorite.addEventListener('click', event => {
      event.preventDefault()
      if (this.indexedDB.id === this.parse.id) {
        DBController.delete(this.indexedDB.id)
        $('#favorite').removeClass('favorited')
        $('#favorite').addClass('favorite')
      } else {
        DBController.add(this.parse)
        $('#favorite').removeClass('favorite')
        $('#favorite').addClass('favorited')
      }
      this.databaseFetch()
    })
  }

  render () {
    this.innerHTML = `
        <button class='favorite' id="favorite"><i class="fa fa-heart" aria-hidden="true"></i></button>
        `
  }
}
customElements.define('fav-button', FavButton)
