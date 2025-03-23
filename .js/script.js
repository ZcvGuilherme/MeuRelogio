const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

function configureSeconds(seconds) {
    const Angle = seconds * 6 - 90; 
    const space = "    "
    if (seconds < 10) {
        secondHand.textContent = String(seconds + space).repeat(9);  // Adiciona espaçamento para números de 1 dígito
    } else {
        secondHand.textContent = String(seconds + " ").repeat(9);  // Para números de 2 dígitos
    }
    secondHand.style.transform = `rotate(${Angle}deg)`;  // Aplica o ângulo de rotação
}
function configureMinutes(minutes) {
    const Angle = minutes * 6 - 90;
    const space = "    "
    if (minutes < 10){
        minuteHand.textContent = String(minutes + space).repeat(9);
    } else {
        minuteHand.textContent = String(minutes + " ").repeat(9);
    }
    minuteHand.style.transform = `rotate(${Angle}deg)`;
}
function configureHours(hours) {
    const Angle = hours * 15 - 90;
    const space = "    "
    if (hours < 10){
        hourHand.textContent = String(hours + space).repeat(9);
    } else {
        hourHand.textContent = String(hours + " ").repeat(9);
    }
    hourHand.style.transform = `rotate(${Angle}deg)`;
}
setInterval(() => { 
   const {hours, minutes, seconds} = getTime();
   configureSeconds(seconds);
   configureMinutes(minutes);
   configureHours(hours);
}, 1000);
