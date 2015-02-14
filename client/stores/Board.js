
import alt from 'alt-instance';
import BoardActions from 'actions/BoardActions.js';
import CardType from 'util/CardType';


class BoardStore {
    constructor() {
        this.bindAction(BoardActions.placeCard, this.onPlaceCard);
        
        this.board = [];
        
        for (let x = 0; x < 5; ++x)
        {
            this.board[x] = [];
            for (let y = 0; y < 5; ++y)
            {
                this.board[x][y] = new CardType('s', y+1);
            }
        }
    }
    
    onPlaceCard(loc) {
        var { x } = loc;
        this.board[x][0] = new CardType('h', 1); 
    }
}


export default alt.createStore(BoardStore);

