import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Event extends Component {
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

export default withRouter(connect(null, { })(Event));
