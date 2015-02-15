

import {CardType, Suits, Values} from 'util/CardType';


// From http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


class Deck {
    constructor() {
        this.remaining = [];

        // Put all the cards into the deck to start with.
        for (let suit of Suits.keys()) {
            for (let value of Values.keys()) {
                if (value === 1) continue;  // Skip the duplicate ace
                this.remaining.push(new CardType(suit, value));    
            }
        }
        //shuffle(this.remaining);
    }

    next() {
        return this.remaining.pop(); 
    }
}


export default Deck;


