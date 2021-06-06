/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
// import Talk from 'talkjs';
import { fetchMentors } from '../../actions/network-actions';
import '../../platform-styles/network-mentor.scss';

// adapted from https://talkjs.com/resources/article/how-to-build-a-linkedin-like-messaging-app-with-react-and-talkjs/#setting-up-talkjs
// and https://github.com/talkjs/talkjs-examples/tree/master/react/linkedin-like-app/src
class NetworkMentors extends Component {
  constructor(props) {
    super(props);
    this.container = undefined;
    this.state = {
      text: '',
    };
    // this.container = React.createRef();
  }

  componentDidMount() {
    this.props.fetchMentors();
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  // handleContainer = (c) => {
  //   this.setState({
  //     container: c,
  //   });
  // }

  // handleMessageClick = (mentor) => {
  //   console.log('made it');
  //   const currentUser = this.props.user.id;
  //   const mentorUser = mentor.id;
  //   /* Session initialization code */
  //   Talk.ready.then(() => {
  //     /* Create the two users that will participate in the conversation */
  //     const me = new Talk.User({
  //       id: currentUser,
  //       name: this.props.user.firstName,
  //       email: this.props.user.email,
  //     });
  //     const other = new Talk.User({
  //       id: mentorUser,
  //       name: mentor.firstName,
  //       email: mentor.email,
  //     });
  //     /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
  //     if (!window.talkSession) {
  //       window.talkSession = new Talk.Session({
  //         appId: 'tLpEOP6z',
  //         me,
  //       });
  //     }
  //     /* Get a conversation ID or create one */
  //     const conversationId = Talk.oneOnOneId(me, other);
  //     const conversation = window.talkSession.getOrCreateConversation(conversationId);
  //     /* Set participants of the conversations */
  //     conversation.setParticipant(me);
  //     conversation.setParticipant(other);
  //     /* Create and mount chatbox in container */
  //     this.chatbox = window.talkSession.createChatbox(conversation);
  //     this.chatbox.mount(this.container);
  //   })
  //     .catch((e) => console.error(e));
  // }

  mentorsList = () => {
    const map = this.props.allMentors.filter((res) => {
      return res.firstName.toLowerCase().includes(this.state.text);
    }).map((mentor) => {
      return (
        <NavLink to={`mentor/profile/${mentor.id}`} exact>
          {/* <div className="col-sm-6">
            {console.log(mentor.firstName, ' ', mentor.id)} */}
          <div className="card mc-card">
            <div className="card-body mc-body">
              <h4 className="card-title mc-title">{mentor.firstName} {mentor.lastName} </h4>
              <h5 className="mc-location">{mentor.location}</h5>
              <h6 className="mc-email">{mentor.email}</h6>
              {/* <p className="card-text mc-bio"> {mentor.bio}</p> */}
              {/* <i className="far fa-envelope green-btn">
                <a className="email" onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${mentor.email}`} target="_blank" rel="noopener noreferrer"> Email</a>
              </i> */}
              {/* <button className="fas fa-comments pink-btn" type="button" onClick={() => this.handleMessageClick(mentor)} /> */}
            </div>
          </div>

          {/* </div> */}
        </NavLink>
      );
    });
    return map;
  }

  render() {
    return (
      <div>
        <div id="banner">Network</div>
        <AppBar position="static" className="sortingBar">
          <div className="sortTab">
            <NavLink to="/networks/resources">
              <div>Organizations</div>
            </NavLink>
            <NavLink to="/networks/mentors">
              <div>Mentors</div>
            </NavLink>
            <NavLink to="/networks/all">
              <div id="all">All</div>
            </NavLink>
          </div>
        </AppBar>
        <div className="searchBar input-group rounded">
          <input type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={this.onInputChange}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search" />
          </span>
        </div>
        <ul className="orgList cardContainer">
          {this.mentorsList()}
          {/* { this.props.allMentors.map(mentor =>
                                    <NavLink to={`mentor/profile/${mentor.id}`} exact>
                                    <div className="card">
                                      <div className="card-body">
                                        <h5 className="card-title">{mentor.firstName}{mentor.lastName} </h5>
                                        <h6 id="location">{mentor.hometown}</h6>
                                        <p className="card-text"> {mentor.bio}</p>
                                        <i className="far fa-envelope green-btn">
                                          <a className="email" onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${mentor.email}`}
                                          target="_blank" rel="noopener noreferrer"> Email</a>
                                        </i>
                                        <button className="fas fa-comments pink-btn" type="button" onClick={() => this.handleMessageClick(mentor)} />
                                      </div>
                                    </div>
                                  </NavLink>
                        )}
                    </ul>
                    <div className="chatbox-container" ref={c => this.container = c}>
                        <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
                    </div>
                </div> */}
        </ul>
        {/* <div className="chatbox-container" ref={(c) => this.container = c}>
          <div id="talkjs-container" style={{ height: '300px' }}><i /></div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMentors: reduxstate.networkMentors.allMentors,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchMentors })(NetworkMentors));
