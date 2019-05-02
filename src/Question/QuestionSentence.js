import React, { Component } from 'react';

class QuestionSentence extends Component {
	render() {
		var questions = 
		[
			'体を動かすのが好き',					 //アクティブ / ゆっくり
			'音楽をきくと体が動いてしまう',			  //音楽
			'ルールに縛られたくない！',				 //自由度 / ルールしっかり
			//'ホラーゲームをみると足がすくむ',		   //ホラー苦手
			'探索するのが好き',						//自由度 / ルールしっかり
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
