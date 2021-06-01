import React, { Component } from 'react';
import { connect } from 'react-redux';

// DONT FORGET NAV LINK
// import onBoardingCard from './onBoardingCard';

// const jsonFile = require('../../constants/example.json');

import { withRouter, NavLink } from 'react-router-dom';
import OnBoardingCards from './onBoardingCard';
import './onBoardingPage.scss';

const jsonFile = require('../../constants/test.json');

class OnBoardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: jsonFile[0].titleText,
      transitionTitleText: '',
      transition: false,
      options: jsonFile[0].options,
      resourceText: '',
      resourceLink: '',
      conclusionText: '',
      // previous: jsonFile,
    };
  }

  // setPrevious = () => {
  //   this.setState(prevState => ({options: this.state.previous));
  // }

  setConclusionText = (text) => {
    console.log('made it in set conclusion text');
    this.setState({ conclusionText: text });
  }

  setTransitionText = (text) => {
    this.setState({ transitionTitleText: text });
    this.setState({ transition: true });
  }

  setTitleText = (text) => {
    this.setState({ titleText: text });
  }

  setResourceText = (text) => {
    this.setState({ resourceText: text });
  }

  setResourceLink = (text) => {
    this.setState({ resourceLink: text });
  }

  setOptions = (optionsArray) => {
    this.setState({ options: optionsArray });
  }

  continueClick = () => {
    this.setState({ transition: false });
  }

  // mapJson = (fileArray) => {
  //   console.log(localStorage.getItem('pathYouth'));

  //   return fileArray.map((data) => {
  //     return (
  //       data.options.map((value) => {
  //         return (
  //           <div key={value.id} className="accordion" id="accordionPanelsStayOpenExample">
  //             <OnBoardingCards
  //               key={value.id}
  //               title={value.title}
  //               hoverText={value.hoverText}
  //               transitionTitleText={value.transitionTitleText}
  //               setTransitionText={this.setTransitionText}
  //               titleText={value.titleText}
  //               setTitleText={this.setTitleText}
  //               resourceText={value.resourceText}
  //               setResourceText={this.setResourceText}
  //               resourceLink={value.resourceLink}
  //               setResourceLink={this.setResourceLink}
  //               option={data.options}
  //               setOptions={this.setOptions}
  //               conclusionText={data.conclusionText}
  //               setConclusionText={this.setConclusionText}
  //             />
  //           </div>
  //         );
  //       }));
  //   });
  // }

  mapJsonAfter = (fileArray) => {
    return fileArray.map((data) => {
      console.log(fileArray);
      return (
        <div key={data.id} className="accordion" id="accordionPanelsStayOpenExample">
          <OnBoardingCards
            key={data.id}
            title={data.title}
            hoverText={data.hoverText}
            transitionTitleText={data.transitionTitleText}
            setTransitionText={this.setTransitionText}
            resourceText={data.resourceText}
            setResourceText={this.setResourceText}
            resourceLink={data.resourceLink}
            setResourceLink={this.setResourceLink}
            titleText={data.titleText}
            setTitleText={this.setTitleText}
            option={data.options}
            setOptions={this.setOptions}
            conclusionText={data.conclusionText}
            setConclusionText={this.setConclusionText}
          />
        </div>
      );
    });
  }

  render = () => {
    if (!this.state.transition) {
      return (
        <div className="onBoardingPage">
          {/* <div><p>Back</p></div> */}
          <h1 className="title onBoardingTitle">{this.state.titleText}</h1>
          <div className="onBoardingCards">{this.mapJsonAfter(this.state.options)} </div>
        </div>
      );
    } else {
      return (
        <div className="onBoardingPage">
          {this.state.conclusionText !== undefined ? <h1 className="title onBoardingTitle">{this.state.conclusionText}</h1>
            : <h1 className="title onBoardingTitle">{this.state.transitionTitleText}</h1>}

          {this.state.resourceText !== undefined && this.state.resourceLink !== undefined
            ? (
              <div className="gameOfLifeResource">
                <h3 className="resourceText">{this.state.resourceText}</h3>
                <a href={`${this.state.resourceLink}`} target="_blank" rel="noopener noreferrer"> website here!</a>
              </div>
            )
            : <div> Join our family today! </div>}

          {this.state.conclusionText !== undefined ? <NavLink type="button" className="yellow-btn" to="/signup/youth">Finalize Account</NavLink>
            : <button type="button" className="yellow-btn" onClick={this.continueClick}>Continue </button>}
        </div>

      );
    }
  }
}

export default withRouter(connect(null, {})(OnBoardingPage));
