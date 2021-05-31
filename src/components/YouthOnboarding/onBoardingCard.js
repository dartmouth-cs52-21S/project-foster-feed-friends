// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// DONT FORGET NAV LINK
// import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import './onBoardingCard.scss';
// import OnBoardingCards from './onBoardingCard';

// const OnBoardingCards = ({ title, hoverText, transitionTitleText, onClick }) => {
//   const [hover, setHover] = useState(false);
//   const [transition, setTransition] = useState(false);

//   console.log(transitionTitleText);

//   const handleHover = () => {
//     setHover(!hover);
//   };

//   const handleClick = () => {
//     setTransition(!transition);
//   };

//   return (
//     <div>
//       {/* { transition ? <p> {transitionTitleText}</p> : ( */}
//       {/* <div> */}
//       <div className="onBoardingCard" onClick={this.PaymentResponse.} role="button" tabIndex="0">
//         <h1 className="title" onMouseOver={handleHover} onFocus={handleHover}>{title}</h1>
//       </div>
//       <div>
//         {hover ? <p>{hoverText}</p> : null}
//       </div>
//       {/* </div> */}
//       {/* ) } */}
//     </div>

//   );
// };

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
    };
  }

  handleHover = () => {
    this.setState({ hover: !this.hover });
  }

  handleClick = () => {
    this.props.setTransitionText(this.state.transitionTitleText);
    this.props.setTitleText(this.state.titleText);
    // console.log('card console log options: ', this.props.options);
    this.props.setOptions(this.state.options);
    console.log('conclusionText: ', this.props.conclusionText);
    if (this.props.conclusionText !== null) {
      console.log('inconclusionText');
      this.props.setConclusionText(this.props.conclusionText);
    }
  }

  render = () => {
    console.log(this.props.title, this.props.hoverText);
    return (
      <div>
        <div className="onBoardingCard" onClick={this.handleClick} role="button" tabIndex="0">
          <h1 className="title" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onFocus={this.handleHover}>{this.state.text}</h1>
        </div>
        <div>
          {this.state.hover ? <div className="onBoardingHover">{this.state.hoverText}</div> : null}
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, {})(OnBoardingCards));
