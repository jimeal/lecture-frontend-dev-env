import './style.css'
import nyancat from './nyancat.jpg'

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src="${nyancat}" alt="nyancat">`
})