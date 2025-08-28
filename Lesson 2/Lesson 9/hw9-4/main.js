"use strict";
// #Kx1xgoKy8
let coursesAndDurationArray9 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const course of coursesAndDurationArray9) {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('item');
    const courseTitle = document.createElement('h1');
    courseTitle.classList.add('heading');
    courseTitle.innerText = course.title;
    const courseDescr = document.createElement('p');
    courseDescr.classList.add('description');
    courseDescr.innerText = course.monthDuration.toString();
    courseDiv.append(courseTitle, courseDescr);
    document.body.append(courseDiv);
}
