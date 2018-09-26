import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {
    return {
      seconds: 60
    };
  },

  // This is how values and methods can speak to each other through component. Component Lifecycle
  // Component did moumt, component will unmount
  componentWillReceiveProps: function(catchStart) {
    if(catchStart.startTimer) this._startTimer();
  },

  _startTimer: function (){
      this.interval = setInterval(this._tick, 1000);
  },
  
  _tick: function() {
    this.setState({ seconds: this.state.seconds - 1 });
    if(this.state.seconds === 0) {
      clearInterval(this.interval);
      this.setState({ seconds: 60 });
    }
  },

  renderMinutes: function(){
    return Math.floor(this.state.seconds / 60 );
  },
  renderSeconds: function() {
    if(this.renderMinutes() === 1) {
      return '00';
    } else {
      return Math.floor(this.state.seconds);
    }
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.seconds === 0) this.props.onTimerFinished();
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>
        <div className={this.props.startTimer ? "clock" : "clock hidden"}>{this.renderMinutes()} : {this.renderSeconds()}</div>
      </div>
    );
  }
});

Timer.propTypes = {
  initialStartTime: React.PropTypes.number.isRequired,
  startTimer: React.PropTypes.bool.isRequired,
  onTimerFinished: React.PropTypes.func.isRequired
};
Timer.defaultProps = {
  initialStartTime: 60
};

module.exports = Timer;
