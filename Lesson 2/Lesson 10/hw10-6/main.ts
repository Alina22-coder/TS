// #Jg0gPO00
const inputTen:HTMLInputElement = document.createElement('input');
inputTen.type = 'number';

const p:HTMLParagraphElement = document.createElement('p');

inputTen.addEventListener('input', function():void {
    let kilograms:number  =parseFloat(inputTen.value);
    if (!isNaN(kilograms)) {
        const pounds:number = kilograms * 2.20462;
        p.innerHTML = pounds.toFixed(2);
    } else {
        p.innerText = '';
    }

})

document.body.appendChild(inputTen);
document.body.appendChild(p);