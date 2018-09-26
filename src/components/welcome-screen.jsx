import React from 'react';
import {browserHistory} from 'react-router';

var Welcome = React.createClass({

  loadSecondButton: function() {
    browserHistory.push('/evaluation');
  },

  render: function() {
    return (
      <div className="welcome-screen">
          <button className="white-btn start" onClick={this.loadSecondButton}>Take Test</button>
          <p>To join us on Mars you'll need to pass this test.</p>
      </div>
    );
  }

});

module.exports = Welcome;
