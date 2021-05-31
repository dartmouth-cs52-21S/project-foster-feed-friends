import React from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AppBar } from '@material-ui/core';
import { signoutUser } from '../actions/onboarding-actions';
import '../website-styles/nav-bar.scss';

function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth.authenticated,
  };
}

const renderAuth = (auth, signout, history) => {
  if (auth) {
    return <Button className="navSignInButton" onClick={() => signout(history)}>Sign Out</Button>;
  } else {
    return <NavLink className="navSignInButton" to="/signin"><Button className="navSignInButton">Sign In</Button></NavLink>;
  }
};

const NavBar = (props) => {
  return (
    <AppBar position="static" id="navBarContainer">
      {/* <img alt=" " src="../img/logo.png" /> */}
      <div className="link-background">
        <ul>
          <div id="title">
            <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
          </div>
          <div id="navRight">
            <NavLink to="/mentor" className="navTab left right">Mentor </NavLink>
            <NavLink to="/educate" className="navTab left right">Educate </NavLink>
            {renderAuth(props.auth, props.signoutUser, props.history)}
          </div>
        </ul>
      </div>
    </AppBar>
  );
};

// const ConnectedNav = connect(mapStateToProps, { signoutUser })(withRouter(NavBar));

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
