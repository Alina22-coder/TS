// #EP5I1UUzAX
type CardSuitType = 'spade' | 'diamond' | 'heart' | 'clubs';
type CardValueType = '6' | '7' | '8' | '9' | '10' | 'ace' | 'jack' | 'queen' | 'king';
type CardColorType = 'red' | 'black';

type Card = {
    cardSuit: CardSuitType;
    value: CardValueType;
    color: CardColorType;
};

type DeckBySuit = {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
};

const deckOfCardsTs:Card[] = [
    {
        cardSuit: 'spade',
        value: '6',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: '7',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: '8',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: '9',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: '10',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: 'ace',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: 'jack',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: 'queen',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color:'black'
    },

    {
        cardSuit: 'spade',
        value: 'king',
        color:'black'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color:'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color:'red'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color:'black'
    },
];

let reduceDeckOfCards:DeckBySuit = deckOfCardsTs.reduce((acc:DeckBySuit, card:Card):DeckBySuit =>{
    if(card.cardSuit === 'spade'){
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond'){
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'heart'){
        acc.hearts.push(card);
    } else if (card.cardSuit === 'clubs'){
        acc.clubs.push(card);
    }
    return acc;
},{spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduceDeckOfCards);
