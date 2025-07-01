// #bovDJDTIjt
let arrFunctionTs:(arr:{id:number, name:string, age:number}[])=>void  = (arr:{id:number, name:string, age:number}[]):void => {
    for (let i:number =0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id}, ${arr[i].name}, ${arr[i].age}</div>`);
    }
}
arrFunctionTs([{id:0, name:'Alina', age:22},{id:1, name:'Alina', age:45},{id:2, name:'Alina', age:86}]);