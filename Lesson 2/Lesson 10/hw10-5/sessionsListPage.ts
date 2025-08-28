sessionsList.forEach(function (date:Date):void {
    const p:HTMLParagraphElement = document.createElement('p');
    p.innerText = date.toLocaleString();
    document.body.appendChild(p);
});