

import React from 'react';
import Flex from 'components/util/Flex';
import Card from 'components/Card';
import Board from 'stores/Board';
import BoardActions from 'actions/BoardActions';


const ScoreBar = React.createClass({
   render() {
        const style= {
            backgroundColor: '#F77F7F',
            alignItems: 'center'
        }
        
        return (
            <Flex.Column width={1} style={style}>
                <span>Score</span>
                <Card card={this.props.nextCard}/>
                <span>{this.props.cardsRemaining}</span>
            </Flex.Column>
        );
    }
});


const BlackJackColumn = React.createClass({

    handleClick() {
        try {
            BoardActions.placeCard(this.props.x);
        }
        catch(e) {
            // TODO:: Flash screen or something?
        }
    },
   
    render() {
        const rowStyle = {
            margin: 5,
            alignItems: 'center'
        };
        
        let cells = [];
        this.props.cards.forEach(card => {
            cells.push(
                <Flex.Row style={rowStyle}>
                    <Card card={card}/> 
                </Flex.Row>
            )
        });

        return (
            <Flex.Column onClick={this.handleClick}>
                {cells.reverse()}
            </Flex.Column>
        );
    },

});


const BlackJackStack = React.createClass({
    getInitialState() {
        return Board.getState();
    },

    componentWillMount() {
        Board.listen(this.onChange);
    },

    componentWillUnmount() {
        Board.unlisten(this.onChange);
    },

    onChange() {
        this.setState(this.getInitialState());
    },
   
    render() {
        let cols = [];
        for (let i = 0; i < 5; ++i)
        {
            cols.push(
                <BlackJackColumn cards={this.state.board[i]} x={i}/>
            );
        }
               
        return (
            <Flex.Row>
                <Flex.Row width={5}>
                    {cols}
                </Flex.Row>
                <ScoreBar nextCard={this.state.nextCard} cardsRemaining={this.state.deck.remaining.length}/>
            </Flex.Row>
        );
    }
});


export default BlackJackStack;

