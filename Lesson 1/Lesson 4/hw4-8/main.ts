// #gEFoxMMO
type Primitive = boolean | string | number;

function arrFunction(arr:Primitive[]):void{
    document.write(`<ul>`);
    for(let item:number = 0; item < arr.length; item++){
        document.write(`<li>${arr[item]}</li>`)

    }
    document.write(`</ul>`);
}

arrFunction([2, true, 13, -6, '22', 31, 'My name', false, 100, 'Alina']);