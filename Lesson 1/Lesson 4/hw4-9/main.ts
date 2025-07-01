// #bovDJDTIjt
type AbcdType = {
    id:number,
    name:string,
    age:number,
}

const abcd:AbcdType[] = [
    {id: 0, name: 'Alina', age: 22},
    {id: 1, name: 'Alina', age: 45},
    {id: 2, name: 'Alina', age: 98},
    {id: 3, name: 'Alina', age: 13},
    {id: 4, name: 'Alina', age: 17},
    {id: 5, name: 'Alina', age: 47},
    {id: 6, name: 'Alina', age: 39},
    {id: 7, name: 'Alina', age: 58}
]

function valueFunction(arr:AbcdType[]):void{
    for (let item:number = 0; item < arr.length; item++) {
        document.write(`<div>${(arr[item].id)}, ${(arr[item].name)}, ${(arr[item].age)}</div>`);
    }
}

valueFunction(abcd);