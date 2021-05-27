import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { renderYouthInfo, signoutUser } from '../../actions';

const ProfileYouth = (props) => {
  const youth = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(youth);

  useEffect(() => {
    dispatch(renderYouthInfo(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };
  console.log(youth);
  return (

    <div className="profilePageContainer">
      <div className="leftBar">
        <h1 className="title">Welcome! {youth ? youth.user.firstName : null } </h1>
        <button type="button" className="yellow-btn">Edit Profile</button>

        <h3 className="boldtwentyfour">Person of contact name : </h3>

        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {/* <h3 className="sixteenpoint">{youth.events.length}</h3> */}
        {/* <h3 className="sixteenpoint">{youth.f}</h3> */}
        <h3 className="sixteenpoint">{youth ? <h1>{youth.user.hometown}</h1> : null }</h3>
        <h3 className="boldtwentyfour">Email:</h3>
        <h3 className="sixteenpoint"> {youth ? <h1>{youth.user.email}</h1> : null } </h3>
        <h3 className="boldtwentyfour">Badges</h3>
        <div className="badgeContainer">
          <div className="badge">
            <div> Badge 1</div>
            <h4>One Connection </h4>
          </div>
          <div>
            <div> Badge 2</div>
            <h4>Ten Connection </h4>
          </div>
          <div>
            <div> Badge 3</div>
            <h4>twenty-five Connection </h4>
          </div>
        </div>
        <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>
      </div>
      <div className="eventsContainer">

        <div className="EventsBlock">
          <h2>Upcoming Events </h2>
          <div className="underlineLight profileBar" />
          {youth.user.connections ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
          <div />
        </div>
        <div className="EventsBlock">
          <h2>Previous Events </h2>
          <div className="underlineLight profileBar" />
          {youth.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProfileYouth;
