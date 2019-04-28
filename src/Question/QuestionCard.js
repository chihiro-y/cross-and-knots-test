import React, { Component } from 'react';
import QuestionSentence from './QuestionSentence';
import Button from './Button';
import '../App.scss';

class QuestionCard extends Component {
    constructor(props){
      super(props);
			this.state = {
				question_num : 1,
				question_all : 5,
				question_answer : []
			};
    }
    render() {
			return (
				<div>
					<div id = 'question-num'>
						<p id = 'question-num-now'>Q{this.state.question_num }</p><p id = 'question-num-slash'>/</p><p id = 'question-num-all'>{this.state.question_all }</p>
					</div>
					<div id = 'question-card'>
						<div id = 'vr-goggles'>
							<QuestionSentence question_num = {this.state.question_num} />
							<div id = 'button-choice'>
								<Button answer = 'knots' question_num = {() => {this.onYesButtonClick();}} />
								<Button answer = 'cross' question_num = {() => {this.onNoButtonClick();}} />
							</div>
						</div>
						{/* {this.state.question_answer} */}
					</div>
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
