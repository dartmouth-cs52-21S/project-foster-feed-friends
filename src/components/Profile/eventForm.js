import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { createEvent } from '../../actions/events-actions';
import { fetchOrgInfo } from '../../actions/user-actions';

class eventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      location: '',
      coordinator: '',
    };
  }

  componentDidMount = () => {
    fetchOrgInfo(this.props.match.params.userID);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  }

  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  }

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }

  handleCoordinatorChange = (event) => {
    this.setState({ coordinator: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  createEventButton = (event) => {
    this.props.createEvent(this.state, this.props.match.params.userID, this.props.history);
  }

  render = () => {
    return (
      <div>
        <form>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Name</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.name} onChange={this.handleNameChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Date</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.date} onChange={this.handleDateChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Time</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.time} onChange={this.handleTimeChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Location</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.location} onChange={this.handleLocationChange} />
          </FormControl>
          <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Coordinator</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.coordinator} onChange={this.handleCoordinatorChange} />
          </FormControl>
          {/* <FormControl className="signUpSpecificInput">
            <InputLabel className="sixteenpoint" htmlFor="component-simple">Event Description</InputLabel>
            <Input id="component-simple" className="sixteenpoint" value={this.state.description} onChange={this.handleDescriptionChange} />
          </FormControl> */}
        </form>
        <button type="button" className="yellow-btn" onClick={this.createEventButton}>Submit</button>

      </div>

    );
  }
}

export default withRouter(connect(null, { createEvent, fetchOrgInfo })(eventForm));
