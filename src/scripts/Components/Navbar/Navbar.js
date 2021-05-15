import "./Navbar.css";
class Navbar extends HTMLElement {
    connectedCallback() {
        this.logo = this.getAttribute('logo');
        this.render();
    }
    render() {
        this.innerHTML = `
    <nav>
        <img class="logo" src="${this.logo}" alt="Logo">
        <div class="desktop">
            <ul class="navigation-desktop">
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="https://github.com/aryawpratama">About Us</a></li>
            </ul>
        </div>
        <div class="mobile">
            <div class="bar">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="dropdown">
                <ul class="navigation-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="https://github.com/aryawpratama">About Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    }
}
customElements.define("nav-bar", Navbar);