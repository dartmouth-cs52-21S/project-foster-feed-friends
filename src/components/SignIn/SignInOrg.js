import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
import { signinOrg } from '../../actions/onboarding-actions';

class SignInOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onError = (event) => {
    this.setState({ error: event.target.value });
  }

  onSubmit = (event) => {
    if (this.state.email !== '' && this.state.password !== '') {
      this.props.signinOrg(this.state, this.props.history);
    } else {
      this.setState({ error: 'Missing fields! Please make sure you input your email and password' });
    }
    this.setState({
      email: '',
      password: '',
      error: '',
    });
  }

  render = () => {
    return (
      <div id="signInSpecificConatiner">
        <h1 className="title">Sign In Foster Organizations</h1>
        <FormControl className="signInSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Email</InputLabel>
          <Input className="sixteenpoint" id="component-simple" value={this.state.email} onChange={this.handleEmailChange} />
        </FormControl>
        <FormControl className="signInSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password</InputLabel>
          <Input className="sixteenpoint" id="component-simple" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormControl>
        <button className="yellow-btn" variant="contained" onClick={this.onSubmit} type="button">
          Sign-In
        </button>

      </div>
    );
  }
}

export default withRouter(connect(null, { signinOrg })(SignInOrg));
