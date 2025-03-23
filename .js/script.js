const secondHand = document.querySelector('.second-hand')

const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

setInterval(() => { 
   const{hours, minutes, seconds} = getTime();


   const secAngle = seconds * 6;
   secondHand.textContent = String(seconds + " ").repeat(10);
   secondHand.style.transform = `translateY(-50%) rotate(${secAngle}deg)`;
}, 1000)