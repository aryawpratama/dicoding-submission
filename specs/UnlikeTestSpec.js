/* eslint-disable no-undef */
// import '../src/scripts/Components/FavoriteButton/FavoriteButton'
import { DBController, DBInit } from '../src/scripts/Data/FavouriteIDB'
const data = {
  id: 's1knt6za9kkfw1e867',
  name: 'Kafe Kita',
  description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ...',
  pictureId: '25',
  city: 'Gorontalo',
  rating: 4
}
const str = JSON.stringify(data)
DBInit()
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
  afterAll(async () => {
    await DBController.delete(data.id)
  })
})
