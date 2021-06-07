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
  }

  componentDidMount() {
    this.props.fetchMentors();
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  mentorsList = () => {
    const map = this.props.allMentors.filter((res) => {
      return res.firstName.toLowerCase().includes(this.state.text);
    }).map((mentor) => {
      return (
        <NavLink to={`mentor/profile/${mentor.id}`} exact>
          <div className="card mc-card">
            <div className="card-body mc-body">
              <h4 className="card-title mc-title">{mentor.firstName} {mentor.lastName} </h4>
              <h5 className="mc-location">{mentor.location}</h5>
              <h6 className="mc-email">{mentor.email}</h6>
            </div>
          </div>
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
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMentors: reduxstate.networkMentors.allMentors,
  user: reduxstate.user.user,
});

export default withRouter(connect(mapStateToProps, { fetchMentors })(NetworkMentors));
