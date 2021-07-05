import axios from 'axios'
import Swal from 'sweetalert2'
import CONFIG from '../../Global/Config'
const Root = {
  async render () {
    return `
    <jumbotron-component></jumbotron-component>      
    <loader-component></loader-component>
    <div id="load"></div>
    `
  },
  async afterRender () {
    const dataFetch = async () => {
      axios.get(`${CONFIG.BASE_API_URL}/list`)
        .then(res => {
          const data = JSON.stringify(res.data.restaurants)
          document.querySelector('loader-component').remove()
          document.querySelector('#load').innerHTML = `
        <content-component data='${data}'></content-component>
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
