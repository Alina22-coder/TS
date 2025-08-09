// #XjJuucOMR0
class User7 {
    id:number;
    name:string;
    surname:string;
    email:string;
    phone:string;

    constructor (id:number, name:string, surname:string, email:string, phone:string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
}

const usersNew:User7[] = [
    new (User7 as any)(1, 'Anna', 'Ivanova', 'anna1@gmail.com', '0970000001'),
    new (User7 as any)(2, 'Bohdan', 'Petrov', 'bohdan2@gmail.com', '0970000002'),
    new (User7 as any)(3, 'Kateryna', 'Shevchenko', 'katya3@gmail.com', '0970000003'),
    new (User7 as any)(4, 'Dmytro', 'Sydorenko', 'dima4@gmail.com', '0970000004'),
    new (User7 as any)(5, 'Olha', 'Koval', 'olha5@gmail.com', '0970000005'),
    new (User7 as any)(6, 'Serhii', 'Tkachenko', 'serhii6@gmail.com', '0970000006'),
    new (User7 as any)(7, 'Yulia', 'Melnyk', 'yulia7@gmail.com', '0970000007'),
    new (User7 as any)(8, 'Oleh', 'Rudenko', 'oleh8@gmail.com', '0970000008'),
    new (User7 as any)(9, 'Iryna', 'Hrytsenko', 'iryna9@gmail.com', '0970000009'),
    new (User7 as any)(10, 'Vladyslav', 'Bondar', 'vlad10@gmail.com', '0970000010')
];

console.log(usersNew);


// #2ikXsE2WiKZ
const filterArr:User7[] = usersNew.filter((user:User7):boolean => user.id % 2 === 0);
console.log(filterArr);

// #pOeHKct
const sortArr:User7[] = usersNew.sort ((user1:User7, user2:User7):number => user1.id - user2.id);
console.log(sortArr);