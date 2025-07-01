const numArr:number[] = [100,250,50,168,120,345,188];
let sum:number = 0;
for (let i:number = 0; i < numArr.length; i++){
    sum+=numArr[i] / 2
}
console.log(sum)