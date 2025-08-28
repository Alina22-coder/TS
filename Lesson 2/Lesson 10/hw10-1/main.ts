// #sH8c4er
let elementDiv:HTMLDivElement = document.createElement('div');
elementDiv.id = 'text';

let button:HTMLButtonElement = document.createElement('button');
button.innerText = 'Click me';

elementDiv.append(button);

button.addEventListener('click', function ():void{
    elementDiv.style.display = 'none';
})

document.body.appendChild(elementDiv);