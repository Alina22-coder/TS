// #gsKLAsNWM
Array.prototype.customForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}
const array = [1, 2, 3, 4, 5, 6];
array.customForEach((element, index) => {
    console.log(`${index}:${element}`);
})




Array.prototype.customFilter = function(callback){
    const filteredArray = [];
    for(let i = 0; i<this.length; i++){
        if (callback(this[i], i, this)){
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}
const arr = [1, 2, 3, 4, 5, 6];
const filteredArr = array.customFilter((element) => {
    return element % 2 === 0
});
console.log(filteredArr);
