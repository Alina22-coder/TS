// #SIdMd0hQ
function arrayFunction (arr:(string|number|boolean)[]):(string|number|boolean)[]{
    for (let array of arr){
        console.log(array);
    }
    return arr;
}
arrayFunction ([false, 'Hello', -76214, 'Five', 'Good', 'Heart', 'Something', true , 962857, 'Robot']);