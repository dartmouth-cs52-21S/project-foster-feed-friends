/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import '../../platform-styles/network-mentor.scss';
import { fetchSpecificEvent, updateYouthEvent } from '../../actions/events-actions';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   events: [],
    };
  }

  componentDidMount() {
    this.props.fetchSpecificEvent(this.props.match.params.userId, this.props.match.params.eventId);
  }

  addToProfile = () => {
    this.props.updateYouthEvent(this.props.user.id, this.props.match.params.eventId, [...this.props.user.events, this.props.match.params.eventId], this.props.history);
  }

  render() {
    console.log(this.props.user.events);
    return (
      <div>
        <div> {this.props.currentEvent.name}</div>
        <div> {this.props.currentEvent.date}</div>
        <div> {this.props.currentEvent.time}</div>
        <div> {this.props.currentEvent.location}</div>
        <div> {this.props.currentEvent.coordinator}</div>
        <button type="submit" onClick={this.addToProfile}>Add Event To Profile</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  currentEvent: reduxstate.events.current,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchSpecificEvent, updateYouthEvent })(Event));
