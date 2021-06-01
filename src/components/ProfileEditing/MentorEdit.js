import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { updateMentor } from '../../actions/user-actions';

class MentorEdit extends Component {
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

    };
  }

  componentDidMount() {
    this.setState(this.props.user.user);
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

  handleFosterBackgroundChange = (event) => {
    this.setState({ fosterBackground: event.target.value });
  }

  onSubmit = () => {
    this.props.updateMentor(this.state, this.props.history);
  }

  render = () => {
    return (
      <div>
        <div className="header">
          <div id="su-title">Edit Your Profile</div>
        </div>
        <div>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">First Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Organization</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.organization} onChange={this.handleOrgChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Last Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.lastName} onChange={this.handleLastNameChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Career Path</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.careerPath} onChange={this.handleCareerChange} />
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
    updateMentor: (mentor, history) => {
      dispatch(updateMentor(mentor, history));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MentorEdit));
