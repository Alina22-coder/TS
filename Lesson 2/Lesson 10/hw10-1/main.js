"use strict";
// #sH8c4er
let elementDiv = document.createElement('div');
elementDiv.id = 'text';
let button = document.createElement('button');
button.innerText = 'Click me';
elementDiv.append(button);
button.addEventListener('click', function () {
    elementDiv.style.display = 'none';
});
document.body.appendChild(elementDiv);
