// #XjJuucOMR0
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(1, 'Anna', 'Ivanova', 'anna1@gmail.com', '0970000001'),
    new User(2, 'Bohdan', 'Petrov', 'bohdan2@gmail.com', '0970000002'),
    new User(3, 'Kateryna', 'Shevchenko', 'katya3@gmail.com', '0970000003'),
    new User(4, 'Dmytro', 'Sydorenko', 'dima4@gmail.com', '0970000004'),
    new User(5, 'Olha', 'Koval', 'olha5@gmail.com', '0970000005'),
    new User(6, 'Serhii', 'Tkachenko', 'serhii6@gmail.com', '0970000006'),
    new User(7, 'Yulia', 'Melnyk', 'yulia7@gmail.com', '0970000007'),
    new User(8, 'Oleh', 'Rudenko', 'oleh8@gmail.com', '0970000008'),
    new User(9, 'Iryna', 'Hrytsenko', 'iryna9@gmail.com', '0970000009'),
    new User(10, 'Vladyslav', 'Bondar', 'vlad10@gmail.com', '0970000010')
];

console.log(users);


// #2ikXsE2WiKZ
const filterArr = users.filter((user) => user.id % 2 === 0);
console.log(filterArr);

// #pOeHKct
const sortArr = users.sort ((user1, user2) => user1.id - user2.id);
console.log(sortArr);
