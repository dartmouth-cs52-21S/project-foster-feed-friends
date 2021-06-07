import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';
import { signoutUser } from '../../actions/onboarding-actions';
import Footer from './footer';
import '../../website-styles/educate.scss';
import educateone from '../../img/educateI.png';
import educatetwo from '../../img/educateII.png';
import educatethree from '../../img/educateIII.png';

class Educate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div>
        <div id="educateRowI">
          <img src={educateone} alt="grad cap young woman" />
          <img src={educatethree} alt="young men around computers" />
        </div>
        <img id="educateRowII" src={educatetwo} alt="grad cap young woman" />
        <div id="educatebar">
          <div className="educateLanding">
            <h1>Learn How to Build Better Futures</h1>
          </div>
          <div id="four" className="educateLanding" />
          <div id="three" className="educateLanding" />
          <div id="two" className="educateLanding" />
          <div id="one" className="educateLanding" />
        </div>
        <div className="educateContent">
          <h2>Empathy</h2>
          <p>Foster youth have undergone immense trauma. As adults, we must be able to listen and respond when needed with care and compassion.
            Put yourself in their situation for just a minute and try to understand how the system has failed them. We must continously be kind
            with foster youth in order to help them succeed.
          </p>
        </div>
        <div className="educateContent">
          <h2>Counseling</h2>
          <p>You are not a counselor but a mentor and guiding figure. Being part of the Foster Feed Friends network means that we are here for each
            other in whatever capacity we can be. There are resources for you as a youth, or mentor to recieve the necessary aid. Create an account to get started!
          </p>
        </div>
        <div className="sr-container">
          <h2>Have a resource to share? Let us know!</h2>
          <NavLink id="sr-btn" className="yellow-btn" to="/submitResource">Submit a Resource</NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, { signoutUser })(Educate));
