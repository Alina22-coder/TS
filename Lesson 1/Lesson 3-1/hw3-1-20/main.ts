const someArr:(string|number|boolean)[] = [15, 'alina', 664, 6843, true, 5, 46, 458, 'ok', false];
let numArray:(string|number|boolean)[] = [];
for(let j:number = 0; j < someArr.length; j++){
    if(typeof someArr[j] === 'number'){
        numArray.push(someArr[j]);
    }
}
console.log(numArray);