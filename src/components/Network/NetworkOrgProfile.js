import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchOrgInfo } from '../../actions/user-actions';
// import eventForm from './eventForm';

const NetworkOrgProfile = (props) => {
  const org = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrgInfo(props.match.params.userID));
  }, []);

  return (

    <div>
      <div className="profilePageContainer">
        <div className="leftBar">
          <h1 className="title">Welcome! {org.user.orgname}</h1>
          {org.user.events ? <h3 className="sixteenpoint">{org.user.events.length} Events</h3> : null}

          <NavLink to={`/org/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>

          <h3 className="boldtwentyfour">Person of contact name : </h3>

          <h3 className="sixteenpoint">{org.user.poc}</h3>
          <h3 className="sixteenpoint">{org.user.location}</h3>
          <h3 className="boldtwentyfour">Email:</h3>
          <h3 className="sixteenpoint"> {org.user.email} </h3>
        </div>
        <div className="eventsContainer">
          <NavLink className="yellow-btn" to={`/org/profile/${props.match.params.userID}/event`}>Create an Event</NavLink>
          <eventForm />
          <div className="EventsBlock">
            <h2>Upcoming Events </h2>
            <div className="underlineLight profileBar" />
            {org.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : <eventCard />}
            <div />
          </div>
          <div className="EventsBlock">
            <h2>Previous Events </h2>
            <div className="underlineLight profileBar" />
            {org.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
            <div />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetworkOrgProfile;
