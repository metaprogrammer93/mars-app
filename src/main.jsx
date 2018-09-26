import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

// components
import Question from './components/question-screen.jsx';
import Welcome  from './components/welcome-screen.jsx';
import QuestionComp from './components/question-comp.jsx';
import NotFound from './components/404.jsx';
import accepted from './components/accepted.jsx';
import rejected from './components/rejected.jsx';



var CreateApp = React.createClass({

  render: function(){
      return (
        <Router history={browserHistory}>
          <Redirect from='/' to='/welcome' />
          <Route path='/welcome' component={Welcome} />
          <Route path='/evaluation' component={Question} />
          <Route path='/accepted' component={accepted} />
          <Route path='/rejected' component={rejected} />
          <Route path='*' component={NotFound}/>
        </Router>
      );
  }
});


ReactDOM.render(<CreateApp />, document.querySelector('#mars-app'));
