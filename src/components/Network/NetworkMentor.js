/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../../platform-styles/network-mentor.scss';

class NetworkMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
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
            <NavLink to="/network">
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
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Organizaiton Name</h5>
                <h6 id="location">Location</h6>
                <p className="card-text"> Point of Contact Name</p>
                <p className="card-text"> Website</p>
                <i className="far fa-envelope green-btn" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Organizaiton Name</h5>
                <h6 id="location">Location</h6>
                <p className="card-text"> Point of Contact Name</p>
                <p className="card-text"> Website</p>
                <i className="far fa-envelope green-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(NetworkMentor));
