

const Suits = new Map([
    ['s', 'spades'],
    ['c', 'clubs'],
    ['h', 'hearts'],
    ['d', 'diamonds']
]);

const Values = new Map([
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
    [14, 11], // A
]);

let urls = {};

for (let suit of Suits.keys()) {

    urls[suit] = {};

    for (let value of Values.keys()) {
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
        if (!Suits.has(suit)) {
            throw "Invalid suit"; 
        }
        if (!Values.has(value)) {
            throw "Invalid value";
        }
        this.suit = suit;
        this.value = value;
    }

    url() {
        return urls[this.suit][this.value];
    }
}

export default {CardType, Suits, Values};
