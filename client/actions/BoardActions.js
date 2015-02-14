
import alt from 'alt-instance';


class BoardActions {
    constructor() {
        this.generateActions('hoverColumn', 'placeCard');
    }
}

export default alt.createActions(BoardActions);


