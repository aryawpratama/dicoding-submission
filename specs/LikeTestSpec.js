/* eslint-disable no-undef */
import '../src/scripts/Components/FavoriteButton/FavoriteButton'
import { DBController, DBDrop, DBInit } from '../src/scripts/Data/FavouriteIDB'
const data = {
  id: 'rqdv5juczeskfw1e867',
  name: 'Melting Pot',
  pictureId: '14',
  city: 'Medan',
  rating: 4.2
}
const str = JSON.stringify(data)
describe('Favorite a restaurant', () => {
  beforeEach(async () => {
    DBInit()
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
      expect(res).toEqual(data)
    })
  })
  it('Should show the favorited button', () => {
    expect(document.getElementsByClassName('favorited')).toBeTruthy()
  })
  it('Should show the favorite button', () => {
    document.querySelector('#favorite').dispatchEvent(new Event('click'))
    document.querySelector('#favorite').dispatchEvent(new Event('click'))
    DBController.get(data.id).then((res) => {
      expect(res).not.toEqual(data)
    })
  })
  afterEach(() => {
    DBDrop()
  })
})
