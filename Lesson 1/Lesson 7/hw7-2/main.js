// #nkMXISv
function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, 'Anna', 'Ivanova', 'anna1@gmail.com', '0970000001', ['aa', 'cc', 'dd']),
    new Client(2, 'Bohdan', 'Petrov', 'bohdan2@gmail.com', '0970000002', ['bb', 'ff', 'ss', 'tt']),
    new Client(3, 'Kateryna', 'Shevchenko', 'katya3@gmail.com', '0970000003', ['yy', 'cc', 'ss', 'rr', 'oo', 'pp']),
    new Client(4, 'Dmytro', 'Sydorenko', 'dima4@gmail.com', '0970000004', ['aa', 'bb', 'cc', 'uu', 'qq']),
    new Client(5, 'Olha', 'Koval', 'olha5@gmail.com', '0970000005', ['aa', 'bb', 'cc', 'dd']),
    new Client(6, 'Serhii', 'Tkachenko', 'serhii6@gmail.com', '0970000006', ['ff', 'dd', 'tt', 'aa']),
    new Client(7, 'Yulia', 'Melnyk', 'yulia7@gmail.com', '0970000007',['pp', 'gg', 'dd', 'rr', 'mm', 'nn']),
    new Client(8, 'Oleh', 'Rudenko', 'oleh8@gmail.com', '0970000008', ['ss', 'hh', 'ii', 'dd']),
    new Client(9, 'Iryna', 'Hrytsenko', 'iryna9@gmail.com', '0970000009', ['ii', 'pp']),
    new Client(10, 'Vladyslav', 'Bondar', 'vlad10@gmail.com', '0970000010', ['aa', 'bb', 'cc', 'dd', 'rr', 'qq'])
];
console.log(clients);

// #8abtVjRv
const sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClients);







