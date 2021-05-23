import React, { Component } from 'react';
import { connect } from 'react-redux';
// DONT FORGET NAV LINK
import { withRouter, NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../will.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div id="signInContainer">
        <h1> Choose Your User Sign In</h1>
        <div id="signInOptions">
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Organizations
              </Typography>
            </CardContent>
            <CardActions>
              <button type="button" className="yellowButton"><NavLink className="navLinkButton" to="/signin/org">Sign-In</NavLink></button>
            </CardActions>

          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Foster Youth
              </Typography>
            </CardContent>
            <CardActions>
              <button type="button" className="yellowButton"><NavLink className="navLinkButton" to="/signin/youth">Sign-In</NavLink></button>
            </CardActions>
          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Mentor
              </Typography>
            </CardContent>
            <button type="button" className="yellowButton"><NavLink className="navLinkButton" to="/signin/mentor">Sign-In</NavLink></button>
          </Card>

        </div>
        <p>New to Foster Feed Friends?</p>
        <button type="button" className="yellowButton"><NavLink className="navLinkButton" to="/signup">Sign-Up</NavLink></button>

      </div>
    );
  }
}

export default withRouter(connect(null, { })(SignIn));
