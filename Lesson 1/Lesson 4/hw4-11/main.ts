// #EKRNVPM
function summa(arr:number[]):number{
    let value:number = 0;
    for(let item:number = 0; item < arr.length; item++) {
        value += arr[item];
    }
    return(value);
}

console.log(summa([1,2,10]));