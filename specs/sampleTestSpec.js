/* eslint-disable no-undef */
import '../src/scripts/Components/FavoriteButton/FavoriteButton'
import { DBController } from '../src/scripts/Data/FavouriteIDB'
const data = {
  id: 'rqdv5juczeskfw1e867',
  name: 'Melting Pot',
  pictureId: '14',
  city: 'Medan',
  rating: 4.2
}
const str = JSON.stringify(data)

describe('Like a restaurant', () => {
  it('Should show the custom element favorite button', () => {
    document.body.innerHTML = `<fav-button data='${str}'></fav-button>`
    expect(document.querySelector('#favorite')).toBeTruthy()
  })
  it('Should show the favorite button', () => {
    expect(document.getElementsByClassName('favorite')).toBeTruthy()
  })
  it('Should show the favorited button', () => {
    document.body.innerHTML = `<fav-button data='${str}'></fav-button>`
    document.querySelector('#favorite').dispatchEvent(new Event('click'))
    // console.log(document.querySelector('#favorite'))
    DBController.get(data.id).then((res) => {
      let favorited = null
      console.log(res)
      favorited = res
      expect(favorited).toEqual(data)
    })
  })
})
