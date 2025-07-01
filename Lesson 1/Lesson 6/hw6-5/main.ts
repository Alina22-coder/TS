// #bfoJuse4ZzP
function stringToArray(str:string):string[]{
    if (str){
        let strSplit:string[] = str.split(' ');
        return strSplit;
    }
    return [''];
}
console.log(stringToArray('Ревуть воли як ясла повні'));