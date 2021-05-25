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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = () => {
    return (
      <div id="signInContainer">
        <h1 className="title"> Choose Your User Sign Up</h1>
        <div id="signInOptions">
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Organizations
              </Typography>
            </CardContent>
            <CardActions>
              <button type="button" className="yellowButton"><NavLink class="navLinkButton" to="/SignUp/org">Sign-Up</NavLink></button>
            </CardActions>

          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Mentor
              </Typography>
            </CardContent>
            <CardActions>
              <button type="button" className="yellowButton"><NavLink class="navLinkButton" to="/SignUp/mentor">Sign-Up</NavLink></button>
            </CardActions>
          </Card>
          <Card className="signInCard" variant="outlined">
            <CardContent>
              <Typography className="title" color="textPrimary" gutterBottom>
                Foster Youth
              </Typography>
            </CardContent>
            <CardActions>
              <button type="button" className="yellowButton"><NavLink class="navLinkButton" to="/SignUp/youth">Sign-Up</NavLink></button>
            </CardActions>
          </Card>

        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(SignUp));