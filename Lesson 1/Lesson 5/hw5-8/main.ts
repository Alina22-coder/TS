// #gEFoxMMO
const arrayFunctionTs:(arr:(string|number|boolean)[])=>void = (arr:(string|number|boolean)[]):void => {
    document.write(`<ul>`);
    for (let i:number = 0; i<arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
arrayFunctionTs([10, 16, 'Alina', true, 6893702, false]);