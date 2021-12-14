let htmlRequest = new XMLHttpRequest();
htmlRequest.open('GET', 'https://raw.githubusercontent.com/CombatDeckard/automated-portfolio/main/index.html');
htmlRequest.onload = function() {
    console.log(htmlRequest.response);
    let x = document.getElementById('htmlCode');
    x.innerText = htmlRequest.response;
}
htmlRequest.send();

let cssRequest = new XMLHttpRequest();
cssRequest.open('GET', 'https://raw.githubusercontent.com/CombatDeckard/automated-portfolio/main/style.css');
cssRequest.onload = function() {
    console.log(cssRequest.response);
    let x = document.getElementById('cssCode');
    x.innerText = cssRequest.response;
}
cssRequest.send();

let jsRequest = new XMLHttpRequest();
jsRequest.open('GET', 'https://raw.githubusercontent.com/CombatDeckard/automated-portfolio/main/main.js');
jsRequest.onload = function() {
    console.log(jsRequest.response);
    let x = document.getElementById('jsCode');
    x.innerText = jsRequest.response;
}
jsRequest.send();

