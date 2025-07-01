// #AiN5CoUQ
function deepFunction (obj){
    if(obj){
        let functions = [];


        for(const key in obj){
            if(typeof obj[key] === 'function'){
                const functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const clone=  JSON.parse(JSON.stringify(obj));

        for(const func of functions){
            clone[func.key]=func.functionClone;
        }
        console.log(clone);
        return clone;
    }
}

const result = deepFunction({
    name: 'Alina',
    age: 22,
    greet() {
        console.log('Hi!');
    }
});

result.greet();
