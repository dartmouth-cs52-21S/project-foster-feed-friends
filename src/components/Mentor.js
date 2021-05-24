import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { signupMentor } from '../actions';

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
          <div>
            <h1>Mentor Stories</h1>
            <h2>Making an Impact</h2>
          </div>
          <img id="mentor-blobs" src="src/img/mentorblob.png" alt="" height="550px" />
        </div>
        <div className="mentor-container">
          <h1>mentor</h1>
          <h2>/&apos;men,tôr/ noun.</h2>
          <h3>a person who teaches or gives advice or guidance to someone</h3>
          <p>Foster Feed Friends looks for motivated individuals with a passion for helping others.
            Our mentors serve as guides for foster youth, providing an extra source of support! Whether
            it bw guiding youth through future life choices such as deciding if they will apply for
            college or simply being a friend to converse with, our mentors foster life-long
            relationships.
          </p>
          <h4>We are always looking for more mentors, like you, to join our community! <br />
            Sign up today to become a mentor.
          </h4>
          <button className="yellowButton" type="button"><NavLink className="navLinkButton" to="/signup">sign up now</NavLink></button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupMentor })(Mentor));
