"use strict";
// #RbQGnH5DuC
function addToLocalStorage(arrayName, objToAdd) {
    const storedData = localStorage.getItem(arrayName);
    let arr;
    if (storedData) {
        arr = JSON.parse(storedData);
    }
    else {
        arr = [];
    }
    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}
addToLocalStorage('newArray', { name: 'Test', value: 123 });
