// #AiN5CoUQ
function deepFunction<T extends object>(obj: T): T {
    const functions: Array<{ functionClone: Function; key: string }> = [];

    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            const functionClone = (obj[key] as Function).bind({});
            functions.push({ functionClone, key });
        }
    }

    const clone = JSON.parse(JSON.stringify(obj)) as T;

    for (const func of functions) {
        (clone as any)[func.key] = func.functionClone;
    }

    return clone;
}

const result:{name:string, age:number, greet():void} = deepFunction({
    name: 'Alina',
    age: 22,
    greet(): void {
        console.log('Hi!');
    }
});

result.greet();