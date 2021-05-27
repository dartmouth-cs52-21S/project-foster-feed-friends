import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { renderMentorInfo, signoutUser } from '../../actions';

const ProfileMentor = (props) => {
  const mentor = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(renderMentorInfo(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };
  console.log('mentor in component', mentor);
  return (

    <div>
      <div className="leftBar">
        <h1 className="title">Welcome! {mentor.user.firstName} </h1>
        <button className="yellow-btn" type="button">Edit Profile</button>

        <h3 className="boldtwentyfour">Personal Information: </h3>
        <h3 className="sixteenpoint">Carrer Path: {mentor.user.path}</h3>
        <h3 className="sixteenpoint"> Email: {mentor.user.email}</h3>
        <h3 className="sixteenpoint"> Location: {mentor.user.location}</h3>
        <h3 className="sixteenpoint"> Bio: {mentor.user.why}</h3>

        <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>

      </div>

    </div>
  );
};

export default ProfileMentor;
