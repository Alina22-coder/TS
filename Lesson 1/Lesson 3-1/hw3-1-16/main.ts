//#reLkOkTB29Q
type BookType = {
    title:string,
    pages:number,
    authors:string[],
    genres:string[],
}

const arrBook:BookType[] = [
    {title: 'BookOne',
        pages: 200,
        authors:['authors1', 'authors2', 'authors3'],
        genres: ['genres1', 'genres2']
    },
    {title: 'BookTwo',
        pages: 8528,
        authors:['authors1', 'authors2'],
        genres: ['genres1', 'genres2', 'genres3', 'genres4']
    },
    {title: 'BookThree',
        pages: 742,
        authors:['authors1'],
        genres: ['genres1', 'genres2']
    },
    {title: 'BookFour',
        pages: 3659,
        authors:['authors1', 'authors2', 'authors3', 'authors4', 'authors5'],
        genres: ['genres1', 'genres2', 'genres3', 'genres4', 'genres5']
    },
    {title: 'BookFive',
        pages: 638,
        authors:['authors1', 'authors2'],
        genres: ['genres1', 'genres2']
    }
]


let maxPages:BookType = arrBook[0];
for (let i:number = 1; i < arrBook.length; i++) {
    if (arrBook[i].pages > maxPages.pages){
        maxPages = arrBook[i];
    }
}
console.log(maxPages);

let maxGenres:BookType = arrBook[0];
for (let i:number = 1; i < arrBook.length; i++){
    if (arrBook[i].genres > maxGenres.genres){
        maxGenres = arrBook[i];
    }
}
console.log(maxGenres);

let maxTitle:BookType = arrBook[0]
for (let i:number = 1; i<arrBook.length; i++) {
    if(arrBook[i].title.length > maxTitle.title.length){
        maxTitle = arrBook[i];
    }
}
console.log(maxTitle);

for (let i:number = 0; i < arrBook.length; i++) {
    if (arrBook[i].authors.length === 2){
        console.log(arrBook[i]);
    }
}

for (let i:number = 0; i< arrBook.length; i++){
    if(arrBook[i].authors.length === 1){
        console.log(arrBook[i]);
    }
}