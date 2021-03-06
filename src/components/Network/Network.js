/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../platform-styles/network-mentor.scss';
import AppBar from '@material-ui/core/AppBar';
import { fetchAll } from '../../actions/network-actions';

class Network extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.fetchAll();
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  orgsList = () => {
    const map = this.props.allOrgs.filter((res) => {
      return res.orgname.toLowerCase().includes(this.state.text);
    }).map((org) => {
      return (
        <NavLink to={`orgs/profile/${org.id}`} exact>
          <div className="card mc-card">
            <div className="card-body mc-body">
              <h4 className="card-title mc-title">{org.orgname} </h4>
              <h5 className="mc-location">{org.location}</h5>
              <h6 className="mc-email">{org.email}</h6>
            </div>
          </div>
        </NavLink>
      );
    });
    return map;
  }

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
          {this.orgsList()}
          {this.mentorsList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allOrgs: reduxstate.network.allOrgs,
  allMentors: reduxstate.networkMentors.allMentors,
  currentMentors: reduxstate.networkMentors.currentMentors,
});

export default withRouter(connect(mapStateToProps, { fetchAll })(Network));
