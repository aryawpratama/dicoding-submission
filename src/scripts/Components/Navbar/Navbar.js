import "./Navbar.css";
class Navbar extends HTMLElement {
  connectedCallback() {
    this.data = this.getAttribute("data-json");
    this.decoded = JSON.parse(this.data);
    this.render();
  }
  render() {
    this.innerHTML = `
    <nav>
        <h1>TEST</h1>
    </nav>
    `;
  }
}
customElements.define("nav-bar", Navbar);
