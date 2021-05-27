import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grey: true,
      thumbsUp: false,
      thumbsDown: false,
    };
  }

  thumbsUp = (event) => {
    if (this.state.thumbsUp === false) {
      this.setState({ thumbsUp: true });
    } else {
      this.setState({ thumbsUp: false });
    }
  }

  thumbsDown = (event) => {
    if (this.state.thumbsDown === false) {
      this.setState({ thumbsDown: true });
    } else {
      this.setState({ thumbsDown: false });
    }
  }

    render = () => {
      if (this.state.grey === 'true') {
        return (
          <div>
            <div>
              <img src="" alt="thumbs up" onClick={this.thumbsUp} />
              <img src="" alt="thumbs down" onClick={this.thumbsDown} />
            </div>

          </div>
        );
      } else {
        return (
          <div>
            <img src="" alt="thumbs up" onClick={this.thumbsUp} />
            <img src="" alt="thumbs down" onClick={this.thumbsDown} />
          </div>
        );
      }
    };
}

export default withRouter(connect(null, { })(EventCard));
