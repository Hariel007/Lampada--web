const on = document.getElementById('On');
const off = document.getElementById('Off');
const lamp = document.getElementById('lamp');


function lampOn(){
    lamp.src = './img/ligada.png';
}

function lampOff(){
    lamp.src = './img/desligada.png';
}

On.addEventListener('click',lampOn);
Off.addEventListener('click',lampOff);