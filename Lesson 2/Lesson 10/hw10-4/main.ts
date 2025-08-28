// #2VaLt4vDczH
let div10:HTMLDivElement = document.createElement('div');

let counter:number = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter') as string, 10) : 0;
counter++;

localStorage.setItem('counter', counter.toString());

div10.innerText = counter.toString();

document.body.appendChild(div10);