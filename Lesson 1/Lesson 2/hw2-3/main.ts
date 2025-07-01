// #LARqoUj5I
type Author = {name:string, age:number}
type Book = {title:string, pageCount:number, genre:string, authors:Author[]}

let book11:Book =  {
    title: 'Я бачу, вас цікавить пітьма',
    pageCount: 639,
    genre: 'Фікшн',
    authors: [
        {name:'Ілларіон Павлюк', age:44},
        {name:'Коллін Гувер', age:45}
    ]
}
console.log(book11);

let book22:Book =  {
    title: 'Залишся, якщо кохаєш',
    pageCount: 288,
    genre: 'Любовний роман',
    authors: [
        {name:'Коллін Гувер', age:45},
        {name:'Ілларіон Павлюк', age:44}
    ]
}
console.log(book22);

let book33:Book=  {
    title: 'Переломний рік. 365 днів, щоб стати людиною, якою ви справді хочете бути',
    pageCount: 384,
    genre: 'Книги по психології',
    authors: [
        {name:'Бріанна Вест', age:32},
        {name:'Ілларіон Павлюк', age:44}
    ]
}
console.log(book33);