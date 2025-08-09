// #EKRNVPM
const sumTs:(arr:number[])=>number = (arr:number[]):number => {
    let value:number = 0
    for (let i:number = 0; i < arr.length; i++){
        value+= arr[i];
    }
    return value;

}
console.log(sumTs([1,2,10]));