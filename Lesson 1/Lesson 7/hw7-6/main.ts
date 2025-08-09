// #gsKLAsNWM
export {};

declare global {
    interface Array<T> {
        customForEach(callback: (value: T, index: number, array: T[]) => void): void;
        customFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
    }
}

Array.prototype.customForEach = function<T>(callback: (value: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.customFilter = function<T>(callback: (value: T, index: number, array: T[]) => boolean): T[] {
    const filteredArray: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

const array7: number[] = [1, 2, 3, 4, 5, 6];

array7.customForEach((element:number, index:number):void => {
    console.log(`${index}:${element}`);
});

const filteredArr:number[] = array7.customFilter((element:number):boolean => element % 2 === 0);
console.log(filteredArr);


