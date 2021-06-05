import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import MentorMomentsUpdateModal from './MentorMomentsUpdate-Modal';
import { fetchMoments } from '../../actions/moments-action';
import { updateMentorMoments } from '../../actions/user-actions';
import '../../onboarding-styles/moment-card.scss';
import '../../onboarding-styles/mentor-path.scss';
import path from '../YouthOnboarding/path.png';

// const [show, setShow] = useState(false);
// const onDelete = () => {

// }
const MomentThumbnail = (props) => {
  if (props.moment.symbol === 'star') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-star pink-btn" />
          {/* <i className="fas fa-trash" onClick={this.onDelete} /> */}
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'bridge') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-archway pink-btn" />
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'circle') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-spinner pink-btn" />
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          {/* <p className="card-sym" id="mom-sym">{props.moment.symbol}</p> */}
        </div>
      </div>
    );
  }
};

// lines 57-137adopted from https://material-ui.com/components/popover/
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const SimplePopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button type="button" className="inspo-btn" aria-describedby={id} variant="contained" onClick={handleClick}>
        Need Inspo?
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <div className="popper">
            <div className="inspo-header">
              <h2>Need Inspiration?</h2>
              <h4>Here are some prompts you may consider.<br /></h4>
            </div>
            <div className="inspo-content">
              <div className="inspo-text">
                <li>What was your first job?</li>
                <li>Who has been one of your greatest mentors in life?</li>
                <li>When was a time you felt defeated?</li>
                <li>Describe a moment you felt proud.</li>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
};

class MentorMomentsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    if (this.props.allMoments.length > 0) {
      this.props.fetchMoments();
    }
  }

  onDone = () => {
    // localStorage.setItem('momentsPath', this.props.allMoments);
    this.props.updateMentorMoments(this.props.match.params.userID, this.props.allMoments, this.props.history);
  };

  showMoments = (moments) => {
    if (moments) {
      return (moments.map((moment) => {
        // put this in a nav link
        // return (<Link id="tn-link" to={`posts/${post.id}`} key={post.id}> <MomentThumbnail id={post.id} key={post.id} post={post} /> </Link>);
        // return (<Link to={`posts/${post.id}`}> <Post id={post.id} key={post.id} post={post} /> </Link>);
        return <MomentThumbnail moment={moment} key={moment.title} />;
      }));
    }
    return (
      <div />
    );
  }

  render = () => {
    return (
      <div className="mentor-path">
        <div className="path-header">
          <h2>As you proceed, tell us about any pivotal moments in your life, the highs and the lows.</h2>
          <h4>click the add button on the right to add these moments</h4>
          <button className="lightgreen-btn" id="add-btn" type="button" onClick={() => this.setState({ show: true })}>Add Moment</button>
        </div>
        <div className="all-moments">
          {this.showMoments(this.props.allMoments)}
        </div>
        <MentorMomentsUpdateModal handleCancel={() => this.setState({ show: false })} handleAdd={() => this.setState({ show: false })} show={this.state.show} />
        {/* <MomentModal show={this.state.show} /> */}
        <img src={path} alt="path" />
        <div className="done-btn">
          <button className="yellow-btn" type="submit" onClick={this.onDone}>Done</button>
        </div>
        <div className="mbtn-container">
          <SimplePopover />
          <NavLink to="/signup/mentor" className="yellow-btn" type="submit" onClick={this.onDone}>Done</NavLink>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMoments: reduxstate.moments.allMoments,
});

export default withRouter(connect(mapStateToProps, { fetchMoments, updateMentorMoments })(MentorMomentsUpdate));
