import React, { Component } from 'react';

class Button extends Component {
  clickButton(){
    return this.props.question_num()
  }
  render() {
    var choice = this.props.choice;
    var class_name = 'Button_'+ choice;
    
    return (
      <div className = {class_name} onClick = {() => {this.clickButton();}}></div> 
    );
  }
}

export default Button;
