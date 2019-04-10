import React, { Component } from 'react';
import QuestionSentence from './QuestionSentence';
import Button from './Button';

class QuestionCard extends Component {
    constructor(props){
        super(props);
		this.state = {
			question_num : 0,
			question_all : 4,
			questionAnswer : []
		};
    }
    render() {
		return (
		<div>
			<div>{this.state.question_num + 1 } / {this.state.question_all + 1}</div>
			<QuestionSentence question_num = {this.state.question_num} />
			<Button id = 'YesButton' question_num = {() => {this.onYesnoButtonClick();}} />
			<Button id = 'NoButton' question_num = {() => {this.onYesnoButtonClick();}} />
		</div>
		);
	}
    	  
	onYesnoButtonClick = () => {
		this.setState({ question_num: this.state.question_num + 1});
	}
}

export default QuestionCard;
