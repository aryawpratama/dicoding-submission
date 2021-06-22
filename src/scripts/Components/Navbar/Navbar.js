import './Navbar.css'
class Navbar extends HTMLElement {
  connectedCallback () {
    this.logo = this.getAttribute('logo')
    this.render()
  }

  render () {
    this.innerHTML = `
    <nav>
        <button id="skip-content" class="skipcontent">Skip to Content</button>
        <a href="#/" class="logo">${this.logo}</a>
        <div class="desktop">
            <ul class="navigation-desktop">
                <li><a href="#/">Home</a></li>
                <li><a href="#/favorite">Favorites</a></li>
                <li><a href="https://github.com/aryawpratama">About Us</a></li>
            </ul>
        </div>
        <div class="mobile">
            <button aria-label="dropdown button" class="bar">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div class="dropdown">
                <ul class="navigation-mobile">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/favorite">Favorites</a></li>
                    <li><a href="https://github.com/aryawpratama">About Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `
  }
}
customElements.define('nav-bar', Navbar)
