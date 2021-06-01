import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './onBoardingCard.scss';

class OnBoardingCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.title,
      hover: false,
      hoverText: this.props.hoverText,
      transitionTitleText: this.props.transitionTitleText,
      titleText: this.props.titleText,
      options: this.props.option,
      resourceText: this.props.resourceText,
      resourceLink: this.props.resourceLink,

    };
  }

  handleHover = () => {
    this.setState({ hover: !this.hover });
  }

  // handleBack = () => {
  //   this.props.setOptions(this.props.previous);
  // }

  handleClick = () => {
    if (localStorage.getItem('pathYouth') == null) {
      localStorage.setItem('pathYouth', this.state.text);
    } else {
      localStorage.setItem('pathYouth', (`${localStorage.getItem('pathYouth')}: ${this.state.text}`));
    }
    this.props.setTransitionText(this.state.transitionTitleText);
    this.props.setTitleText(this.state.titleText);
    this.props.setOptions(this.state.options);
    this.props.setResourceText(this.state.resourceText);
    this.props.setResourceLink(this.state.resourceLink);
    if (this.props.conclusionText !== null) {
      this.props.setConclusionText(this.props.conclusionText);
    }
  }

  render = () => {
    return (
      <div className="totalCard">
        <div className="onBoardingCard" onClick={this.handleClick} role="button" tabIndex="0">
          <h1 className="title cardTitle" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onFocus={this.handleHover}>{this.state.text}</h1>
        </div>
        <div>
          {this.state.hover ? <div className="onBoardingHover">{this.state.hoverText}</div> : null}
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, {})(OnBoardingCards));
