import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: '',
      date: '',
      time: '',
      location: '',
      contact: '',
      // description: '',
      // react: '',
    };
  }

    render = () => {
      return (
        <div>
          <div className="leftCard">
            <p>{this.state.date}</p>
            <p>{this.state.time}</p>
            <p>{this.state.location}</p>
          </div>
          <div className="rightCard">
            <p>{this.state.org}</p>
            {/* <p>{this.state.description}</p> */}
            <p>{this.state.contact}</p>
            {/* {this.state.react === 'true' ? <div className="reacts"> </div> : null } */}
          </div>
        </div>
      );
    }
}

export default withRouter(connect(null, { })(EventCard));
