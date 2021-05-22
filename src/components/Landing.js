import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../actions';
import '../will.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div id="landing-container">
        <div className="landingSubcontainer">
          <h1>We are a pathway to building better futures.</h1>
          <p>Foster Feed Friends aims to provide resourses and information to foster youth about to age out of the system.
            We want to enable foster children to not only understand thier options but take advantage of it.
          </p>
        </div>
        <div className="landingSubcontainer">
          <div className="carousel"> </div>
        </div>
      </div>

    );
  }
}

export default withRouter(connect(null, { signoutUser })(Landing));
