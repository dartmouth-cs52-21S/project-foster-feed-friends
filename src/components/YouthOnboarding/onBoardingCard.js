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

  handleClick = () => {
    if (localStorage.getItem('pathYouth') == null) {
      localStorage.setItem('pathYouth', this.state.text);
    } else {
      localStorage.setItem('pathYouth', (`${localStorage.getItem('pathYouth')}: ${this.state.text}`));
    }
    console.log(localStorage.getItem('pathYouth'));
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
      <div onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
        <div className="card onBoarding">
          <div className="card-body" onClick={this.handleClick} role="button" tabIndex="0">
            <h1 className="card-title">{this.state.text}</h1>
          </div>
        </div>
        {this.state.hover === true ? (
          <div className="card onBoarding">
            <div>
              <div className="card-body">{this.state.hoverText}</div>
            </div>
          </div>
        ) : null }
      </div>

    );
  }
}
export default withRouter(connect(null, {})(OnBoardingCards));
