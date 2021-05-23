import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderUserInfo } from '../actions';

class ProfileOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.renderUserInfo(this.props.match.params.userID);
  }

  render() {
    return (
      <div>Org name:{this.props.org.orgname} </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    org: reduxState.org,
  };
}

export default connect(mapStateToProps, { renderUserInfo })(ProfileOrg);
