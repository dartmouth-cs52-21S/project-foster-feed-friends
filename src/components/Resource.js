/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import '../platform-styles/network-mentor.scss';
import '../platform-styles/resources.scss';

import { fetchResources } from '../actions/resource-actions';

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.fetchResources();
  }

  onhandleclick = (email) => {
    window.open(`mailto:${email}?subject=Reaching Out`);
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  resourcesList = () => {
    const map = this.props.allResources.filter((res) => {
      return res.organizationName.toLowerCase().includes(this.state.text);
    }).map((resource) => {
      return (
      // <div className="col-sm-6 ">
        <div className="card res-card">
          <div className="card-body res-body">
            <h5 className="card-title res-title">{resource.organizationName}</h5>
            <h6 className="res-location">{resource.location}</h6>
            <h6 className="res-poc">Point of Contact: {resource.poc}</h6>
            <div className="contact-info">
              <a className="res-web" href={`${resource.website}`} target="_blank" rel="noopener noreferrer">website here</a>
              {/* <NavLink id="location" to={resource.website}>website</NavLink> */}
              {/* <i className="far fa-envelope green-btn">
              <a onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${resource.pocemail}`} target="_blank" rel="noopener noreferrer">Email</a>
            </i> */}
              <button type="button"
                className="far fa-envelope green-btn"
                // href={`mailto:${resource.pocemail}`}
                onClick={() => { this.onhandleclick(resource.pocemail); }}
                // onClick={() => { window.open(`mailto:${}subject=Reaching Out'); }}
              />
            </div>
          </div>
        </div>
      // </div>
      );
    });
    return map;
  }

  render() {
    return (
      <div>
        <div id="pink-banner">Resources</div>
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
          {this.resourcesList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allResources: reduxstate.resources.allResources,
});

export default withRouter(connect(mapStateToProps, { fetchResources })(Resource));
