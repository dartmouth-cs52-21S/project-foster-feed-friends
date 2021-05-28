import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { updateYouth } from '../../actions';

class FosterEdit extends Component {
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
    };
  }

  componentDidMount() {
    console.log(this.props.user.user);
    this.setState(this.props.user.user);
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

  onSubmit = () => {
    this.props.updateYouth(this.state, this.props.history);
    console.log('hii');
  }

  render = () => {
    return (
      <div>
        <div>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">First Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Hometown</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.hometown} onChange={this.handleHometownChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Last Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Age</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.age} onChange={this.handleAgeChange} />
          </FormControl>

        </div>
        <button type="button" className="yellowButton navLinkButton" variant="contained" onClick={this.onSubmit} color="primary">Save</button>
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
    updateYouth: (youth, history) => {
      dispatch(updateYouth(youth, history));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FosterEdit));
