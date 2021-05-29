import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
// import OnBoardingCards from './onBoardingCard';

const jsonFile = require('../../constants/example.json');

class OnBoardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

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

  mapTheseHoes = (fileArray) => {
    console.log('json file:', fileArray);
    return fileArray.map((data) => {
      console.log('array from .map: ', data);
      return (
        // need a way to iterate through all of the things in data and use the json object that is returned to populate onBoardingCard component
        <div>
          {data.toString()}
        </div>
      );
    });
  }

  //   return fileArray.map((data) => {
  //     return <h1>i made it</h1>;
  //   });
  // }

  render = () => {
    return (

      <div className="onBoardingPage">
        <h1 className="title">{jsonFile[0].titleText}</h1>
        {this.mapTheseHoes(jsonFile)}
        {/* {jsonFile.map((data, key) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={key}>
              <div>{data.options.map((data, key) => {

              })}
              </div>
              <div>{key}</div>
            </div>
          );
        })} */}

      </div>
    );
  }
}

export default withRouter(connect(null, {})(OnBoardingPage));
