const emptyArray:number[] = [];

for(let i:number = 0; i < 100; i++){
    if(i % 2 === 0){
        emptyArray.push(i)
    }
}
console.log(emptyArray);

for(let i:number  = 0; i < 100; i++){
    if(i % 2 !== 0){
        emptyArray.push(i)
    }
}
console.log(emptyArray);

for (let i:number  = 0; i < 20; i++) {
    emptyArray.push(Math.floor(Math.random() * 265));
}
console.log(emptyArray);

for (let i:number  = 0; i < 20; i++){
    let min:number  = Math.ceil(8);
    let max:number  = Math.floor(732);
    emptyArray.push(Math.floor(Math.random() * (max - min)) + min);
}
console.log(emptyArray);

for (let i:number  = 0; i < emptyArray.length; i+=3){
    console.log(emptyArray[i]);
}

for (let i:number  = 0; i < emptyArray.length; i+=3){
    if(emptyArray[i] % 2 === 0){
        console.log(emptyArray[i]);
    }
}

const newArray:number[] = [];
for (let i:number  = 0; i <emptyArray.length; i+=3){
    if(emptyArray[i] % 2 === 0){
        newArray.push(emptyArray[i]);
    }
}
console.log(newArray)

for (let i:number  = 0; i <newArray.length - 1; i++){
    if(newArray[i+1] % 2 === 0){
        console.log(newArray[i])
    }
}