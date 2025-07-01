const arrOne:number[] = [15, 78, 664, 6843, 868, 5, 46, 458, 24]
let arrTwo:number[] = []
for (let i:number = 0; i < arrOne.length; i++){
    arrTwo.push(arrOne[i]*5)
}
console.log(arrTwo);