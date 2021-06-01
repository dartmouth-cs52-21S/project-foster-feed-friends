import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMentorInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';

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
      <div className="leftBar">
        <h1 className="title">Welcome! {mentor.user.firstName} </h1>
        <NavLink to={`/mentor/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>
        <h3 className="boldtwentyfour">Personal Information: </h3>
        <h3 className="sixteenpoint">Carrer Path: {mentor.user.path}</h3>
        <h3 className="sixteenpoint"> Email: {mentor.user.email}</h3>
        <h3 className="sixteenpoint"> Location: {mentor.user.location}</h3>
        <h3 className="sixteenpoint"> Bio: {mentor.user.why}</h3>
        <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>
      </div>
      <div className="all-moments">
        {showMoments(mentor.user.momentsPath)}
      </div>
    </div>
  );
};
export default ProfileMentor;
