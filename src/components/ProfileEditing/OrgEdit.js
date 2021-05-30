import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { updateOrg } from '../../actions';

class OrgEdit extends Component {
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

  componentDidMount() {
    console.log(this.props.user.user);
    this.setState(this.props.user.user);
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
    console.log(this.state);
    this.props.updateOrg(this.state, this.props.history);
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
        <button type="button" className="yellowButton navLinkButton" variant="contained" onClick={this.onSubmit} color="primary">save</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  user: reduxState.user,
});

// get the actions from props
const mapDispatchToProps = (dispatch) => {
  return {
    updateOrg: (org, history) => {
      dispatch(updateOrg(org, history));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgEdit));
