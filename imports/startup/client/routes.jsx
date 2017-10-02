import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Homepage from '/imports/ui/Home/Homepage.jsx';
import homeContainer from '/imports/ui/Container/homeContainer.jsx';
export default () =>(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/page2" component={homeContainer} />
  </Router>
)
