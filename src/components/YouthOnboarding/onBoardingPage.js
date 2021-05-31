import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      // first: true,
      conclusionText: '',
    };
  }

  // interateKey = (jsonData) => {
  //   // eslint-disable-next-line guard-for-in
  //   for (const key in jsonData) {
  //     return key;

  //     // options.add(`${jsonFile.options[key].options}`);
  //     // eslint-disable-next-line guard-for-in
  //     // for (const key2 in jsonFile.options[key].options) {
  //     //   console.log(`${key2} : ${jsonFile.options[key].options[key2].options}`);
  //   }
  // }
  //   for
  // }

  // mapTheseHoes= (fileArray) => {
  //   return fileArray.map((data) => {
  //     return(
  //       <div></div>
  //     );
  //   }

  // iterateData = (array) => {
  //   array.forEach()
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

  setOptions = (optionsArray) => {
    this.setState({ options: optionsArray });
  }

  continueClick = () => {
    this.setState({ transition: false });
    // this.setState({ first: false });
  }

  mapJson = (fileArray) => {
    console.log('json file:', fileArray);
    return fileArray.map((data) => {
      console.log('array from .map: ', data.options);
      return (
        data.options.map((value) => {
          console.log('val', value.title);
          return (
          // need a way to iterate through all of the things in data and use the json object that is returned to populate onBoardingCard component
            <div key={value.id} className="accordion" id="accordionPanelsStayOpenExample">
              <OnBoardingCards
                key={value.id}
                title={value.title}
                hoverText={value.hoverText}
                transitionTitleText={value.transitionTitleText}
                setTransitionText={this.setTransitionText}
                titleText={value.titleText}
                setTitleText={this.setTitleText}
                option={data.options}
                setOptions={this.setOptions}
                conclusionText={data.conclusionText}
                setConclusionText={this.setConclusionText}
              />
            </div>
          );
        }));
    });
  }

  mapJsonAfter = (fileArray) => {
    console.log('json file:', fileArray);
    return fileArray.map((data) => {
      console.log('data from mapJsonAfter', data);
      console.log('array from after .map: ', data.options);
      return (
      // need a way to iterate through all of the things in data and use the json object that is returned to populate onBoardingCard component
        <div key={data.id} className="accordion" id="accordionPanelsStayOpenExample">
          <OnBoardingCards
            key={data.id}
            title={data.title}
            hoverText={data.hoverText}
            transitionTitleText={data.transitionTitleText}
            setTransitionText={this.setTransitionText}
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

  //   return fileArray.map((data) => {
  //     return <h1>i made it</h1>;
  //   });
  // }

  render = () => {
    if (!this.state.transition) {
      return (

        <div className="onBoardingPage">
          <h1 className="title onBoardingTitle">{this.state.titleText}</h1>
          <div className="onBoardingCards">{this.mapJsonAfter(this.state.options)} </div>
          {/* {this.state.conclusionText !== '' ? <h1 className="title">{this.state.conclusionText}</h1> : <h1 className="title">{this.state.titleText}</h1> } */}
          {/* {this.mapJsonAfter(this.state.options)} */}
          {/* { this.state.first ? <div className="onBoardingCards">{this.mapJson(this.state.options)}</div> : (
            <div className="onBoardingCards">{this.mapJsonAfter(this.state.options)}
            </div>
          )} */}
        </div>
      );
    } else {
      return (
        <div className="onBoardingPage">
          {/* <h1>{this.state.transitionTitleText}</h1> */}
          {console.log('conslusionText is : ', this.state.conclusionText)}
          {this.state.conclusionText !== undefined ? <h1 className="title onBoardingTitle">{this.state.conclusionText}</h1>
            : <h1 className="title onBoardingTitle">{this.state.transitionTitleText}</h1>}

          {this.state.conclusionText !== undefined ? <NavLink type="button" to="/signup/youth">Finalize Account</NavLink> : <button type="button" onClick={this.continueClick}>Continue </button>}
        </div>

      );
    }
  }
}

export default withRouter(connect(null, {})(OnBoardingPage));
