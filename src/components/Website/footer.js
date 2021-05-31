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
    // <div>
    //   <a href="https://www.freepik.com/vectors/people">People vector created by pikisuperstar - www.freepik.com</a>);
    // </div>
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
                {/* <a href="#!" className="text-reset">home</a> */}
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/educate">Educate</NavLink>
                {/* <a href="#!" className="text-reset">educate</a> */}
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/mentor">Mentor</NavLink>
                {/* <a href="#!" className="text-reset">mentor</a> */}
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Contact Us
              </h6>
              <p className="footer-links">
                <NavLink className="text-reset" to="/">Email</NavLink>
                {/* <a href="#!" className="text-reset">email</a> */}
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
                <NavLink className="text-reset" to="/">Donate</NavLink>
                {/* <a href="#!" className="text-reset">Donate</a> */}
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/SignUp/mentor">Become a Mentor</NavLink>
                {/* <a href="#!" className="text-reset">Become a Mentor</a> */}
              </p>
              <p className="footer-links">
                <NavLink className="text-reset" to="/signup">Sign Up</NavLink>
                {/* <a href="#!" className="text-reset">Sign Up</a> */}
              </p>
            </div>
            <div className="col-md-2">
              <h6 className="footer-col">
                Stay Updated
              </h6>
              <form className="md-form">
                <input type="text" id="form1" className="form-control" placeholder="Your Email Here" />
                <button className="pink-btn" type="submit">subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2021 Copyright: Foster Feed Friends
          {/* <a className="text-reset" href="/"> FosterFeedFriends</a> */}
        </div>
      </footer>

    );
  }
}

export default withRouter(connect(null)(Footer));
