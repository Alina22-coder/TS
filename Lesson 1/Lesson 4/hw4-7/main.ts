// #0Kxco1edSN
function testFunction(lorem:string, a:number):void{
    document.write(`<ul>`);
    for (let item:number = 0; item < a; item++){
        document.write(`<li>${lorem}</li>`);
    }
    document.write(`</ul>`);
}

testFunction('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 10);