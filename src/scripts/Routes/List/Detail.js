import axios from "axios"
import UrlParser from "../Parser"

const Detail = {
  async render () {
    return `
    <loader-component></loader-component>
    <div id="load"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    axios.get(`https://restaurant-api.dicoding.dev/detail/${url.id}`).then(res => {
      const data = res.data.restaurant
      const stringify = JSON.stringify(data)
      document.querySelector("loader-component").remove()
      document.querySelector("#load").innerHTML = `
      <detail-component data='${stringify}'></detail-component>
      `
    })
  }
}
export default Detail
