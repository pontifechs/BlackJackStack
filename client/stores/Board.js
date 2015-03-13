
import alt from 'alt-instance';
import BoardActions from 'actions/BoardActions.js';
import {CardType, Suits, Values} from 'util/CardType';
import Deck from 'util/Deck';


class BoardStore {
    constructor() {
        this.bindAction(BoardActions.placeCard, this.onPlaceCard);
        this.bindAction(BoardActions.blackjack, this.onBlackJack);
        this.bindAction(BoardActions.validate, this.validate);

        this.deck = new Deck();
        this.nextCard = this.deck.next();
        this.board = [];
        this.validate = 0;

        for (let x = 0; x < 5; ++x)
        {
            this.board[x] = [];
            for (let y = 0; y < 5; ++y)
            {
                this.board[x][y] = null; 
            }
        }
    }
    
    onPlaceCard(col) {
        // The card should 'fall down' to the lowest place available.
        let nextAvailable = this.board[col].findIndex(x => x === null);     

        // We didn't find it, so there aren't any available spaces, freak out!
        if (nextAvailable < 0)
        {
            throw "Cannot place another card in column:" + col;
        }

        this.board[col][nextAvailable] = this.nextCard;
        this.nextCard = this.deck.next();
        BoardActions.validate.defer(); 
    }

    onBlackJack(blackjack) {
        if (blackjack.direction === 'row') {
            this.board.forEach(col => {
                col.splice(blackjack.which, 1);
                col.push(null);
            });
        }
        
        if (blackjack.direction === 'col') {
            this.board[blackjack.which] = [null, null, null, null, null];
        }
        BoardActions.validate.defer();
    }

    validate() {
        this.validateDir('row');
        this.validateDir('col');
    }

    // Checks for any BlackJacks!
    validateDir(direction) {
        for (let row = 0; row < 5; row++)
        {
            let handTotal = 0;
            let numAces = 0;
            for (let col = 0; col < 5; col++)
            {
                let card = null;
                if (direction === 'row') {
                    card = this.board[col][row];
                } else {
                    card = this.board[row][col];
                }


                if (card === null) {
                    continue;
                }
                // Special case the Aces
                if (card.value === 14) {
                    numAces++;
                }
                handTotal += Values.get(card.value);
            }

            // If we're over, check if swapping an ace down to a 1 would help 
            while(numAces >= 0) {
                // Blackjack!!
                if (handTotal === 21) {
                    BoardActions.blackjack.defer({direction:direction, which:row});                 
                }
                
                numAces--;
                handTotal -= 10;
            }
        }
    }
}

export default alt.createStore(BoardStore);

