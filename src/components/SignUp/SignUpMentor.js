import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormLabel from '@material-ui/core/FormLabel';
// import { FormControlLabel } from '@material-ui/core';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signupMentor } from '../../actions/onboarding-actions';
import '../../website-styles/sign-inup.scss';

class SignUpMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      organization: '',
      careerPath: '',
      email: '',
      emailconfirm: '',
      password: '',
      passwordconfirm: '',
      fosterBackground: 'No',
      bio: '',
      type: 'mentor',
      momentsPath: props.allMoments,

    };
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  }

  handleOrgChange = (event) => {
    this.setState({ organization: event.target.value });
  }

  handleCareerChange = (event) => {
    this.setState({ careerPath: event.target.value });
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleEmailConfirmChange = (event) => {
    this.setState({ emailconfirm: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmChange = (event) => {
    this.setState({ passwordconfirm: event.target.value });
  }

  handleFosterBackgroundChange = (event) => {
    this.setState({ fosterBackground: event.target.value });
  }

  onSubmit = (event) => {
    console.log(this.state);
    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.careerPath !== ''
    && this.state.email !== '' && this.state.emailconfirm !== '' && this.state.password !== ''
    && this.state.passwordconfirm !== '') {
      if (this.state.email === this.state.emailconfirm && this.state.password === this.state.passwordconfirm) {
        this.props.signupMentor(this.state, this.props.history);
      } else {
        this.setState({ error: 'Make sure both emails and passwords match!' });
      }
    } else {
      this.setState({ error: 'Missing fields! Please make sure you input your email and password' });
    }
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      age: '',
      emailConfrim: '',
      password: '',
      passwordConfirm: '',
    });
  }

  render = () => {
    // console.log(localStorage.getItem('momentsPath'));
    return (
      <div id="signUpSpecificContainer">
        <div className="header">
          <h1 className="title"> Welcome to Foster Feed Friends! Sign up now to build your best future! </h1>
          <div>{this.state.error}</div>
        </div>
        <div className="inputColumns">
          <div className="inputColumn">
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">First Name</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Organization</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.organization} onChange={this.handleOrgChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Email</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.email} onChange={this.handleEmailChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Email Confirmation</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.emailconfirm} onChange={this.handleEmailConfirmChange} />
            </FormControl>
          </div>
          <div className="inputColumn">
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Last Name</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.lastName} onChange={this.handleLastNameChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Career Path</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.careerPath} onChange={this.handleCareerChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Password</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.password} onChange={this.handlePasswordChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Password Confirmation</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.passwordconfirm} onChange={this.handlePasswordConfirmChange} />
            </FormControl>
          </div>
        </div>
        <button type="button" className="yellow-btn" variant="contained" onClick={this.onSubmit} color="primary">Sign-Up</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMoments: reduxstate.moments.allMoments,
});

export default withRouter(connect(mapStateToProps, { signupMentor })(SignUpMentor));
