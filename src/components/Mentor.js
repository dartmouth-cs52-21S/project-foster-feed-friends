import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { signupUser } from '../actions';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSignUpClick = (event) => {

  }

  render = () => {
    return (
      <div className="mentor-page">
        <div className="mentor-header">
          <h1>Making An Impact</h1>
          <p>Sign up and become a mentor for foster youth.</p>
        </div>
        <Button className="signUpSpecificButton" variant="contained" color="primary">Sign-Up</Button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(Mentor));
