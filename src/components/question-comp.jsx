var React = require('react');

var QuestionComp = React.createClass({

  _handleTrue() {
    this.props.getAnswer(true);
  },

  render() {
    return (
      <div className="questions-box">
        <h3 className="quiz-questions">{this.props.currentQuestion.question}</h3>
        <div className="button-wrapper">
          <button className="white-btn t-f" onClick={this._handleTrue}>true</button>
          <button className="white-btn t-f" onClick={() => this.props.getAnswer(false)}>false</button>
        </div>
      </div>
    )
  }

});

QuestionComp.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }),
  getAnswer: React.PropTypes.func.isRequired
};

module.exports = QuestionComp;
