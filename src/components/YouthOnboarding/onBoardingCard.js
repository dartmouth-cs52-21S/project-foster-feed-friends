import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';

class OnBoardingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.forCard.title,
      hover: false,
      hoverText: this.props.forCard.hoverText,

    };
  }

  handleHover = () => {
    this.setState({ hover: !this.hover });
  }

  render = () => {
    console.log(this.props.forCard.title, this.props.forCard.hoverText);
    return (
      <div>
        <div className="onBoardingCard">
          <h1 className="title" onMouseOver={this.handleHover} onFocus={this.handleHover}>{this.state.text}</h1>
        </div>
        <div>
          {this.state.hover ? <p>{this.state.hoverText}</p> : null}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(OnBoardingCards));
