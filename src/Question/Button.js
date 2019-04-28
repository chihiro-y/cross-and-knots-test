import React, { Component } from 'react';

class Button extends Component {
  clickButton(){
    return this.props.question_num()
  }
  render() {
    var answer = this.props.answer;
    var class_name = 'Button_'+ answer;
    
    return (
      <div className = {class_name} onClick = {() => {this.clickButton();}}></div> 
    );
  }
}

export default Button;
