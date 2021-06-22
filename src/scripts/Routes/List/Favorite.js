import Swal from 'sweetalert2'
import { DBController } from '../../Data/FavouriteIDB'
const Root = {
  async render () {
    return `
    <loader-component></loader-component>
    <div id="load"></div>
    `
  },
  async afterRender () {
    const dataFetch = async () => {
      DBController.getAll()
        .then(res => {
          const data = JSON.stringify(res)
          document.querySelector('loader-component').remove()
          document.querySelector('#load').innerHTML = `     
        <fav-component data='${data}'></fav-component>
          `
        }).catch(err => {
          if (!err.response) {
            Swal.fire({
              icon: 'error',
              title: 'Opss...',
              text: 'This page is not available when offline'

            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Failed to load data',
              text: `${err.response.status}`
            })
          }
        })
    }
    dataFetch()
  }
}
export default Root
