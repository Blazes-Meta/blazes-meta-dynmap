//import './style.css'
//import rocketLogo from './rocket.png'

// main.js

// Hier wird der Inhalt der HTML-Datei in die Webseite eingefügt
fetch('/index.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html;
  })
  .catch(error => {
    console.error('Fehler beim Laden der HTML-Datei:', error);
  });

// document.querySelector('#app').innerHTML = `
//   <div>
    
//     <h1>Hello, World!</h1>
//     <p>test js</p>
//     <iframe id="frame" src="/map"></iframe>
//   </div>
// `;

//<img src="${rocketLogo}" class="logo" alt="Discord" />