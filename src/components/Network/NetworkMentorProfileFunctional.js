import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMentor } from '../../actions/network-actions';

// const NetworkOrgProfile = (props) => {
//   const org = useSelector((state) => state.org);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOrg(props.match.params.userID)); // reseting user
//   }, []);

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

const NetworkMentorProfile = (props) => {
  const { currentMentor } = useSelector((state) => state.networkMentors);
  const dispatch = useDispatch();
  //   const [state, setState] = useState();

  console.log('plsss');

  useEffect(() => {
    console.log('plsss againnnn');
    dispatch(fetchMentor(props.match.params.userID));
  });

  const showMoments = (moments) => {
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

  return (
    <div>
      <div className="profilePageContainer">
        <div className="leftBar">
          <h1 className="title">Welcome! {props.currentMentor.firstName} </h1>
          <h3 className="boldtwentyfour">Personal Information: </h3>
          <h3 className="sixteenpoint">Career Path: {props.currentMentor.user.path}</h3>
          <h3 className="sixteenpoint"> Email: {props.currentMentor.user.email}</h3>
          <h3 className="sixteenpoint"> Location: {props.currentMentor.user.location}</h3>
          <h3 className="sixteenpoint"> Bio: {props.currentMentor.user.why}</h3>
        </div>
        <div className="path-container">
          <div className="mentor-name">
            <h3 className="sixteenpoint" id="path-name">{props.currentMentor.firstName}&apos;s Path</h3>
          </div>
          <div className="all-moments">
            {showMoments(currentMentor.momentsPath)}
          </div>
        </div>
      </div>
    </div>

  );
};

// class NetworkMentorProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   componentDidMount() {
//     console.log('I MADE IT');
//     this.props.fetchMentor(this.props.match.params.userID);
//   }

//   render = () => {
//     return (

//     );
//   }
// }
// function mapStateToProps(reduxState) {
//   return {
//     currentMentor: reduxState.networkMentors.currentMentor,

//   };
// }
export default NetworkMentorProfile;