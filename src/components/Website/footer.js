/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import '../../website-styles/footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <footer id="general-footer">
        <div className="container" id="footer-container">
          <div className="row">
            <div className="col-md-3">
              <h6 className="logo-name">
                Foster Feed Friends
              </h6>
              <p className="logo-desc">
                A community fostering connections and providing resources for youth.
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Explore
              </h6>
              <p className="footer-links">
                <NavLink className="text-reset" to="/">Home</NavLink>
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/educate">Educate</NavLink>
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/mentor">Mentor</NavLink>
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Contact Us
              </h6>
              <p className="footer-links">
                <a className="email"
                  href="mailto:fosterfeedfriends@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                > Email
                </a>
              </p>
              <p className="footer-links">
                <a href="https://www.linkedin.com/" className="text-reset">LinkedIn</a>
              </p>
              <p className="footer-links">
                <a href="https://www.facebook.com/" className="text-reset">Facebook</a>
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Support Us
              </h6>
              <p className="footer-links">
                <NavLink className="text-reset" to="/resources">Resources</NavLink>
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/SignUp/mentormoments">Become a Mentor</NavLink>
                =
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/signup">Sign Up</NavLink>
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Join Our Community
              </h6>
              <form className="md-form">
                {/* <input type="text" id="form1" className="form-control" placeholder="Your Email Here" />
                <button className="pink-btn" type="submit">subscribe</button> */}
                <NavLink className="footer-btn" to="/signup">Sign-Up</NavLink>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2021 Copyright: Foster Feed Friends
        </div>
      </footer>
    );
  }
}

export default withRouter(connect(null)(Footer));
