// #0Kxco1edSN
const itemListTs:(lorem:string, number:number)=>void = (lorem:string, number:number):void => {
    document.write(`<ul>`);
    for (let i:number = 0; i < number; i++){
        document.write(`<li>${lorem}</li>`);
    }
    document.write(`</ul>`);
}
itemListTs('Довільний текст', 10);