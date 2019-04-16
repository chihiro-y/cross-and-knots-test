import React, { Component } from 'react';

class Button extends Component {

    clickButton(){
        return this.props.question_num()
    }
    render() {
		return (
          	<div className = 'Button' onClick = {() => {this.clickButton();}}></div> 
		);
	  }

}

export default Button;
