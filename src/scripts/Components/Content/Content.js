import "./Content.css"

class Content extends HTMLElement {
    connectedCallback() {
        this.data = this.getAttribute("data");
        this.dataJSON = JSON.parse(this.data);
        console.log(this.dataJSON);
        this.contentLoop = '';
        this.dataJSON.restaurants.map((e) => {
            this.contentLoop += `
            <div id='${e.id}' class="card">
                <img class="resto" src='${e.pictureId}' alt="Resto Picture">
                <img class="rating" src="/images/rating.png" alt="Rating">
                <p>${e.rating}</p>
                <h1>${e.name}</h1>
                <h2>${e.city}</h2>
                <p class='overflow'>${e.description}</p>
            </div>
            `
        })
        this.render();
    }
    render() {
        this.innerHTML = `
        <h1 class='title'>Explore</h1>
        <div class="content">
        ${this.contentLoop}
        </div>
        `;
    }
}
customElements.define("content-component", Content);