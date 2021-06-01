import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // org: '',
      // date: '',
      // time: '',
      // location: '',
      // contact: '',
      // description: '',
      // react: '',
    };
  }

    render = () => {
      return (
        <div>
          <div className="leftCard">
            <p>{this.props.event.date}</p>
            <p>{this.props.event.time}</p>
            <p>{this.props.event.location}</p>
          </div>
          <div className="rightCard">
            <p>{this.props.orgname}</p>
            {/* <p>{this.state.description}</p> */}
            <p>{this.state.contact}</p>
            {/* {this.state.react === 'true' ? <div className="reacts"> </div> : null } */}
          </div>
        </div>
      );
    }
}

export default withRouter(connect(null, { })(EventCard));
