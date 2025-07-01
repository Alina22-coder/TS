// #mkGDenYnNjn
function exchange(sumUAH:number,currencyValues:{currency:string, value:number}[],exchangeCurrency:string):number|undefined{
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'USD'));
console.log(exchange(10000, [{currency:'USD', value:25}, {currency:'EUR', value:42}], 'EUR'));