import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as ReactBootStrap from 'react-bootstrap';
// DONT FORGET NAV LINK
import { withRouter, NavLink } from 'react-router-dom';
import { signoutUser } from '../../actions/onboarding-actions';
import Footer from './footer';
import '../../website-styles/landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    // localStorage.removeItem('pathYouth');
    return (
      <div id="landing-container">
        <div className="landingSubcontainer">
          <h1>We are a pathway to building better futures.</h1>
          <p>Foster Feed Friends aims to provide resourses and information to foster youth about to age out of the system.
            We want to enable foster children to not only understand thier options but take advantage of it.
          </p>
          <NavLink className="yellow-btn" to="/signup">Join Our Community</NavLink>
          {/* <button className="yellowButton" type="button"><NavLink className="navLinkButton" to="/signup">Join Our Community</NavLink></button> */}
        </div>
        <div className="landingLeftSubcontainer">
          <div id="content">
            <div className="subLeft">
              <h2>Our Mission</h2>
              <div className="underlineLight" />
              <p>At Foster Feed Friends we aim to build a community that informs, mentors, and empowers foster youth as they prepare to age out of the system.
                These youth have unlimited potential that needs the support and care to help them accomplish their goals.
              </p>
            </div>
            <div className="subLeft">
              <h2>How we do it</h2>
              <div className="underlineDark" />
              <p>Foster Feed Friends’s platform host an easily accessible database for foster youth to contact out to
                mentors willing to share and guide these youth in the next chapter of their lives. Our on boarding process allows
                foster youth to truly explore their options as they begin to think of what lies beyond the foster care system.
                Along the way, foster youth are exposed to resources that are usesful as they explore their options We keep
                youth engaged with milestone badges, and allow them to connect with other foster youth interested in their own path.
              </p>
            </div>
            <div className="subLeft">
              <h2>Who are we?</h2>
              <div className="underlineLight" />
              <p>
                We are six dartmouth students dedicated to making an social impact on the foster youth community
              </p>
              <div id="teamImages">
                <div id="team" />
              </div>
            </div>
          </div>
          <img id="blobs" src="src/img/landingBlobs.png" alt="" height="450px" />
        </div>
        <Footer />
      </div>

    );
  }
}

export default withRouter(connect(null, { signoutUser })(Landing));
