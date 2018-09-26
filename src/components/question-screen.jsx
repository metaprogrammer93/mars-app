 import React from 'react';
import {browserHistory} from 'react-router';

import Timer from './countdown-clock.jsx';
import QuizQuestion from './quiz-questions.jsx';

var questions = [
    {
      question: 'Are you a meat eater',
      answer: false
    },
    {
      question: 'Do you love the outdoors',
      answer: false
    },
    {
      question: 'Are you an adventure seeker',
      answer: true
    }
  ];

var Test = React.createClass({

  getInitialState: function() {
    return {
      startTimer: false
    };
  },
  startTest: function() {
    this.setState({ startTimer: true });
  },

  _handleCorrect() {
    browserHistory.push('/accepted');
  },

  _handleFailure() {
      browserHistory.push('/rejected');
  },

  render: function(){
      return (
        <div className="content-wrapper">

            <Timer startTimer={this.state.startTimer}
                  onTimerFinished={this._handleFailure}
                  initialStartTime={60}/>

            {!this.state.startTimer ? <button className="white-btn test"
                                              onClick={this.startTest}>

                    Begin Evaluation</button> : "" }

            {!this.state.startTimer ?  "" : <QuizQuestion
                                                onCorrect={this._handleCorrect}
                                                onFailure={this._handleFailure}
                                                questions={questions} /> }
        </div>
      );
  }

});


module.exports = Test;
