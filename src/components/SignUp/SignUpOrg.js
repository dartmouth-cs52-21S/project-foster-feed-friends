import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import {
  FormControl, InputLabel, Input,
} from '@material-ui/core';
<<<<<<< HEAD
import { signupOrg } from '../../actions';
import '../../website-styles/sign-inup.scss';
=======
import { signupOrg } from '../../actions/onboarding-actions';
>>>>>>> c029eac7e349489f508f1b52b760140ad873b1bd

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
    this.props.signupOrg(this.state, this.props.history);
  }

  render = () => {
    return (
      <div id="signUpSpecificContainer">
        <div className="header">
          <div id="su-title">Welcome to Foster Feed Friends! Sign up to [...]</div>
        </div>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Organization Name</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.orgname} onChange={this.handleOrgNameChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Location</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.location} onChange={this.handleLocationChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Name</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.pocname} onChange={this.handlePOCNameChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Point of Contact Email</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.email} onChange={this.handleEmailChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Email Confirmation</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.emailconfirm} onChange={this.handleEmailConfirmChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormControl>
        <FormControl className="signUpSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password Confirmation</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.passwordconfirm} onChange={this.handlePasswordConfirmChange} />
        </FormControl>
        <button type="button" className="yellowButton navLinkButton" variant="contained" onClick={this.onSubmit} color="primary">Sign-Up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupOrg })(SignUpOrg));
