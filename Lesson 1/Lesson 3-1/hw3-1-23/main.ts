const numberArray:number[] = [464, 468, 23, 8646, 221, 3, 86, 764, 57, 11];
const emptyArr:number[] = [];

for (let i:number =0; i<numberArray.length; i++){
    emptyArr.push(numberArray[i]);
}
console.log(emptyArr);
console.log(numberArray);
console.log(numberArray === emptyArr)