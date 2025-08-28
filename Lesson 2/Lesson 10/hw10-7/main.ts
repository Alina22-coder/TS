// #RbQGnH5DuC
function addToLocalStorage<T> (arrayName:string , objToAdd:T):void{
    const storedData= localStorage.getItem(arrayName);
    let arr:T[];

    if (storedData){
        arr = JSON.parse(storedData) as T[];
    } else {
        arr = [];
    }

    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

addToLocalStorage<{name:string, value:number}>('newArray', {name: 'Test', value: 123});