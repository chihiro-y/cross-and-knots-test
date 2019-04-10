import React, { Component } from 'react';

class Button extends Component {

    clickButton(){
        return this.props.question_num()
    }
    render() {
		return (
			<div>
                <button onClick = {() => {this.clickButton();}}>O</button> 
			</div>
		);
	  }

}

export default Button;
