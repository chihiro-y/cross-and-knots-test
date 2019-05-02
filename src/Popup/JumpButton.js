import React, { Component } from 'react';

class JumpButton extends Component {
  clickButton(){
    var link = this.props.link;
    window.open(link);
  }
  render() {
    var service = this.props.service;
    var text = this.props.text;
    var class_name = 'button-jump-' + service;
    return (
      <div className = {class_name} onClick = {() => {this.clickButton();}}>
        <span>{text}</span>
      </div> 
    );
  }
}

export default JumpButton;
