import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./Components/Navbar/Navbar.js";
const root = document.querySelector(".root");
import data from "../DATA.json";
console.log(data);
const dataJSON = JSON.stringify(data);
const rootRender = () => {
  root.innerHTML = `
        <nav-bar></nav-bar>
    `;
};

rootRender();
