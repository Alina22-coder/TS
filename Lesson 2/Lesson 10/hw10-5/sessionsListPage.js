"use strict";
sessionsList.forEach(function (date) {
    const p = document.createElement('p');
    p.innerText = date.toLocaleString();
    document.body.appendChild(p);
});
