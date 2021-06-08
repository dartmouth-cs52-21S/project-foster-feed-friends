/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSpecificEvent, updateYouthEvent } from '../../actions/events-actions';
import './Event.scss';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchSpecificEvent(this.props.match.params.userId, this.props.match.params.eventId);
  }

  addToProfile = () => {
    console.log('events from user', this.props.user.events);
    console.log('event id', this.props.match.params.eventId);
    this.props.updateYouthEvent(this.props.user.id, this.props.match.params.eventId, [...this.props.user.events, this.props.match.params.eventId], this.props.history);
  }

  render() {
    console.log(this.props.user.events);
    return (
      <div className="eventDetails">
        <h1>Event Details</h1>
        <div> Event Name: {this.props.currentEvent.name}</div>
        <div> Event Date: {this.props.currentEvent.date}</div>
        <div> Event Time: {this.props.currentEvent.time}</div>
        <div> Event Location: {this.props.currentEvent.location}</div>
        <div> Event Coordinator: {this.props.currentEvent.coordinator}</div>
        <button id="eventDetailsBtn" className="lightgreen-btn" type="submit" onClick={this.addToProfile}>Add Event To Profile</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  currentEvent: reduxstate.events.current,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchSpecificEvent, updateYouthEvent })(Event));
