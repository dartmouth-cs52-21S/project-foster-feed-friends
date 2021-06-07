import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import {
  FormControl, InputLabel, Input,
} from '@material-ui/core';
import { signupOrg } from '../../actions/onboarding-actions';

class SignUpOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgname: '',
      location: '',
      pocname: '',
      email: '',
      emailconfirm: '',
      password: '',
      passwordconfirm: '',
      type: 'org',
    };
  }

  handleOrgNameChange = (event) => {
    this.setState({ orgname: event.target.value });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handlePOCNameChange = (event) => {
    this.setState({ pocname: event.target.value });
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
    // this.setState({
    //   email: this.email,
    //   password: this.password,
    //   username: this.username,
    // });
    console.log(this.state);
    if (this.state.orgname !== '' && this.state.location !== '' && this.state.pocname !== ''
    && this.state.email !== '' && this.state.emailconfirm !== '' && this.state.password !== ''
    && this.state.passwordconfirm !== '') {
      if (this.state.email === this.state.emailconfirm && this.state.password === this.state.passwordconfirm) {
        this.props.signupOrg(this.state, this.props.history);
      } else {
        this.setState({ error: 'Make sure both emails and passwords match!' });
      }
    } else {
      this.setState({ error: 'Missing fields! Please make sure you input your email and password' });
    }
  }

  render = () => {
    return (
      <div id="signUpSpecificContainer">
        <div className="header">
          <div className="title">Welcome to Foster Feed Friends! Sign up to join our network.<sub>*Required Field</sub></div>
          <div>{this.state.error}</div>
        </div>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Organization Name<sup>*</sup></InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.orgname} onChange={this.handleOrgNameChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Location<sup>*</sup></InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.location} onChange={this.handleLocationChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Name<sup>*</sup></InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.pocname} onChange={this.handlePOCNameChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Email<sup>*</sup></InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.email} onChange={this.handleEmailChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Email Confirmation<sup>*</sup></InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.emailconfirm} onChange={this.handleEmailConfirmChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password<sup>*</sup></InputLabel>
          <Input type="password" id="component-simple" className="sixteenpoint" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password Confirmation<sup>*</sup></InputLabel>
          <Input type="password" id="component-simple" className="sixteenpoint" value={this.state.passwordconfirm} onChange={this.handlePasswordConfirmChange} />
        </FormControl>
        <button type="button" className="yellow-btn" variant="contained" onClick={this.onSubmit} color="primary">Sign-Up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupOrg })(SignUpOrg));
