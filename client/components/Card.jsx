

import React from 'react'; 


const Card = React.createClass({
    render() {

        const style = {
            width: '100%',
            height: 'auto',
            margin: 5
        }
        
        let url = '';
        if ("card" in this.props && this.props.card !== null)
        {
            url = this.props.card.url(); 
        }

        return (
                <img src={url} style={style}/>
               );
    }
});




export default Card;


