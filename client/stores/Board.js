
import alt from 'alt-instance';
import BoardActions from 'actions/BoardActions.js';
import {CardType, Suits, Values} from 'util/CardType';
import Deck from 'util/Deck';


class BoardStore {
    constructor() {
        this.bindAction(BoardActions.placeCard, this.onPlaceCard);
        this.bindAction(BoardActions.blackjack, this.onBlackJack);

        this.deck = new Deck();
        this.nextCard = this.deck.next();
        this.board = [];

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
    }

    onBlackJack(blackjack) {
        console.log(blackjack);
    }

    // Checks for any BlackJacks!
    validate() {
        // Check all of the rows, then the columns

        for (let row = 0; row < 5; row++)
        {
            let handTotal = 0;
            for (let col = 0; col < 5; col++)
            {
                let card = this.board[col][row];
                if (card === null) {
                    continue;
                }

                handTotal += Values.get(card.value);
            }

            // Blackjack!!
            if (handTotal === 21) {
                //BoardActions.blackjack({direction:'row', which:row}); 
                console.log('blackjack');
            }
        }
    }
}


export default alt.createStore(BoardStore);

