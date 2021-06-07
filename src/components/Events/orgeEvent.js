/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import '../../platform-styles/network-mentor.scss';
import { fetchSpecificEvent, deleteEvent } from '../../actions/events-actions';
import './Event.scss';

class OrgEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchSpecificEvent(this.props.match.params.userId, this.props.match.params.eventId);
  }

  delete = () => {
    this.props.deleteEvent(this.props.match.params.userId, this.props.match.params.eventId, this.props.history);
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
        <button id="eventDetailsBtn" className="lightgreen-btn" type="submit" onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  currentEvent: reduxstate.events.current,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchSpecificEvent, deleteEvent })(OrgEvent));
