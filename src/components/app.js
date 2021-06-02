import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

// import SignUpMentor from './SignUp/SignUpMentor';
import EventForm from './Profile/eventForm';

import SignUpMentor from './SignUp/SignUpMentor';

import PrivateRoute from './PrivateRoute';
import MentorEdit from './ProfileEditing/MentorEdit';
import FosterEdit from './ProfileEditing/FosterEdit';
import OrgEdit from './ProfileEditing/OrgEdit';
import MentorPath from './MentorOnboarding/Mentor-Path';
import OnBoardingPage from './YouthOnboarding/onBoardingPage';
import { authUser } from '../actions/onboarding-actions';
import Network from './Network/Network';
import NetworkMentors from './Network/NetworkMentors';
import NetworkOrgs from './Network/NetworkOrgs';
import SubmitResource from './sumbitResource';
import NetworkOrgProfile from './Network/NetworkOrgProfile';
import Resource from './Resource';

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
  // const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      props.authUser(userId);
    }
  }, []);

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
            <Route path="/submitResource" component={SubmitResource} />
            <Route path="/resources" component={Resource} />
            <Route path="/signin/org" component={SignInOrg} />
            <Route path="/signin/youth" component={SignInFoster} />
            <Route path="/signin/mentor" component={SignInMentor} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signup/org" component={SignUpOrg} />
            <Route path="/signup/youth" component={SignUpFoster} />
            <Route path="/signup/youthOnboarding" component={OnBoardingPage} />
            <Route path="/networks/all" component={Network} />
            <Route path="/networks/resources" component={NetworkOrgs} />
            <Route path="/networks/mentors" component={NetworkMentors} />
            <Route path="/orgs/profile/:userID" component={NetworkOrgProfile} />
            {/* // specific org profile after clicking card */}
            <Route path="/signup/mentor" component={SignUpMentor} />
            <Route path="/signup/mentormoments" component={MentorPath} />
            <PrivateRoute exact path="/org/profile/:userID" component={ProfileOrg} />
            <PrivateRoute exact path="/youth/profile/:userID" component={ProfileYouth} />
            <PrivateRoute exact path="/mentor/profile/:userID" component={ProfileMentor} />
            {/* <PrivateRoute path="/-org/profile/event/:userID" component={eventForm} /> */}
            <PrivateRoute path="/mentor/profile/:userID/edit" component={MentorEdit} />
            <PrivateRoute path="/youth/profile/:userID/edit" component={FosterEdit} />
            <PrivateRoute path="/org/profile/:userID/edit" component={OrgEdit} />
            <PrivateRoute path="/org/profile/:userID/event" component={EventForm} />
            <PrivateRoute component={FallBack} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userId) => {
      dispatch(authUser(userId));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
