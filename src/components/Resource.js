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

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  resourcesList = () => {
    const map = this.props.allResources.filter((res) => {
      return res.organizationName.toLowerCase().includes(this.state.text);
    }).map((resource) => {
      return (
        <div className="col-sm-6 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{resource.organizationName}</h5>
              <h6 id="location">{resource.location}</h6>
              <h6 id="location">{resource.poc}</h6>
              <i className="far fa-envelope green-btn">
                <a onClick="window.open('mailto:your@email.address?subject=Reaching Out');" href={`mailto:${resource.pocemail}`} target="_blank" rel="noopener noreferrer">Email</a>
              </i>
            </div>
          </div>
        </div>
      );
    });
    return map;
  }

  render() {
    return (
      <div>
        <div id="banner">Resources</div>
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
