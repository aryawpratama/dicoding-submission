import "./Footer.css";

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <footer>
        
        </footer>
        `;
  }
}
customElements.define("footer-component", Footer);
