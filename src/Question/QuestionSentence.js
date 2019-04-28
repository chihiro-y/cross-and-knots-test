import React, { Component } from 'react';

class QuestionSentence extends Component {
	render() {
		var questions = 
		[
			'体を動かすのが好き?',					 //アクティブ
			'音楽をきくとついつい体が動いてしまう',  	//音楽
			'ゲームで疲れたくない',					 //おっとり
			'ホラーゲームをみると足がすくむ',		   //ホラー苦手
			'ドキドキしたい!'						//アクティブ、恋愛
		];
		var question_num = this.props.question_num;

		return (
			<p id = "question_sentence">
				{questions[question_num - 1]}
			</p>
		);
	}
	  


}

export default QuestionSentence;
