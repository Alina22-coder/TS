// #8Nmt60ZT
const div:HTMLDivElement = document.createElement('div');
div.innerText = 'Hello World!';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'skyblue';
div.style.color = 'yellow';
div.style.fontSize = '30px';
document.body.appendChild(div);

const divCopy = div.cloneNode(true);
document.body.appendChild(divCopy);