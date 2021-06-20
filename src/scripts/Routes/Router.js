import UrlParser from './Parser'
import Routes from './Routes'
const content = document.querySelector('#main')
const Router = {
  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = Routes[url]
    content.innerHTML = await page.render()
    await page.afterRender()
  }
}
export default Router
