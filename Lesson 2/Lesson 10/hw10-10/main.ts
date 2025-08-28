// #NKB0tgWIK1G
const arrTS:{id:number, name:string}[] = [];
for(let i = 0; i < 100; i++) {
    let newArray:{id:number, name:string} = {id: i, name: `Object ${i+1}`};
    arrTS.push(newArray);
}

const prevBtn:HTMLButtonElement = document.createElement('button');
prevBtn.innerText = 'Prev' ;

const nextBtn:HTMLButtonElement = document.createElement('button');
nextBtn.innerText = 'Next' ;

const pageLoading:number =  Number(localStorage.getItem('pageLoading')) || 1;


let currentPageNumber:number = pageLoading;
const divTenTs:HTMLDivElement = document.createElement('div');

function renderPage(pageNumber:number):void {
    divTenTs.innerHTML = '';

    const startPage:number = (pageNumber - 1) * 10;
    const endPage:number = startPage + 10;
    const currentPage:{id:number, name:string}[] = arrTS.slice(startPage, endPage);

    currentPage.forEach(page=> {
        const p:HTMLParagraphElement = document.createElement('p');
        p.textContent = `${page.id} - ${page.name}`;
        divTenTs.appendChild(p);
    })
}


nextBtn.addEventListener('click', function ():void{
    if(currentPageNumber <= 10){
        currentPageNumber++;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber.toString())
    }
})

prevBtn.addEventListener('click', function ():void{
    if(currentPageNumber > 1){
        currentPageNumber--;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber.toString())
    }
})
renderPage(currentPageNumber);
document.body.append(nextBtn,prevBtn, divTenTs);