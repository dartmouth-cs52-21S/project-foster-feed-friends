import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import * as ReactBootStrap from 'react-bootstrap';

// DONT FORGET NAV LINK
import { withRouter } from 'react-router-dom';
import { signupYouth } from '../../actions/onboarding-actions';

class SignUpFoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      hometown: '',
      age: '',
      email: '',
      emailconfirm: '',
      password: '',
      passwordconfirm: '',
      type: 'youth',
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  }

  handleHometownChange = (event) => {
    this.setState({ hometown: event.target.value });
  }

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
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

  onSubmit = (event) => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.props.signupYouth(this.state, this.props.history);
    } else {
      this.setState({ error: 'Missing fields! Please make sure you input your email and password' });
    }
    this.setState({
      firstName: '',
      lastName: '',
      hometown: '',
      age: '',
      email: '',
      emailconfirm: '',
      password: '',
      passwordconfirm: '',
    });
  }

  render = () => {
    return (
      <div id="signUpSpecificContainer">
        <div className="header">
          <h1 className="title"> Welcome to Foster Feed Friends! Sign up now to build your best future! </h1>
        </div>
        <div className="inputColumns">
          <div className="inputColumn">
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">First Name</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            </FormControl>
            <FormControl className="signUpSpecificInput">
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Hometown</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.hometown} onChange={this.handleHometownChange} />
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
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Age</InputLabel>
              <Input id="component-simple" className="sixteenpoint" value={this.state.age} onChange={this.handleAgeChange} />
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
        <button type="button" className="yellowButton navLinkButton" variant="contained" onClick={this.onSubmit} color="primary">Sign-Up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupYouth })(SignUpFoster));
