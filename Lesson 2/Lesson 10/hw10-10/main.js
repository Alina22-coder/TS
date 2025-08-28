"use strict";
// #NKB0tgWIK1G
const arrTS = [];
for (let i = 0; i < 100; i++) {
    let newArray = { id: i, name: `Object ${i + 1}` };
    arrTS.push(newArray);
}
const prevBtn = document.createElement('button');
prevBtn.innerText = 'Prev';
const nextBtn = document.createElement('button');
nextBtn.innerText = 'Next';
const pageLoading = Number(localStorage.getItem('pageLoading')) || 1;
let currentPageNumber = pageLoading;
const divTenTs = document.createElement('div');
function renderPage(pageNumber) {
    divTenTs.innerHTML = '';
    const startPage = (pageNumber - 1) * 10;
    const endPage = startPage + 10;
    const currentPage = arrTS.slice(startPage, endPage);
    currentPage.forEach(page => {
        const p = document.createElement('p');
        p.textContent = `${page.id} - ${page.name}`;
        divTenTs.appendChild(p);
    });
}
nextBtn.addEventListener('click', function () {
    if (currentPageNumber <= 10) {
        currentPageNumber++;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber.toString());
    }
});
prevBtn.addEventListener('click', function () {
    if (currentPageNumber > 1) {
        currentPageNumber--;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber.toString());
    }
});
renderPage(currentPageNumber);
document.body.append(nextBtn, prevBtn, divTenTs);
