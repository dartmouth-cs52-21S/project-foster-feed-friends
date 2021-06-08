/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Talk from 'talkjs';
import { fetchMentor, updateYouthMessaged } from '../../actions/network-actions';
import '../../profile-styles/mentor-profile.scss';
import '../../onboarding-styles/moment-card.scss';
import '../../onboarding-styles/mentor-path.scss';
import path from '../YouthOnboarding/path.png';

const MomentThumbnail = (props) => {
  if (props.moment.symbol === 'star') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-star pop-sym" />
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'bridge') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-archway pop-sym" />
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'circle') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-spinner pop-sym" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
        </div>
      </div>
    );
  }
};

class NetworkMentorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchMentor(this.props.match.params.userID);
  }

  showMoments = (moments) => {
    if (moments) {
      return (moments.map((moment) => {
        return <MomentThumbnail moment={moment} key={moment.title} />;
      }));
    }
    return (
      <div />
    );
  };

  // adapted from https://talkjs.com/resources/article/how-to-build-a-linkedin-like-messaging-app-with-react-and-talkjs/#setting-up-talkjs
  // and https://github.com/talkjs/talkjs-examples/tree/master/react/linkedin-like-app/src
  handleMessageClick = (mentor) => {
    this.props.updateYouthMessaged(this.props.user.id, [...this.props.user.messaged, this.props.match.params.userID]);
    console.log('mentor passed in:', mentor);
    const currentUser = this.props.user.id;
    const mentorUser = mentor.id;
    console.log('currentUser: ', currentUser);
    console.log('mentorUser: ', mentorUser);
    /* Session initialization code */
    Talk.ready.then(() => {
      /* Create the two users that will participate in the conversation */
      const me = new Talk.User({
        id: currentUser,
        name: this.props.user.firstName,
        email: this.props.user.email,
      });
      const other = new Talk.User({
        id: mentorUser,
        name: mentor.firstName,
        email: mentor.email,
      });
      /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
          appId: 'tLpEOP6z',
          me,
        });
      }
      /* Get a conversation ID or create one */
      const conversationId = Talk.oneOnOneId(me, other);
      const conversation = window.talkSession.getOrCreateConversation(conversationId);
      /* Set participants of the conversations */
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      /* Create and mount chatbox in container */
      this.chatbox = window.talkSession.createChatbox(conversation);
      this.chatbox.mount(this.container);
    })
      .catch((e) => console.error(e));
  }

  render = () => {
    return (
      <div>
        <div className="profilePageContainer">
          <div className="leftBar">
            <div className="network-header">
              <h1 className="profile-title">{this.props.currentMentor.firstName} {this.props.currentMentor.lastName}</h1>
              <button className="message-btn" type="button" onClick={() => this.handleMessageClick(this.props.currentMentor)}>Message Me</button>
            </div>
            <p className="profile-type">{this.props.currentMentor.type}</p>
            <div className="profile-info">
              <div className="profile-section">
                <h3>Career Path:</h3>
                <p>{this.props.currentMentor.careerPath}</p>
              </div>
              <div className="profile-section">
                <h3>Email:</h3>
                <p>{this.props.currentMentor.email}</p>
              </div>
              <div className="profile-section">
                <h3>Location:</h3>
                <p>{this.props.currentMentor.location}</p>
              </div>
              <div className="profile-section">
                <h3>Bio:</h3>
                <p>{this.props.currentMentor.bio}</p>
              </div>
            </div>
          </div>
          <div className="path-container">
            <div className="mentorpath-name">
              <h3 id="path-name">{this.props.currentMentor.firstName}&apos;s Path</h3>
            </div>
            <div className="all-moments">
              {this.showMoments(this.props.currentMentor.momentsPath)}
            </div>
            <img src={path} alt="path" width="100%" />
          </div>
        </div>
        <div className="chatbox-container" ref={(c) => this.container = c}>
          <div id="talkjs-container" style={{ height: '300px' }}><i /></div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    currentMentor: reduxState.networkMentors.currentMentor,
    user: reduxState.user.user,
  };
}
export default withRouter(connect(mapStateToProps, { fetchMentor, updateYouthMessaged })(NetworkMentorProfile));
