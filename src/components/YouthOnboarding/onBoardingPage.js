import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import onBoardingCard from './onBoardingCard';

class onBoardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: '',
    };
  }

  render = () => {
    return (

      <div className="onBoardingPage">
        <h1 className="title">{this.state.mainText}</h1>
        <div className="onBoardingRowFlex">
          <onBoardingCard />
          <onBoardingCard />
          <onBoardingCard />
          <onBoardingCard />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(onBoardingPage));
