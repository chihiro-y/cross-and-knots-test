import React, { Component } from 'react';
import './App.scss';
import QuestionCard from './Question/QuestionCard';

class App extends Component {
  render() {
    return (
      <div id = "contents">
        <QuestionCard/>
      </div>
    );
  }
}

export default App;
