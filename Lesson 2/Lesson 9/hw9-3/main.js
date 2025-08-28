"use strict";
// #jeBqHV525U5
let coursesAndDurationArrayTs = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (let course of coursesAndDurationArrayTs) {
    const courseDiv = document.createElement('div');
    courseDiv.innerText = `${course.title} ${course.monthDuration}`;
    document.body.append(courseDiv);
}
