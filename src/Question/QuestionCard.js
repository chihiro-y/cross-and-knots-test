import React, { Component } from 'react';
import QuestionSentence from './QuestionSentence';
import Button from './Button';
import Popup from '../Popup';
import '../App.scss';

class QuestionCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			question_num : 1,
			question_all : 5,
			question_answer : [],
			question_disabled : false,
			showPopup: false
		};
	}
	render() {
		return (
			<div>
				<div id = 'question-num'>
					<p id = 'question-num-now'>Q{this.state.question_num}</p><p id = 'question-num-slash'>/</p><p id = 'question-num-all'>{this.state.question_all }</p>
				</div>
				<p>{this.state.question_answer}</p>
				<div id = 'question-card'>
					<div id = 'vr-goggles'>
						<QuestionSentence question_num = {this.state.question_num} />
						<div id = 'button-choice'>
							<Button choice = 'knots' question_num = {(answer = '1') => {this.onButtonClick(answer);}} />
							<Button choice = 'cross' question_num = {(answer = '0') => {this.onButtonClick(answer);}} />
						</div>
					</div>
				</div>
				<button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? 
          <Popup text='Close Me' closePopup={this.togglePopup.bind(this)} />
          : null
        }
			</div>
		);
	}
	togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  } 
	onButtonClick = (answer) => {
		if((this.state.question_num === parseInt(this.state.question_all) )&& !this.state.question_disabled){
			this.setState(
				{
					question_answer : this.state.question_answer.concat(answer),
					question_disabled : true,
					showPopup: true
				}
			);
		}
		else if(!this.state.question_disabled){
			this.setState(
				{
					question_num: this.state.question_num + 1, 
					question_answer : this.state.question_answer.concat(answer)
				}
			);
		}
		console.log(this.state.question_disabled);
	}
}

export default QuestionCard;
