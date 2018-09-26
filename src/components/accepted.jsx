var React = require('react');

import Test from './question-screen.jsx';

var accepted = React.createClass({

  render() {
    return(
      <div className="rocket-wrapper">

        <h2 className="declaration">ACCEPTED</h2>
        <i className={this.props.onCorrect ? "fa fa-rocket" : "fa fa-rocket hidden"}></i>
      </div>
    );
  }

});

module.exports = accepted;
