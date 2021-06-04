import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMentorInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import '../../profile-styles/org-profile.scss';
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

const ProfileMentor = (props) => {
  const mentor = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMentorInfo(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };
  console.log('mentor in component', mentor);

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
          <h1 className="title">Welcome! {mentor.user.firstName} </h1>
          <NavLink to={`/mentor/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>
          <h3 className="boldtwentyfour">Personal Information: </h3>
          <h3 className="sixteenpoint">Career Path: {mentor.user.path}</h3>
          <h3 className="sixteenpoint"> Email: {mentor.user.email}</h3>
          <h3 className="sixteenpoint"> Location: {mentor.user.location}</h3>
          <h3 className="sixteenpoint"> Bio: {mentor.user.why}</h3>
          <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>
          <NavLink to={`/messages/${mentor.user.id}`} exact>Inbox</NavLink>

        </div>
        <div className="path-container">
          <div className="mentor-name">
            <h3 className="sixteenpoint" id="path-name">{mentor.user.firstName}&apos;s Path</h3>
          </div>
          <NavLink to={`mentor/${props.match.params.userID}/path/edit`}>New Path</NavLink>
          <div className="all-moments">
            {showMoments(mentor.user.momentsPath)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMentor;
