import axios from 'axios'
import Swal from 'sweetalert2'
import CONFIG from '../../Global/Config'
import UrlParser from '../Parser'
const Detail = {
  async render () {
    return `
    <loader-component></loader-component>
    <div id="load"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    axios.get(`${CONFIG.BASE_API_URL}/detail/${url.id}`).then(res => {
      const data = res.data.restaurant
      const stringify = JSON.stringify(data)
      document.querySelector('loader-component').remove()
      document.querySelector('#load').innerHTML = `
        <detail-component data='${stringify}'></detail-component>
      `
    }).catch(err => {
      const url = window.location.href.split('/')[1] + '/#'
      if (!err.response) {
        Swal.fire({
          icon: 'error',
          title: 'Opss...',
          text: 'This page not available when offline'

        }).then(() => {
          window.location = url
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to load data',
          text: `${err.response.status}`
        }).then(() => {
          window.location = url
        })
      }
    })
  }
}
export default Detail
