import React, { Component } from 'react';
import { connect } from 'react-redux';

// DONT FORGET NAV LINK
// import onBoardingCard from './onBoardingCard';

// const jsonFile = require('../../constants/example.json');

import { withRouter } from 'react-router-dom';
import OnBoardingCards from '../YouthOnboarding/onBoardingCard';
import '../YouthOnboarding/onBoardingPage.scss';
import { updateYouthPath } from '../../actions/user-actions';

const jsonFile = require('../../constants/exploreAgain.json');

class ExploreAgain extends Component {
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

  updatePath = () => {
    console.log('about to replace path with: ', localStorage.getItem('pathYouth'));
    this.props.updateYouthPath(this.props.match.params.userID, localStorage.getItem('pathYouth'), this.props.history);
    localStorage.removeItem('pathYouth');
  }

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
    console.log('path youth: ', localStorage.getItem('pathYouth'));
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

          {this.state.conclusionText !== undefined ? <button type="button" className="yellow-btn" to="/signup/youth" onClick={this.updatePath}>Update Account!</button>
            : <button type="button" className="yellow-btn" onClick={this.continueClick}>Learn about your options! </button>}
        </div>

      );
    }
  }
}

export default withRouter(connect(null, { updateYouthPath })(ExploreAgain));
