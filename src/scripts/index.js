import 'regenerator-runtime'
import '../styles/main.css'
import $ from 'jquery'
import Router from './Routes/Router'
// Components
import './Components/Navbar/Navbar.js'
import './Components/Jumbotron/Jumbotron.js'
import './Components/Content/Content.js'
import './Components/Footer/Footer.js'
import './Components/Detail/DetailComponent.js'
import './Components/Loader/Load.js'
// Button onClick
$('.bar').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('active')
  $('.dropdown').toggleClass('down')
})
// Document onScroll
$(document).on('scroll', function (e) {
  $(this).removeClass('down')
  $('.dropdown').removeClass('down')
  $('.bar').removeClass('active')
})
$("#main").on('click', function (e) {
  $(this).removeClass('down')
  $('.dropdown').removeClass('down')
  $('.bar').removeClass('active')
})
// Router
window.addEventListener('hashchange', () => {
  Router.renderPage()
})
window.addEventListener('load', () => {
  Router.renderPage()
})
