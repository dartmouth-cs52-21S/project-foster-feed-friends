import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { signinYouth } from '../../actions/onboarding-actions';

class SignInFoster extends Component {
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
      this.props.signinYouth(this.state, this.props.history);
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
        <h1 className="title">Sign In Foster Youth</h1>
        <FormControl className="signInSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.email} onChange={this.handleEmailChange} />
        </FormControl>
        <FormControl className="signInSpecificInput">
          <InputLabel className="sixteenpoint" htmlFor="component-simple">Password</InputLabel>
          <Input id="component-simple" className="sixteenpoint" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormControl>
        {/* <Button className="signInSpecificButton" variant="contained" color="primary">
          Sign-In
        </Button> */}
        <button type="button" className="yellowButton navLinkButton" onClick={this.onSubmit}>Sign In</button>

      </div>
    );
  }
}

export default withRouter(connect(null, { signinYouth })(SignInFoster));
