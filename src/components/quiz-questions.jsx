import React from 'react';
import {browserHistory} from 'react-router';

import QuestionComp from './question-comp.jsx';
import Test from './question-screen.jsx';
//import questions from './question-screen.jsx';



var QuizQuestion = React.createClass({

  getInitialState: function(){
    return {
      correctCount: 0,
      questionIndex: 0
    };
  },

  componentWillUpdate(nextProps, nextState) {
    // the next state of questionIndex will equal the questions property length which is incrementting below
    if (nextState.questionIndex === nextProps.questions.length) {
      // There are only 3 questions in the array. Set this to end the test
      // ? When the test ends either call the function to push the user to correct of failure
      this.state.correctCount === 2
                                ? this.props.onCorrect()
                                : this.props.onFailure();
    }
  },

  render: function() {
    return (
      <div className="quiz-wrapper">
        <QuestionComp
          getAnswer={this._handleFinalAnswer}
          currentQuestion={this.props.questions[this.state.questionIndex]} />
      </div>
    );
  },

// Compare user answer to question answer

  _handleFinalAnswer(userAnswer) {

    var correctAnswer = this.props.questions[this.state.questionIndex].answer;
    var currentCount = this.state.correctCount;

    if (correctAnswer === userAnswer) {
      currentCount = currentCount + 1;
    }

    this.setState ({
      correctCount: currentCount,
      questionIndex: this.state.questionIndex + 1
    });
  }

});

Test.propTypes = {
  questions: React.PropTypes.arrayOf(
    React.PropTypes.shape ({
      question: React.PropTypes.string.isRequired,
      answer: React.PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
};


module.exports = QuizQuestion;
