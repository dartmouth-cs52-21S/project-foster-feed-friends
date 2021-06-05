/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { fetchMentor } from '../../actions/network-actions';
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
  //   const user = useSelector((state) => state.user);
  //   const history = useHistory();
  const dispatch = useDispatch();
  //   const [state, setState] = useState();

  console.log('plsss');

  useEffect(() => {
    console.log('plsss againnnn');
    dispatch(fetchMentor(props.match.params.userID));
  });

  //   const message = () => {
  //     console.log('I MADE IT');
  //     window.open(`mailto:${props.currentMentor.email}?subject=Reaching Out`);
  //     // action that adds mentor to youth mesaged
  //     updateYouthMessaged(props.user.id, [...props.user.messaged, props.match.params.userID], history);
  //   };

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
          <div className="profile-header">
            <h1 className="profile-title">{currentMentor.firstName} {currentMentor.lastName}</h1>
          </div>
          <p className="profile-type">{currentMentor.type}</p>
          {/* <h2>Personal Information</h2> */}
          <div className="profile-info">
            <div className="profile-section">
              <h3>Career Path:</h3>
              <p>{currentMentor.careerPath}</p>
            </div>
            <div className="profile-section">
              <h3>Email:</h3>
              <p>{currentMentor.email}</p>
            </div>
            <div className="profile-section">
              <h3>Location:</h3>
              <p>{currentMentor.location}</p>
            </div>
            <div className="profile-section">
              <h3>Bio:</h3>
              <p>{currentMentor.bio}</p>
            </div>
          </div>
          <button className="fas fa-comments pink-btn" type="button" alt="submit" />

          <h3 className="sixteenpoint"> Location: {currentMentor.location}</h3>
          {/* <h3 className="sixteenpoint"> Bio: {this.props.currentMentor.why}</h3>

              {/* <a type="button" onClick={this.message} href={`mailto:${this.props.currentMentor.email}`}>Email Me</a> */}
          {/* <button type="button" onClick={this.message}>Email Me</button> */}
        </div>
        <div className="path-container">
          <div className="mentorpath-name">
            <h3 id="path-name">{currentMentor.firstName}&apos;s Path</h3>
          </div>
          <div className="all-moments">
            {showMoments(currentMentor.momentsPath)}
          </div>
        </div>
      </div>
    </div>

  );
};

export default NetworkMentorProfile;
