import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
// import onBoardingCard from './onBoardingCard';

const jsonFile = require('../../constants/example.json');

class onBoardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (

      <div className="onBoardingPage">
        <h1 className="title">{jsonFile.mainText}</h1>
        <div className="onBoardingRowFlex">
          {/* <onBoardingCard />
          <onBoardingCard />
          <onBoardingCard />
          <onBoardingCard /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {})(onBoardingPage));
