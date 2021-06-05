/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MomentModal from './Moment-Modal';
import { fetchMoments } from '../../actions/moments-action';
import '../../onboarding-styles/moment-card.scss';
import '../../onboarding-styles/mentor-path.scss';

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
      {/* <Button className="fas fa-info-circle" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button> */}
      <i id="popover-icon" className="fas fa-info-circle" aria-describedby={id} variant="contained" color="primary" onClick={handleClick} />
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
              <h4>Here are some prompts you may consider and symbols you may associate them with. <br /></h4>
            </div>
            <div className="inspo-content">
              <div className="popper-symbol">
                <i className="fas fa-star pink-btn" />
              </div>
              <div className="inspo-text">
                <h5>What was your first job?</h5>
                <h5>Who has been one of your greatest mentors in life?</h5>
                <h5>When was a time you felt defeated?</h5>
                <h5>Describe a moment you felt proud.</h5>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
};

class MentorPath extends Component {
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
    localStorage.setItem('momentsPath', this.props.allMoments);
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

  // render() {
  //   return (
  //     <div className="all-moments">
  //       {this.showMoments(this.props.allMoments)}
  //     </div>
  //   );
  // }

  render = () => {
    return (
      <div className="mentor-path">
        <div className="path-header">
          <h2>As you proceed, tell us about any pivotal moments in your life, the highs and the lows.</h2>
          <h4>click the add button below to add these moments</h4>
          <button className="lightgreen-btn" id="add-btn" type="button" onClick={() => this.setState({ show: true })}>Add Moment</button>
        </div>
        <div className="all-moments">
          {this.showMoments(this.props.allMoments)}
        </div>
        <MomentModal handleCancel={() => this.setState({ show: false })} handleAdd={() => this.setState({ show: false })} show={this.state.show} />
        {/* <MomentModal show={this.state.show} /> */}
        <div className="done-btn">
          <NavLink to="/signup/mentor" className="yellow-btn" type="submit" onClick={this.onDone}>Done</NavLink>
        </div>
        <div className="inspo-btn">
          <SimplePopover />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMoments: reduxstate.moments.allMoments,
});

export default withRouter(connect(mapStateToProps, { fetchMoments })(MentorPath));
