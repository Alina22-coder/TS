// #hOL6126
function creatFunction (lorem:string):void{
    document.write(`<ul>`);
    for(let item:number = 0; item < 3; item++){
        document.write(`<li>${lorem}</li>`)
    }
    document.write(`</ul>`);
}

creatFunction('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quo?');