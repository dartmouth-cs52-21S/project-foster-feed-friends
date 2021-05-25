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

import { signupMentor } from '../../actions';

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
    if (this.state.email !== '' && this.state.password !== '') {
      this.props.signupMentor(this.state, this.props.history);
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
              <InputLabel className="sixteenpoint" htmlFor="component-simple">Organizaiton</InputLabel>
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
            {/* <div className="radioButtonsContainer">
              <FormLabel className="sixteenpoint">Are you a former foster youth?</FormLabel>
              <RadioGroup className="radioButtons" value={this.state.fosterBackground} onChange={this.handleFosterBackgroundChange}>
                <FormControlLabel
                  value="FosterBackgroundYes"
                  colorSecondary="primary"
                  size="small"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="FosterBackgroundNo"
                  size="small"
                  control={<Radio />}
                  colorSecon="primary"
                  label="No"
                />

              </RadioGroup>
            </div> */}

          </div>

        </div>
        <button type="button" className="yellowButton navLinkButton" variant="contained" onClick={this.onSubmit} color="primary">Sign-Up</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupMentor })(SignUpMentor));
