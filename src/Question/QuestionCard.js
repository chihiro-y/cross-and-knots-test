import React, { Component } from 'react';
import QuestionSentence from './QuestionSentence';
import Button from './Button';

class QuestionCard extends Component {
    constructor(props){
      super(props);
			this.state = {
				question_num : 0,
				question_all : 4,
				question_answer : []
			};
    }
    render() {
			return (
				<div>
					<div>{this.state.question_num + 1 } / {this.state.question_all + 1}</div>
					<QuestionSentence className = 'QuestionSentence' question_num = {this.state.question_num} />
					<Button className = 'YesButton' question_num = {() => {this.onYesButtonClick();}} />
					<Button className = 'NoButton' question_num = {() => {this.onNoButtonClick();}} />
					{this.state.question_answer}
				</div>
			);
		}
    	  
		onYesButtonClick = () => {
			this.setState(
				{
					question_num: this.state.question_num + 1, 
					question_answer : this.state.question_answer.concat('0')
				}
			);

		}
		onNoButtonClick = () => {
			this.setState(
				{
					question_num: this.state.question_num + 1,
					question_answer : this.state.question_answer.concat('1')
				}
			);

		}
}

export default QuestionCard;
