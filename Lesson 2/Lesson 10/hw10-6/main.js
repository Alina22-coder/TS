"use strict";
// #Jg0gPO00
const inputTen = document.createElement('input');
inputTen.type = 'number';
const p = document.createElement('p');
inputTen.addEventListener('input', function () {
    let kilograms = parseFloat(inputTen.value);
    if (!isNaN(kilograms)) {
        const pounds = kilograms * 2.20462;
        p.innerHTML = pounds.toFixed(2);
    }
    else {
        p.innerText = '';
    }
});
document.body.appendChild(inputTen);
document.body.appendChild(p);
