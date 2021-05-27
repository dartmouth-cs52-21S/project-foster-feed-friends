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
        <div className="update">
          <h3 className="boldtwentyfour">Person of contact name : </h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
            alt="edit button"
            width="25px"
          />
        </div>
        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {/* <h3 className="sixteenpoint">{mentor.events.length}</h3>
        <h3 className="sixteenpoint">{mentor.pocname}</h3>
        <h3 className="sixteenpoint">{mentor.location}</h3> */}
        <h3 className="boldtwentyfour">Email:</h3>
        {/* <h3 className="sixteenpoint"> {mentor.email} </h3> */}
        <button type="button" onClick={onSubmit}>Sign Out </button>

      </div>

    </div>
  );
};

export default ProfileMentor;
