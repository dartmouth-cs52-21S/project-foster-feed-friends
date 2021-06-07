import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchMentorInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import '../../profile-styles/mentor-profile.scss';
import '../../onboarding-styles/moment-card.scss';
import '../../onboarding-styles/mentor-path.scss';

const MomentThumbnail = (props) => {
  if (props.moment.symbol === 'star') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-star sym-btn" />
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'bridge') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-archway sym-btn" />
        </div>
      </div>
    );
  } else if (props.moment.symbol === 'circle') {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
          <i className="fas fa-spinner sym-btn" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" id="mom-card">
        <div className="card-body">
          <h5 className="card-title" id="mom-title">{props.moment.title}</h5>
          <p className="card-desc" id="mom-desc">{props.moment.description}</p>
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

  const showMoments = (moments) => {
    if (moments) {
      return (moments.map((moment) => {
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
          <div className="profile-header">
            <h1 className="profile-title">Welcome, {mentor.user.firstName}! </h1>
            <NavLink to={`/mentor/profile/${props.match.params.userID}/edit`} className="editprofile-btn">Edit Profile</NavLink>
          </div>
          <div className="profile-info">
            <div className="profile-section">
              <h3>Career Path:</h3>
              <p>{mentor.user.careerPath}</p>
            </div>
            <div className="profile-section">
              <h3>Email:</h3>
              <p>{mentor.user.email}</p>
            </div>
            <div className="profile-section">
              <h3>Location:</h3>
              <p>{mentor.user.location}</p>
            </div>
            <div className="profile-section">
              <h3>Bio:</h3>
              <p>{mentor.user.bio}</p>
            </div>
          </div>
          <div className="so-container">
            <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>
          </div>
        </div>
        <div className="path-container">
          <div className="mentorpath-name">
            <h3 id="path-name">{mentor.user.firstName}&apos;s Path</h3>
            <NavLink to={`/mentor/${props.match.params.userID}/path`} className="newpath-btn">Create New Path</NavLink>
          </div>
          <div className="all-moments">
            {showMoments(mentor.user.momentsPath)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileMentor;
