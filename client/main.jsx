

var Alt = require('alt')
import React from 'react';
import BlackJackStack from 'components/BlackJackStack';
import Flex from 'components/util/Flex';


const App = React.createClass({
    render() {
        
        const centerStyle = {
            backgroundColor: '#FFFF77',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        
        return (
            <Flex.Row width="100vw" height="100vh"> 
                <Flex.Column width="830px" style={centerStyle}>
                    <BlackJackStack/>
                </Flex.Column>
            </Flex.Row>
        );
    }
});

document.body.style.margin = 0;
React.render(<App/>, document.body);
