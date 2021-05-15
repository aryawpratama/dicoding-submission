import "regenerator-runtime";
import "../styles/main.css";
// Components
import "./Components/Navbar/Navbar.js";
import "./Components/Jumbotron/Jumbotron.js"
// Data
import data from "../DATA.json";
const dataJSON = JSON.stringify(data);
// Render
const root = document.querySelector(".root");
const rootRender = () => {
    root.innerHTML = `
        <nav-bar logo='https://www.ariasydney.com.au/sites/ariasyd/files/Aria_Favicon.png'></nav-bar>
        <jumbo-tron></jumbo-tron>
    `;
};

rootRender();