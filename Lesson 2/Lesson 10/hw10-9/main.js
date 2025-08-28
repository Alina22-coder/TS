"use strict";
// #bq1zkx7WP
const cash = document.createElement('div');
let cashValue;
const storedCash = localStorage.getItem('cash');
if (storedCash === null) {
    cashValue = 100;
}
else {
    cashValue = parseInt(storedCash, 10);
}
const timeNow = Date.now();
const localTime = localStorage.getItem('timeNow');
const timeSecund = 10 * 1000;
if (localTime === null || (timeNow - parseInt(localTime, 10) >= timeSecund)) {
    cashValue += 10;
    localStorage.setItem('cash', cashValue.toString());
    localStorage.setItem('timeNow', timeNow.toString());
}
cash.innerText = cashValue + 'грн';
document.body.appendChild(cash);
