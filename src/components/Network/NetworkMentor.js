import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

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
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Organizaiton Name</h5>
                <h6 id="location">Location</h6>
                <p className="card-text"> Point of Contact Email</p>
                <NavLink className="green-btn" to="/SignUp/mentor">Email</NavLink>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Organizaiton Name</h5>
                <h6 id="location">Location</h6>
                <p className="card-text"> Point of Contact Email</p>
                <NavLink className="green-btn" to="/SignUp/mentor">Email</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(NetworkMentor));
