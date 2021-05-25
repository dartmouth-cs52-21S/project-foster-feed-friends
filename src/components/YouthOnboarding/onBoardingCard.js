import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';

class onBoardingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      hoverText: '',
    };
  }

  render = () => {
    return (

      <div>
        <h1>{this.state.text}</h1>
        <h3>{this.state.hoverText}</h3>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(onBoardingCard));
