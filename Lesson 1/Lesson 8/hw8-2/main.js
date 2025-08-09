"use strict";
// #iz6emEsP2BA
class Course81 {
    constructor(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}
class Course82 extends Course81 {
    constructor(title, monthDuration, id) {
        super(title, monthDuration);
        this.id = id;
    }
}
const coursesAndDurationArray8 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
console.log(coursesAndDurationArray8.map((course, index) => ({ id: index + 1, ...course })));
