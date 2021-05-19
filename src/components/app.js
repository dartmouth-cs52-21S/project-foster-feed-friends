import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Nav from './Navbar';
import Landing from './Landing';
import Educate from './Educate';
import Mentor from './Mentor';
import SignIn from './SignIn';
import SignUpFoster from './SignUpFoster';
import SignUpOrg from './SignUpOrg';
import '../style.scss';
import '../Karina.scss';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/educate" component={Educate} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup-org" component={SignUpOrg} />
          <Route path="/signup-youth" component={SignUpFoster} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
