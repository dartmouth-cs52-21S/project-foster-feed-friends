import React from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { AppBar } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
import { signoutUser } from '../actions';

function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth.authenticated,
  };
}

const renderAuth = (auth, signout, history) => {
  if (auth) {
    return <Button color="inherit" onClick={() => signout(history)}>Sign Out</Button>;
  } else {
    return <NavLink className="nav" to="/signin"><Button color="inherit">Sign In</Button></NavLink>;
  }
};

const NavBar = (props) => {
  return (
    // <nav>
    //   <ul>
    //     <li><NavLink to="/" exact>Foster Feed Friends</NavLink></li>
    //     {/* <li><NavLink to="/signin">About</NavLink></li> */}
    //     <li><NavLink to="/mentor">Mentor</NavLink></li>
    //     <li><NavLink to="/educate">Educate</NavLink></li>
    //   </ul>
    // </nav>
    <AppBar position="static" id="navBar">
      <div className="link-background">
        <ul>
          <div id="titleLeft">
            <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
          </div>
          {/* <NavLink to="/signin" className="navTab left">About</NavLink> */}
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
