// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Foster Feed Friends</NavLink></li>
//         {/* <li><NavLink to="/signin">About</NavLink></li> */}
//         <li><NavLink to="/mentor">Mentor</NavLink></li>
//         <li><NavLink to="/educate">Educate</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../actions';

class SignUpOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div />
    );
  }
}

export default withRouter(connect(null, { signoutUser })(SignUpOrg));