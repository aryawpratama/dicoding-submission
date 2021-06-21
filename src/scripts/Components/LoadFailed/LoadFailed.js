import './LoadFailed.css'
class LoadFailed extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="failed">
        <img src="/images/warn.png" alt="Error">
          <h1>Failed to load</h1>
        </div>
        `
  }
}
customElements.define('load-failed', LoadFailed)
