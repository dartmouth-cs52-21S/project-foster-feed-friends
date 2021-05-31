import React, { useState } from 'react';
// import { connect } from 'react-redux';
// DONT FORGET NAV LINK
// import { withRouter } from 'react-router-dom';

const OnBoardingCards = ({ title, hoverText, transitionTitleText }) => {
  const [hover, setHover] = useState(false);
  const [transition, setTransition] = useState(false);

  console.log(transitionTitleText);

  const handleHover = () => {
    setHover(!hover);
  };

  const handleClick = () => {
    setTransition(!transition);
  };

  return (
    <div>
      { transition ? <p> {transitionTitleText}</p> : (
        <div>
          <div className="onBoardingCard" onClick={handleClick} role="button" tabIndex="0">
            <h1 className="title" onMouseOver={handleHover} onFocus={handleHover}>{title}</h1>
          </div>
          <div>
            {hover ? <p>{hoverText}</p> : null}
          </div>
        </div>
      ) }
    </div>

  );
};

// class OnBoardingCards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: this.props.forCard.title,
//       hover: false,
//       hoverText: this.props.forCard.hoverText,

//     };
//   }

//   handleHover = () => {
//     this.setState({ hover: !this.hover });
//   }

//   render = () => {
//     console.log(this.props.forCard.title, this.props.forCard.hoverText);
//     return (
//       <div>
//         <div className="onBoardingCard">
//           <h1 className="title" onMouseOver={this.handleHover} onFocus={this.handleHover}>{this.state.text}</h1>
//         </div>
//         <div>
//           {this.state.hover ? <p>{this.state.hoverText}</p> : null}
//         </div>
//       </div>
//     );
//   }
// }

export default OnBoardingCards;
