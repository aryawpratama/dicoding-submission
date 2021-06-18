import "./Detail.css"

class Detail extends HTMLElement {
  connectedCallback () {
    this.data = this.getAttribute("data")
    this.parse = JSON.parse(this.data)
    this.render()
  }

  render () {
    this.innerHTML = `
      <p>${this.data}</p>
      `
  }
}
customElements.define("detail-component", Detail)
