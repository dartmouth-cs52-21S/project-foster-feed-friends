import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MomentModal from './Moment-Modal';
import { fetchMoments } from '../../actions/moments-action';
import '../../moment-card.scss';

// const [show, setShow] = useState(false);
const MomentThumbnail = (props) => {
  if (props.moment.symbol === 'star') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-tags" id="mom-tags">{props.moment.description}</p>
          <p className="card-tags" id="mom-tags">{props.moment.symbol}</p>
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'bridge') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-tags" id="mom-tags">{props.moment.description}</p>
          <p className="card-tags" id="mom-tags">{props.moment.symbol}</p>
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'circle') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-tags" id="mom-tags">{props.moment.description}</p>
          <p className="card-tags" id="mom-tags">{props.moment.symbol}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-tags" id="mom-tags">{props.moment.description}</p>
          <p className="card-tags" id="mom-tags">{props.moment.symbol}</p>
        </div>
      </div>
    );
  }
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

  // onAdd = (title, description) => {
  //   this.setState({
  //     show: false,
  //     title: this.props.post.title,
  //     description: this.props.description,
  //   });
  // };

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
          <h4>click the add button on the right to add these moments</h4>
          <button className="green-btn" id="add-btn" type="button" onClick={() => this.setState({ show: true })}>Add Moment</button>
        </div>
        <div className="all-moments">
          {this.showMoments(this.props.allMoments)}
        </div>
        <MomentModal handleCancel={() => this.setState({ show: false })} handleAdd={() => this.setState({ show: false })} show={this.state.show} />
        {/* <MomentModal show={this.state.show} /> */}
        <div className="done-btn">
          <button className="yellow-btn" type="submit">Done</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allMoments: reduxstate.moments.allMoments,
});

export default withRouter(connect(mapStateToProps, { fetchMoments })(MentorPath));
