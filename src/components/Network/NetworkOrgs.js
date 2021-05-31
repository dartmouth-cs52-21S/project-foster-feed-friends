import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { fetchOrgs } from '../../actions/network-actions';

class NetworkOrgs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchOrgs();
  }

  orgsList = () => {
    const map = this.props.allOrgs.map((org) => {
      return (
        <NavLink to={`orgs/${org.id}`} exact>
          {/* <div className="col-sm-6"> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{org.orgname}</h5>
              <h6 id="location">{org.location}</h6>
              <p className="card-text"> {org.poc}</p>
              <i className="far fa-envelope green-btn" />
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
            <NavLink to="/orgs">
              <Tab label="Organizations" />
            </NavLink>
            <NavLink to="/mentors">
              <Tab label="Mentors" />
            </NavLink>
            <NavLink to="/mentor/network">
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
          {this.orgsList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allOrgs: reduxstate.network.allOrgs,
});

export default withRouter(connect(mapStateToProps, { fetchOrgs })(NetworkOrgs));
