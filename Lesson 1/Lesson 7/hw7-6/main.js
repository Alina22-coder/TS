"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
Array.prototype.customFilter = function (callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};
const array7 = [1, 2, 3, 4, 5, 6];
array7.customForEach((element, index) => {
    console.log(`${index}:${element}`);
});
const filteredArr = array7.customFilter((element) => element % 2 === 0);
console.log(filteredArr);
