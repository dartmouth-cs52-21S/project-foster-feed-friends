import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Nav from './Navbar';
import Landing from './Landing';
import Educate from './Educate';
import Mentor from './Mentor';
import SignIn from './SignIn';
import SignUpFoster from './SignUpFoster';
import SignUpOrg from './SignUpOrg';
import SignInFoster from './SignInFoster';
import SignInOrg from './SignInOrg';
import SignUp from './SignUp';
import '../style.scss';
import '../Karina.scss';
import '../will.scss';
import '../melissa.scss';
import ProfileOrg from './ProfileOrg';
import SignInMentor from './SignInMentor';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#92C893',
    },
  },
});

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/mentor" component={Mentor} />
            <Route path="/educate" component={Educate} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signin/org" component={SignInOrg} />
            <Route path="/signin/youth" component={SignInFoster} />
            <Route path="/signin/mentor" component={SignInMentor} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signup/org" component={SignUpOrg} />
            <Route path="/signup/youth" component={SignUpFoster} />
            <Route path="/org/profile/:userID" component={ProfileOrg} />
            {/* <Route path="/mentor/profile/:userID" component={ProfileMentor} />
            <Route path="/youth/profile/:userID" component={ProfileYouth} /> */}

            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
