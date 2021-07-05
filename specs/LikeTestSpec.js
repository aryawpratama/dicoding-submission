/* eslint-disable no-undef */
import '../src/scripts/Components/FavoriteButton/FavoriteButton'
import { DBController, DBInit } from '../src/scripts/Data/FavouriteIDB'
const data = {
  id: 'rqdv5juczeskfw1e867',
  name: 'Melting Pot',
  pictureId: '14',
  city: 'Medan',
  rating: 4.2
}
const str = JSON.stringify(data)
DBInit()
describe('Like a restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = `<fav-button data='${str}'></fav-button>`
  })
  it('Should show the custom element favorite button', () => {
    expect(document.querySelector('#favorite')).toBeTruthy()
  })
  it('Should show the favorite button', () => {
    expect(document.getElementsByClassName('favorite')).toBeTruthy()
  })
  it('Should show the favorited button', () => {
    document.querySelector('#favorite').dispatchEvent(new Event('click'))
    DBController.get(data.id).then((res) => {
      let favorited = null
      favorited = res
      expect(favorited).toEqual(data)
    })
      .catch((err) => {
        console.log(err)
        expect(err).toThrowError()
      })
  })
  afterEach(() => {
    DBController.delete(data.id)
  })
})
