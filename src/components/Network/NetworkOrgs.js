/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import { fetchOrgs } from '../../actions/network-actions';
import '../../platform-styles/network-mentor.scss';

class NetworkOrgs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchOrgs();
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
          {/* <div className="col-sm-6"> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{org.orgname}</h5>
              <h6 id="location">{org.location}</h6>
              <p className="card-text"> {org.poc}</p>
              <i className="far fa-envelope green-btn">
                <a className="email" onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${org.email}`} target="_blank" rel="noopener noreferrer"> Email</a>
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
          <div className="sortTab">
            <NavLink to="/networks/resources">
              <div>Organizations</div>
            </NavLink>
            <NavLink to="/networks/mentors">
              <div>Mentors</div>
            </NavLink>
            <NavLink to="/networks/all">
              <div>All</div>
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
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allOrgs: reduxstate.network.allOrgs,
});

export default withRouter(connect(mapStateToProps, { fetchOrgs })(NetworkOrgs));
