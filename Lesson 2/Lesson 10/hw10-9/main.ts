// #bq1zkx7WP
const cash:HTMLDivElement = document.createElement('div');

let cashValue:number;
const storedCash: string|null = localStorage.getItem('cash');
if (storedCash === null) {
    cashValue = 100;
} else {
    cashValue = parseInt(storedCash, 10);
}

const timeNow:number = Date.now();
const localTime:string|null = localStorage.getItem('timeNow');
const timeSecund:number = 10 * 1000;

if(localTime === null || (timeNow - parseInt(localTime, 10) >= timeSecund)) {
    cashValue += 10;

    localStorage.setItem('cash', cashValue.toString());
    localStorage.setItem('timeNow', timeNow.toString());
}

cash.innerText = cashValue + 'грн';
document.body.appendChild(cash);