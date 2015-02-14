

const suits = new Map([
    ['s', 'spades'],
    ['c', 'clubs'],
    ['h', 'hearts'],
    ['d', 'diamonds']
]);

const values = new Map([
    [1, 1], // A low
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 10], // J
    [12, 10], // Q
    [13, 10], // K
    [14, 11], // A high
]);


let urls = {};

for (let suit of suits.keys()) {

    urls[suit] = {};

    for (let value of values.keys()) {
        let path = '';

        switch(value) {
            case 11:
                path = 'j';
                break;
            case 12:
                path = 'q';
                break;
            case 13:
                path = 'k';
                break;
            
            case 1:
            case 14:
                path = 'a';
                break;
            default:
                path = '' + value; 
                break;
        }

        urls[suit][value] = require('image!assets/cards/'+path+suit+'.png'); 
    }
}


class CardType {
    constructor(suit, value) {
        if (!suits.has(suit)) {
            throw "Invalid suit"; 
        }
        if (!values.has(value)) {
            throw "Invalid value";
        }
        this.suit = suit;
        this.value = value;
    }

    url() {
        return urls[this.suit][this.value];
    }
}



export default CardType;
