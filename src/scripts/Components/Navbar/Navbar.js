import "./Navbar.css";
class Navbar extends HTMLElement {
    connectedCallback() {
        this.logo = this.getAttribute('logo');
        this.render();
    }
    render() {
        this.innerHTML = `
    <nav>
        <img src="${this.logo}" alt="Logo">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="https://github.com/aryawpratama">About Us</a></li>
        </ul>
    </nav>
    `;
    }
}
customElements.define("nav-bar", Navbar);