// #OPLI89c9G
let arr:string[] = ['Main','Products','About us','Contacts'];
const ul:HTMLUListElement = document.createElement('ul');

for(const item of arr){
    const li:HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);