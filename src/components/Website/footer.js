import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div>
        <a href="https://www.freepik.com/vectors/people">People vector created by pikisuperstar - www.freepik.com</a>);
      </div>
    );
  }
}

export default withRouter(connect(null, { signoutUser })(Footer));
