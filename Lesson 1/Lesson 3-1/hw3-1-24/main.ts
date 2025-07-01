const arrayOne:string[] =  ['a', 'b', 'c'];
let summ:string = '';
for(let i:number = 0; i < arrayOne.length; i++){
    summ += arrayOne[i];
}
console.log(summ);


let y:number = 0;
while(y < arrayOne.length){
    summ+=arrayOne[y];
    y++;
}
console.log(summ);

for(let item of arrayOne){
    summ+=item;
}
console.log(summ);