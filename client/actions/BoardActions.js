
import alt from 'alt-instance';


class BoardActions {
    constructor() {
        this.generateActions('hoverColumn', 'blackjack', 'validate', 'placeCard');
    }
}

export default alt.createActions(BoardActions);


