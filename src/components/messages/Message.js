/* eslint-disable no-return-assign */
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Talk from 'talkjs';

// adapted from https://talkjs.com/resources/article/how-to-build-a-linkedin-like-messaging-app-with-react-and-talkjs/#setting-up-talkjs
// and https://github.com/talkjs/talkjs-examples/tree/master/react/linkedin-like-app/src
class MessageInbox extends Component {
  constructor(props) {
    super(props);

    this.inbox = undefined;

    this.state = {
    };
  }

  componentDidMount() {
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: this.props.user.id,
          name: this.props.user.firstName,
          email: this.props.user.email,
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tLpEOP6z',
            me,
          });
        }

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <>
        <div style={{ height: '500px' }} className="inbox-container" ref={(c) => this.container = c}>Loading...</div>
      </>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMentors: reduxstate.networkMentors.allMentors,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, {})(MessageInbox));
