// #LhSfdhM3
let now:Date = new Date();
console.log(now);

localStorage.getItem('now');
localStorage.setItem('now', JSON.stringify(now));

const sessionsListRaw = JSON.parse(localStorage.getItem('sessionsList') || "[]");
const sessionsList: Date[] = sessionsListRaw.map((d: string) => new Date(d));

sessionsList.push(now);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));