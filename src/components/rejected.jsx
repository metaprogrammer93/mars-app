import React from 'react';
import {browserHistory} from 'react-router';

var rejected = React.createClass({

  componentDidMount() {
    setTimeout(function () {
      browserHistory.push('/welcome')
    }, 2000)
  },

  render() {
    return(
      <div className="rejected-wrapper">
        <h1>REJECTED</h1>
      </div>
    );
  }

});

module.exports = rejected;
