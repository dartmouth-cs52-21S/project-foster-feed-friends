/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { fetchMentor } from '../../actions/network-actions';
import '../../onboarding-styles/moment-modal.scss';

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

class MentorProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true,
    };
  }

  componentDidMount() {
    console.log('I MADE IT');
    this.props.fetchMentor(this.props.match.params.userID);
  }

    onAdd = (event) => {
      this.props.createMoment(this.state);
      this.props.handleAdd();
      this.setState({
        // show: false,
        title: '',
        description: '',
        symbol: '',
      });
    }

    onCancel = (event) => {
      this.setState({
        // show: false,
        title: '',
        description: '',
        symbol: '',
      });
      this.props.handleCancel();
    }

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
    };

    render = () => {
      if (!this.props.show) {
        return null;
      } else {
        return (
          <div>
            <div className="profilePageContainer">
              <div className="leftBar">
                <h1 className="title">Welcome! {this.props.currentMentor.firstName} </h1>
                <h3 className="boldtwentyfour">Personal Information: </h3>
                <h3 className="sixteenpoint">Career Path: {this.props.currentMentor.path}</h3>
                <h3 className="sixteenpoint"> Email: {this.props.currentMentor.email}</h3>
                <h3 className="sixteenpoint"> Location: {this.props.currentMentor.location}</h3>
                <h3 className="sixteenpoint"> Bio: {this.props.currentMentor.why}</h3>
              </div>
              <div className="path-container">
                <div className="mentor-name">
                  <h3 className="sixteenpoint" id="path-name">{this.props.currentMentor.firstName}&apos;s Path</h3>
                </div>
                <div className="all-moments">
                  {this.showMoments(this.props.currentMentor.momentsPath)}
                </div>
              </div>
            </div>
          </div>

        );
      }
    }
}

const mapStateToProps = (reduxstate) => ({
  currentMentor: reduxstate.networkMentors.currentMentor,
  // error: reduxstate.error.error,
});

export default connect(mapStateToProps, { fetchMentor })(MentorProfileModal);
