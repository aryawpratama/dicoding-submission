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
describe('Favorite a restaurant', () => {
  beforeEach(async () => {
    DBInit()
    document.body.innerHTML = `<fav-button data='${str}'></fav-button>`
    await DBController.delete(data.id)
  })
  it('Should show the custom element favorite button', () => {
    expect(document.querySelector('#favorite')).toBeTruthy()
  })
  it('Should show the favorite button', () => {
    expect(document.getElementsByClassName('favorite')).toBeTruthy()
  })
  it('Should show the favorited button', async () => {
    document.querySelector('#favorite').dispatchEvent(new Event('click'))
    await DBController.get(data.id).then((res) => {
      let favorited = null
      favorited = res
      expect(favorited).toEqual(data)
    })
      .catch((err) => {
        console.log(err)
        expect(err).toThrowError()
      })
  })
})
describe('Unfavorite a restaurant', () => {
  beforeEach(() => {
    document.body.innerHTML = `<fav-button data='${str}'></fav-button>`
  })
  it('Should show the unfavorite button', () => {
    expect(document.getElementsByClassName('favorited')).toBeTruthy()
  })
  it('Should show the favorite button', async () => {
    await DBController.delete(data.id).then(() => {
      document.querySelector('#favorite').dispatchEvent(new Event('click'))
      document.querySelector('#favorite').dispatchEvent(new Event('click'))
      DBController.get(data.id).then((res) => {
        let favorited = null
        favorited = res
        expect(favorited).not.toEqual(data)
      })
        .catch((err) => {
          expect(err).toThrowError()
        })
    })
  })
})
