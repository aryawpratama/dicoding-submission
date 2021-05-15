import "./Jumbotron.css";
class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="jumbo">
                <h1>This is Jumbotron</h1>
            </div>
    `;
    }
}
customElements.define("jumbo-tron", Jumbotron);