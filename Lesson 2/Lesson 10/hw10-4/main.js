"use strict";
// #2VaLt4vDczH
let div10 = document.createElement('div');
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter'), 10) : 0;
counter++;
localStorage.setItem('counter', counter.toString());
div10.innerText = counter.toString();
document.body.appendChild(div10);
