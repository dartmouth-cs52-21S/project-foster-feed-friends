import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';

class onBoardingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      hover: false,
      hoverText: '',
    };
  }

  handleHover = () => {
    this.setState({ hover: !this.hover });
  }

  render = () => {
    return (
      <div>
        <div className="onBoardingCard">
          <h1 className="title" onMouseOver={this.handleHover} onFocus={this.handleHover}>{this.state.text}</h1>
        </div>
        <div>
          {this.state.hover ? <p>{this.state.hoverText}</p> : <div />}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(onBoardingCard));
