import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../website-styles/sign-inup.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div id="signInContainer">
        <h1 className="title"> Choose Your User Sign In</h1>
        <div id="signInOptions">
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Organizations
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink className="yellow-btn" to="/signin/org">Sign-In</NavLink>
            </CardActions>
          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Mentor
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink className="yellow-btn" to="/signin/mentor">Sign-In</NavLink>
            </CardActions>
          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Foster Youth
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink className="yellow-btn" to="/signin/youth">Sign-In</NavLink>
            </CardActions>
          </Card>
        </div>
        <div id="ending">
          <p>New to Foster Feed Friends?</p>
          <NavLink className="yellow-btn" to="/signup">Sign-Up</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(SignIn));
