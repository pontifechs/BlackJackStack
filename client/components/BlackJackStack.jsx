

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
                <span>NextCard</span>
                <span>Remaining</span>
            </Flex.Column>
        );
    }
});


const BlackJackColumn = React.createClass({
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
 
    handleClick() {
        BoardActions.placeCard({x: this.props.x});
    },
   
    render() {

        const rowStyle = {
            margin: 5,
            alignItems: 'center'
        };
        
        let cells = [];
        
        for(let i = 0; i < 5; ++i)
        {
            let card = this.state.board[this.props.x][i];
            cells.push(
                <Flex.Row style={rowStyle}>
                    <Card card={card}/> 
                </Flex.Row>
            );
        }

        return (
            <Flex.Column onClick={this.handleClick}>
                {cells}
            </Flex.Column>
        );
    },

});


const BlackJackStack = React.createClass({
   render() {

        let cols = [];
        for (let i = 0; i < 5; ++i)
        {
            cols.push(
                <BlackJackColumn x={i}/>
            );
        }

        return (
            <Flex.Row>
                <Flex.Row width={5}>
                    {cols}
                </Flex.Row>
                <ScoreBar/>
            </Flex.Row>
        );
    }
});


export default BlackJackStack;

