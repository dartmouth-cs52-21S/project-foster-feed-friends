import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Nav from './Navbar';
import Landing from './Website/Landing';
import Educate from './Website/Educate';
import Mentor from './Website/Mentor';
import SignIn from './SignIn/SignIn';
import SignUpFoster from './SignUp/SignUpFoster';
import SignUpOrg from './SignUp/SignUpOrg';
import SignInFoster from './SignIn/SignInFoster';
import SignInOrg from './SignIn/SignInOrg';
import SignUp from './SignUp/SignUp';
import '../style.scss';
import '../Karina.scss';
import '../will.scss';
import '../melissa.scss';
import ProfileOrg from './Profile/ProfileOrg';
import ProfileMentor from './Profile/ProfileMentor';
import ProfileYouth from './Profile/ProfileYouth';
import SignInMentor from './SignIn/SignInMentor';
import SignUpMentor from './SignUp/SignUpMentor';
import eventForm from './Profile/eventForm';
// import MentorPath from './MentorOnboarding/Mentor-Path';

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
            <Route exact path="/mentor" component={Mentor} />
            <Route path="/educate" component={Educate} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signin/org" component={SignInOrg} />
            <Route path="/signin/youth" component={SignInFoster} />
            <Route path="/signin/mentor" component={SignInMentor} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signup/org" component={SignUpOrg} />
            <Route path="/signup/youth" component={SignUpFoster} />
            <Route path="/signup/mentor" component={SignUpMentor} />
            {/* <Route path="/signup/mentor" component={MentorPath} /> */}
            <Route exact path="/org/profile/:userID" component={ProfileOrg} />
            <Route exact path="/youth/profile/:userID" component={ProfileYouth} />
            <Route exact path="/mentor/profile/:userID" component={ProfileMentor} />
            <Route exact path="/org/profile/event/:userID" component={eventForm} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
