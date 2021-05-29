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

  // interateKey = () => {
  //   const options = [];
  //   // eslint-disable-next-line guard-for-in
  //   for (const key in jsonFile.options) {
  //     console.log(`${key} : ${jsonFile.options[key].options}`);
  //     options.add(`${jsonFile.options[key].options}`);
  //     // eslint-disable-next-line guard-for-in
  //     for (const key2 in jsonFile.options[key].options) {
  //       console.log(`${key2} : ${jsonFile.options[key].options[key2].options}`);
  //     }
  //   }
  //   for
  // }

  mapTheseHoes = (fileArray) => {
    fileArray.map((data, key) => {
      console.log(data);
      return (
        <div>
          <h1>help</h1>
          <onBoardingCard forCard={data} />
          {console.log('rough')}
        </div>
      );
    });
  }

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

export default withRouter(connect(null, {})(onBoardingPage));
