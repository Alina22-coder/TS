// #mkGDenYnNjn
let exchangeTs:(
    sumUAH:number,
    currencyValues:{currency:string,value:number}[],
    exchangeCurrency:string)=>number|undefined  =
    (sumUAH:number,currencyValues:{currency:string,value:number}[],exchangeCurrency:string):number|undefined => {
    for (let item of currencyValues){
        if(item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
    return undefined;
}
console.log(exchangeTs(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))