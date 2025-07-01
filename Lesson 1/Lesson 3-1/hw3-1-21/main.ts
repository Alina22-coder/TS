type UserIdType = {
    id: number,
    name: string,
    age: number,
    status: boolean
}
type CityType = {
    user_id: number,
    country: string,
    city: string,
}

let usersWithId:UserIdType[] = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId:CityType[] = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities:any[] = [];

for (let user of usersWithId){
    for (let city of citiesWithId){
        if (user.id === city.user_id){
            usersWithCities.push({...user, address: {user_id: city.user_id, country: city.country, city: city.city}})
        }
    }
}

console.log(usersWithCities);