import 'regenerator-runtime'
import '../styles/main.css'
import $ from 'jquery'
// Components
import './Components/Navbar/Navbar.js'
import './Components/Jumbotron/Jumbotron.js'
import './Components/Content/Content.js'
import './Components/Footer/Footer.js'
// Data
import data from '../DATA.json'

const dataJSON = JSON.stringify(data)
const logo = 'Aria'
const jumbotronBg = 'images/heros/hero-image_2.jpg'
// Render
const root = document.querySelector('.root')
const rootRender = () => {
  root.innerHTML = `
    <a href="#explore" class="skipcontent">Skip to Content</a>
        <nav-bar logo='${logo}'></nav-bar>
        <jumbotron-component bg='${jumbotronBg}'></jumbotron-component>
        <content-component data='${dataJSON}'></content-component>
        <footer-component></footer-component>
        `
}
rootRender()
// Additional
const nav = document.querySelector('nav')
// Button onClick
$('.bar').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('active')
  $('.dropdown').toggleClass('down')
})
// Document onScroll
document.addEventListener('scroll', function (e) {
  $(this).removeClass('down')
  $('.dropdown').removeClass('down')
  $('.bar').removeClass('active')
  if (window.scrollY >= 371) {
    nav.style.background = 'rgba(0, 0, 0, 0.8)'
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0)'
  }
})
