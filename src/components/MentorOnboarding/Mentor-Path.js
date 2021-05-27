import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MomentModal from './Moment-Modal';
import { fetchPosts } from '../../actions';

// const [show, setShow] = useState(false);
const MomentThumbnail = (props) => {
  return (
    <div className="card" id="tn-card">
      <div className="card-body">
        <h5 className="card-title" id="tn-title">{props.post.title}</h5>
        <p className="card-tags" id="tn-tags">{props.post.description}</p>
      </div>
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
    this.props.fetchPosts();
  }

  //   onAdd = (event) => {
  //   }

  showPosts = (posts) => {
    if (posts) {
      return (posts.map((post) => {
        // put this in a nav link
        return (<Link id="tn-link" to={`posts/${post.id}`} key={post.id}> <MomentThumbnail id={post.id} key={post.id} post={post} /> </Link>);
        // return (<Link to={`posts/${post.id}`}> <Post id={post.id} key={post.id} post={post} /> </Link>);
      }));
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div className="all-posts">
        {this.showPosts(this.props.allPosts)}
      </div>
    );
  }

  render = () => {
    return (
      <div className="mentor-path">
        <div className="path-header">
          <h2>As you proceed, tell us about any pivotal moments in your life, the highs and the lows.</h2>
          <h4>click the add button on the right to add these moments</h4>
          <button className="green-btn" id="add-btn" type="button" onClick={() => this.setState({ show: true })}>Add Moment</button>
        </div>
        <div className="all-posts">
          {this.showPosts(this.props.allPosts)}
        </div>
        <MomentModal onCancel={() => this.setState({ show: false })} onAdd={() => this.setState({ show: false })} show={this.state.show} />
        {/* <MomentModal show={this.state.show} /> */}
        <div className="done-btn">
          <button className="yellow-btn" type="submit">Done</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allPosts: reduxstate.posts.allPosts,
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(MentorPath));
