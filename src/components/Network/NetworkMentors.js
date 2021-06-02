/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { fetchMentors } from '../../actions/network-actions';
import '../../platform-styles/network-mentor.scss';

class NetworkMentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchMentors();
  }

  mentorsList = () => {
    const map = this.props.allMentors.map((mentor) => {
      return (
        <NavLink to={`mentors/profile/${mentor.id}`} exact>
          {/* <div className="col-sm-6"> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{mentor.firstName}{mentor.lastName} </h5>
              <h6 id="location">{mentor.hometown}</h6>
              <p className="card-text"> {mentor.bio}</p>
              <i className="far fa-envelope green-btn">
                <a onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${mentor.email}`} target="_blank" rel="noopener noreferrer"> Email</a>
              </i>
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
          <Tabs saria-label="simple tabs example">
            <NavLink to="/networks/resources">
              <Tab label="Organizations" />
            </NavLink>
            <NavLink to="/networks/mentors">
              <Tab label="Mentors" />
            </NavLink>
            <NavLink to="/networks/all">
              <Tab label="All" />
            </NavLink>
          </Tabs>
        </AppBar>
        <div className="searchBar input-group rounded">
          <input type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search" />
          </span>
        </div>
        <ul id="orgList">
          {this.mentorsList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMentors: reduxstate.networkMentors.allMentors,
});

export default withRouter(connect(mapStateToProps, { fetchMentors })(NetworkMentors));
