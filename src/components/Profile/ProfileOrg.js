import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import EventCard from '../Events/EventCard';
import { fetchOrgInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import { fetchOrgEvents } from '../../actions/events-actions';
import '../../profile-styles/org-profile.scss';

const ProfileOrg = (props) => {
  const org = useSelector((state) => state.user);
  const { all } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const history = useHistory();
  const [editing] = useState(false);

  useEffect(() => {
    dispatch(fetchOrgInfo(props.match.params.userID));
    dispatch(fetchOrgEvents(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  if (!editing) {
    return (
      <div>
        <div className="profilePageContainer">
          <div className="leftBar">
            <h1 className="title">Welcome, {org.user.orgname}!</h1>
            <div className="network-header">
              {org.user.events ? <h3 className="sixteenpoint">{org.user.events.length} Events</h3> : null}
              <NavLink to={`/org/profile/${props.match.params.userID}/edit`} className="editprofile-btn" type="button">Edit Profile</NavLink>
            </div>
            <div className="profile-info">
              <div className="profile-section">
                <h3>Location:</h3>
                <p>{org.user.location}</p>
              </div>
              <div className="profile-section">
                <h3>Person of Contact:</h3>
                <p>{org.user.pocname}</p>
              </div>
              <div className="profile-section">
                <h3>Email:</h3>
                <p>{org.user.email}</p>
              </div>
            </div>
            <div className="so-container">
              <button className="yellow-btn" type="button" onClick={onSubmit}>Sign Out </button>
            </div>
          </div>
          <div className="eventsContainer">
            <NavLink className="yellow-btn" to={`/org/profile/${props.match.params.userID}/event`}>Create an Event</NavLink>
            <div className="EventsBlock">
              <h2>All Events </h2>
              <div className="underlineLight profileBar" />
              <div className="eventsRow">
                {all.length === 0 ? <h3 className="sixteenpoint">No Upcoming Events</h3> : all.map((data, key) => {
                  return (
                    <EventCard
                      key={data._sid}
                      name={data.name}
                      date={data.date}
                      time={data.time}
                      location={data.location}
                      id={data._id}
                      coordinator={data.coordinator}
                      currentOrgID={org.user.id}
                    />
                  );
                }) }
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div />
    );
  }
};

export default ProfileOrg;
