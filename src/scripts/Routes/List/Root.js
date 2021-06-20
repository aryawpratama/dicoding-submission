import axios from 'axios'
const Root = {
  async render () {
    return `
    <loader-component></loader-component>
    <div id="load"></div>
    `
  },
  async afterRender () {
    const dataFetch = async () => {
      axios.get('https://restaurant-api.dicoding.dev/list')
        .then(res => {
          const data = JSON.stringify(res.data.restaurants)
          document.querySelector('loader-component').remove()
          document.querySelector('#load').innerHTML = `
        <jumbotron-component bg='images/heros/hero-image_2.jpg'></jumbotron-component>      
        <content-component data='${data}'></content-component>
          `
        })
    }
    dataFetch()
  }
}
export default Root
