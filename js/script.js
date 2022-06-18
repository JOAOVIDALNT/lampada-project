const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lampada = document.querySelector('#lampada');


function isLampBroken() {
    return lampada.src.indexOf ('quebrada') > -1;
}



turnOn.addEventListener('click', lampOn);

function lampOn() {
    if (!isLampBroken()) {
        lampada.src = "./images/ligada.jpg";
        turnOn.classList.add('invisibleOn')
        turnOff.classList.remove('invisibleOff')
    }
}


turnOff.addEventListener('click', lampOff);

function lampOff() {
    if (!isLampBroken()){
        lampada.src = "./images/desligada.jpg"
        turnOn.classList.remove('invisibleOn')
        turnOff.classList.add('invisibleOff')
        }
}


lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);



function brake() {
    lampada.src =  "./images/quebrada.jpg"
}

lampada.addEventListener('dblclick', brake);

