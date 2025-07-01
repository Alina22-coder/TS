// #yo06d74c1C
const coursesAndDurationArr:{title:string, monthDuration:number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const map1:{title:string, monthDuration:number, index:number}[] = coursesAndDurationArr
    .sort((a:{title:string, monthDuration:number}, b:{title:string, monthDuration:number}):number => a.monthDuration - b.monthDuration)
    .filter((value:{title:string, monthDuration:number}):boolean  => value.monthDuration > 5)
    .map((value:{title:string, monthDuration:number}, index:number):{title:string, monthDuration:number, index:number} => ({...value, index: index+1}));

console.log(map1);