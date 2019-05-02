import React, { Component } from 'react';

class ShareButton extends Component {
  clickButton(){
    // var link = this.props.link;
    // window.open(link);
  }
  render() {
    var icon = this.props.icon;
    var service = this.props.service;
    var name = 'button-circle-share-' + service;
    console.log(name);
    return (
      <div className = {name}>
        <i className = {icon}></i>
      </div>
    );
  }
}

export default ShareButton;
