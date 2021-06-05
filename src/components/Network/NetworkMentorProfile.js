/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Talk from 'talkjs';
import { fetchMentor, updateYouthMessaged } from '../../actions/network-actions';
import '../../profile-styles/mentor-profile.scss';
import '../../onboarding-styles/moment-card.scss';
import '../../onboarding-styles/mentor-path.scss';

const MomentThumbnail = (props) => {
  if (props.moment.symbol === 'star') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-star pink-btn" />
          {/* <i className="fas fa-trash" onClick={this.onDelete} /> */}
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}

        </div>
      </div>
    );
  } else if (props.moment.symbol === 'bridge') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-archway pink-btn" />
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'circle') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-spinner pink-btn" />
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
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

  message = () => {
    console.log('I MADE IT');
    window.open(`mailto:${this.props.currentMentor.email}?subject=Reaching Out`);
    // action that adds mentor to youth mesaged
    this.props.updateYouthMessaged(this.props.user.id, [...this.props.user.messaged, this.props.match.params.userID], this.props.history);
  }

  showMoments = (moments) => {
    if (moments) {
      return (moments.map((moment) => {
        // put this in a nav link
        // return (<Link id="tn-link" to={`posts/${post.id}`} key={post.id}> <MomentThumbnail id={post.id} key={post.id} post={post} /> </Link>);
        // return (<Link to={`posts/${post.id}`}> <Post id={post.id} key={post.id} post={post} /> </Link>);
        return <MomentThumbnail moment={moment} key={moment.title} />;
      }));
    }
    return (
      <div />
    );
  };

  handleMessageClick = (mentor) => {
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
            <div className="profile-header">
              <h1 className="profile-title">{this.props.currentMentor.firstName} {this.props.currentMentor.lastName}</h1>
            </div>
            <p className="profile-type">{this.props.currentMentor.type}</p>
            {/* <h2>Personal Information</h2> */}
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
            <button className="fas fa-comments pink-btn" type="button" onClick={() => this.handleMessageClick(this.props.currentMentor)} alt="submit" />

            <h3 className="sixteenpoint"> Location: {this.props.currentMentor.location}</h3>
            {/* <h3 className="sixteenpoint"> Bio: {this.props.currentMentor.why}</h3>

            {/* <a type="button" onClick={this.message} href={`mailto:${this.props.currentMentor.email}`}>Email Me</a> */}
            {/* <button type="button" onClick={this.message}>Email Me</button> */}
          </div>
          <div className="path-container">
            <div className="mentorpath-name">
              <h3 id="path-name">{this.props.currentMentor.firstName}&apos;s Path</h3>
            </div>
            <div className="all-moments">
              {this.showMoments(this.props.currentMentor.momentsPath)}
            </div>
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
