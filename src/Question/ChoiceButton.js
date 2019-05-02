import React, { Component } from 'react';

class ChoiceButton extends Component {
  clickButton(){
    return this.props.question_num()
  }
  render() {
    var choice = this.props.choice;
    var class_name = 'button-circle-choice-'+ choice;
    return (
      <div className = {class_name} onClick = {() => {this.clickButton();}}></div> 
    );
  }
}

export default ChoiceButton;
