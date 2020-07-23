import React from 'react';

class Condition extends React.Component{
    render(){
        return <h2>Fact: {this.props.responseObj.text}</h2>
    }
}

export default Condition

