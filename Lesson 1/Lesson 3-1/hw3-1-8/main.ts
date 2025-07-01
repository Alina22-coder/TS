// #9stMq2ou
let asdj:(string|number|boolean)[] = [false, 'Hello', -76214, 'Five', 'Good', 'Heart', 'Something', true , 962857, 'Robot'];

let array3:number = 0;
while(array3 < asdj.length){
    if(typeof asdj[array3] === 'number'){
        console.log(typeof asdj[array3], asdj[array3]);
    }
    array3++;
}