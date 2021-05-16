import "./Jumbotron.css";
class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.background = this.getAttribute("bg");
        this.render();
        document.querySelector(
            ".jumbo"
        ).style.backgroundImage = `url(${this.background})`;
    }
    render() {
        this.innerHTML = `
        <div class="jumbo">
            <div class="jumbo-content">
                <h1>This is Jumbotron</h1>
            </div>
        </div>
    `;
    }
}
customElements.define("jumbotron-component", Jumbotron);