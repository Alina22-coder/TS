// #iz6emEsP2BA
class Course81 {
    title: string;
    monthDuration: number;

    constructor(title:string, monthDuration:number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}

class Course82 extends Course81{
    id:number;

    constructor(title:string, monthDuration:number, id:number) {
       super(title, monthDuration);
       this.id = id;
    }
}

const coursesAndDurationArray8:Course81[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray8.map<Course82>((course:Course81, index:number) => ({id: index + 1,...course}))
);

