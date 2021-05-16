import "./Navbar.css";
class Navbar extends HTMLElement {
    connectedCallback() {
        this.logo = this.getAttribute("logo");
        this.render();
    }
    render() {
        this.innerHTML = `
    <nav>
        <h1 class="logo">${this.logo}</h1>
        <div class="desktop">
            <ul class="navigation-desktop">
                <li><a href="/">Home</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="https://github.com/aryawpratama">About Us</a></li>
            </ul>
        </div>
        <div class="mobile">
            <button class="bar">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div class="dropdown">
                <ul class="navigation-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="https://github.com/aryawpratama">About Us</a></li>
                </ul>
            </div>
            <div class="overlay"></div>
        </div>
    </nav>
    `;
    }
}
customElements.define("nav-bar", Navbar);