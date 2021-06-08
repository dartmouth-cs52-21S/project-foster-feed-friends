import React from 'react';
import { connect, useSelector } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { signoutUser } from '../actions/onboarding-actions';
import '../website-styles/nav-bar.scss';
import heartlogo from '../img/logo.png';

function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth.authenticated,
  };
}

const renderAuth = (auth) => {
  const user = useSelector((state) => state.user);
  if (auth) {
    return <NavLink className="yellow-btn" to={`/${user.user.type}/profile/${user.user.id}`}>Profile</NavLink>;
  } else {
    return <NavLink className="yellow-btn" to="/signin">Sign In</NavLink>;
  }
};

const NavBar = (props) => {
  const user = useSelector((state) => state.user);
  if (props.auth && user.user.type === 'youth') {
    return (
      <AppBar position="static" id="navBarContainer">
        <div className="link-background">
          <ul>
            <div id="title">
              <img id="logo" src={heartlogo} alt="" width="45px" height="45px" />
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/resources" className="navTab left right">Resources </NavLink>
              <NavLink to={`/messages/${user.user.id}`} className="navTab left right">Messages </NavLink>
              <NavLink to="/networks/all" className="navTab left right">Feed Friends </NavLink>
              <div className="nav-btn">
                {renderAuth(props.auth)}
              </div>
            </div>
          </ul>
        </div>
      </AppBar>
    );
  } else if (props.auth && user.user.type === 'org') {
    return (
      <AppBar position="static" id="navBarContainer">
        <div className="link-background">
          <ul>
            <div id="title">
              <img id="logo" src={heartlogo} alt="" width="45px" height="45px" />
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/resources" className="navTab left right">Resources </NavLink>
              <div className="nav-btn">
                {renderAuth(props.auth)}
              </div>
            </div>
          </ul>
        </div>
      </AppBar>
    );
  } else if (props.auth && user.user.type === 'mentor') {
    return (
      <AppBar position="static" id="navBarContainer">
        <div className="link-background">
          <ul>
            <div id="title">
              <img id="logo" src={heartlogo} alt="" width="45px" height="45px" />
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/resources" className="navTab left right">Resources </NavLink>
              <NavLink to={`/messages/${user.user.id}`} className="navTab left right">Messages </NavLink>
              <div className="nav-btn">
                {renderAuth(props.auth)}
              </div>
            </div>
          </ul>
        </div>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static" id="navBarContainer">
        <div className="link-background">
          <ul>
            <div id="title">
              <img id="logo" src={heartlogo} alt="" width="45px" height="45px" />
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/mentor" className="navTab left right">Mentor </NavLink>
              <NavLink to="/educate" className="navTab left right">Educate </NavLink>
              <NavLink to="/resources" className="navTab left right">Resources </NavLink>
              <div className="nav-btn">
                {renderAuth(props.auth)}
              </div>
            </div>
          </ul>
        </div>
      </AppBar>
    );
  }
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
