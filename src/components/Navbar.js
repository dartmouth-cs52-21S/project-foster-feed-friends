import React from 'react';
import { connect, useSelector } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { AppBar } from '@material-ui/core';
import { signoutUser } from '../actions/onboarding-actions';
import '../website-styles/nav-bar.scss';

function mapStateToProps(reduxState) {
  return {
    auth: reduxState.auth.authenticated,
    // user: reduxState.user.user,
  };
}

const renderAuth = (auth) => {
  // const user = useSelector((state) => state.user);
  if (auth) {
    return <NavLink to={`/${localStorage.getItem('type')}/profile/${localStorage.getItem('userId')}`}> <button className="yellow-btn" type="button"> Profile</button> </NavLink>;
    // return <Button className="navSignInButton" onClick={() => signout(history)}>Sign Out</Button>;
  } else {
    return <NavLink className="yellow-btn" to="/signin">Sign In</NavLink>;
  }
};

// const renderSpecificNav = (auth, props) => {
//   // console.log(props.user.type);
//   if (auth && props.user.type === 'youth') {
//     return (
//       <AppBar position="static" id="navBarContainer">
//         {/* <img alt=" " src="../img/logo.png" /> */}
//         <div className="link-background">
//           <ul>
//             <div id="title">
//               <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
//             </div>
//             <div id="navRight">
//               <NavLink to="/messages" className="navTab left right">Messages </NavLink>
//               <NavLink to="/resources" className="navTab left right">Feed Friends </NavLink>
//               {renderAuth(props.auth, props.signoutUser, props.history)}
//             </div>
//           </ul>
//         </div>
//       </AppBar>
//     );
//   } else if (auth && (props.user.type === 'mentor' || props.user.type === 'org')) {
//     return (
//       <AppBar position="static" id="navBarContainer">
//         {/* <img alt=" " src="../img/logo.png" /> */}
//         <div className="link-background">
//           <ul>
//             <div id="title">
//               <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
//             </div>
//             <div id="navRight">
//               <NavLink to="/messages" className="navTab left right">Messages </NavLink>
//               <NavLink to="/resources" className="navTab left right">Feed Friends </NavLink>
//               {renderAuth(props.auth, props.signoutUser, props.history)}
//             </div>
//           </ul>
//         </div>
//       </AppBar>
//     );
//   } else {
//     return (
//       <AppBar position="static" id="navBarContainer">
//         {/* <img alt=" " src="../img/logo.png" /> */}
//         <div className="link-background">
//           <ul>
//             <div id="title">
//               <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
//             </div>
//             <div id="navRight">
//               <NavLink to="/mentor" className="navTab left right">Mentor </NavLink>
//               <NavLink to="/educate" className="navTab left right">Educate </NavLink>
//               {renderAuth(props.auth, props.signoutUser, props.history)}
//             </div>
//           </ul>
//         </div>
//       </AppBar>
//     );
//   }
// };

const NavBar = (props) => {
  const user = useSelector((state) => state.user);
  if (props.auth && user.user.type === 'youth') {
    return (
      <AppBar position="static" id="navBarContainer">
        {/* <img alt=" " src="../img/logo.png" /> */}
        <div className="link-background">
          <ul>
            <div id="title">
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/messages" className="navTab left right">Messages </NavLink>
              <NavLink to="/resources" className="navTab left right">Feed Friends </NavLink>
              {renderAuth(props.auth)}
            </div>
          </ul>
        </div>
      </AppBar>
    );
  } else if (props.auth && (user.user.type === 'mentor' || user.user.type === 'org')) {
    return (
      <AppBar position="static" id="navBarContainer">
        {/* <img alt=" " src="../img/logo.png" /> */}
        <div className="link-background">
          <ul>
            <div id="title">
              <NavLink edge="start" exact to="/" className="navTab left">Foster Feed Friends</NavLink>
            </div>
            <div id="navRight">
              <NavLink to="/messages" className="navTab left right">Messages </NavLink>
              <NavLink to="/resources" className="navTab left right">Feed Friends </NavLink>
              {renderAuth(props.auth)}
            </div>
          </ul>
        </div>
      </AppBar>
    );
  } else {
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
              {renderAuth(props.auth)}
            </div>
          </ul>
        </div>
      </AppBar>
    );
  }
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
