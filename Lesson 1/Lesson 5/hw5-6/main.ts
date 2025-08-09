// #hOL6126
const itemList:(lorem:string)=>void = (lorem:string):void => {
    document.write(`<ul>`);
    for (let i:number = 0; i < 3; i++){
        document.write(`<li>${lorem}</li>`)
    }
    document.write(`</ul>`);
}

itemList('Lorem ipsum dolor sit amet.');