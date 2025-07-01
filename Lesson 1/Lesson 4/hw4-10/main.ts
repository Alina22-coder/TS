// #pghbnSB
function arrayFunctionNum (arr:number[]):number {
    let min:number = arr[0];

    for(let item:number = 1; item < arr.length; item++){
        if(arr[item] < min){
            min = arr[item];
        }
    }

    return min;
}

console.log(arrayFunctionNum([2,17,13,6,22,31,45,66,100,-18]));