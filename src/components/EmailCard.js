import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class emailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor: '',
      date: '',
    };
  }

  render = () => {
    return (
      <div>
        <h1>{this.state.mentor}</h1>
        <h3>{this.state.date}</h3>
        <button type="button">Follow Up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(emailCard));
