import "./Footer.css";

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <footer>
        <p>copyright &#169; 2021 - Aria Explore Apps</p>
        </footer>
        `;
  }
}
customElements.define("footer-component", Footer);
