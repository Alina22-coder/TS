// #pghbnSB
const minValue:(arr:number[])=>number = (arr:number[]):number => {
    let min:number = arr[0];
    for (let i:number = 1; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minValue([9, 5276, 6730, 1094, -85, 0, -2124, 87268]));