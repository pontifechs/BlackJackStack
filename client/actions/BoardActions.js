
import alt from 'alt-instance';


class BoardActions {
    constructor() {
        this.generateActions('hoverColumn', 'placeCard', 'blackjack');
    }
}

export default alt.createActions(BoardActions);


