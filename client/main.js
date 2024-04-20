//import './style.css'
//import rocketLogo from './rocket.png'

fetch('/index.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html;
  })
  .catch(error => {
    console.error('Fehler beim Laden der HTML-Datei:', error);
  });