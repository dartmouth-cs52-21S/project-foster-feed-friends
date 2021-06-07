import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchYouthInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import { fetchYouthEvents } from '../../actions/events-actions';
import { fectchMessagedMentor } from '../../actions/messaged-actions';
// import { fetchMentor } from '../../actions/network-actions';

import EventCardProfile from '../Events/EventCardProfile';

const ProfileYouth = (props) => {
  const youth = useSelector((state) => state.user);
  const { all } = useSelector((state) => state.events);
  const { messaged } = useSelector((state) => state.messagedMentor);
  // const { currentMentor } = useSelector((state) => state.networkMentors);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchYouthInfo(props.match.params.userID));
    dispatch(fetchYouthEvents(props.match.params.userID));
    dispatch(fectchMessagedMentor(props.match.params.userID));
    // dispatch(go through list, fetchMentor(), render information)
  }, []);

  console.log(youth.user.type);
  console.log(messaged);

  console.log('helloooo', youth);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };
  console.log(youth);
  return (

    <div className="profilePageContainer">
      <div className="leftBar">
        <h1 className="title">Welcome, {youth ? youth.user.firstName : null }!</h1>
        {/* <button type="button" className="yellow-btn">Edit Profile</button> */}
        <div className="youthbtn-container">
          <NavLink to={`/youth/${props.match.params.userID}/path`} className="editpath-btn">Edit Path</NavLink>
          <NavLink to={`/youth/profile/${props.match.params.userID}/edit`} className="editprofile-btn">Edit Profile</NavLink>
        </div>
        <div className="profile-info">
          <div className="profile-section">
            <h3 className="boldtwentyfour">Path:</h3>
            <p className="sixteenpoint">{youth.user.path}</p>
          </div>
          <div className="profile-section">
            <h3 className="boldtwentyfour">Hometown:</h3>
            <p className="sixteenpoint">{youth ? youth.user.hometown : null }</p>
          </div>
          <div className="profile-section">
            <h3 className="boldtwentyfour">Email:</h3>
            <p className="sixteenpoint"> {youth ? youth.user.email : null } </p>
          </div>
        </div>
        <h3 className="boldtwentyfour">Badges</h3>
        <div className="badgesContainer">
          {youth.user.events
            ? (
              <div className="badgeRow">
                {console.log('events', youth.user.events)}
                <div className="badge">
                  { youth.user.events.length >= 1
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 1</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 1</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint"> 1 Event </h4>
                </div>

                <div className="badge">
                  { youth.user.events.length >= 10
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 10</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 10</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint">10 Events </h4>
                </div>
                <div className="badge">
                  { youth.user.events.length >= 25
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 25</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 25</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint">25 Events </h4>
                </div>
              </div>
            ) : null}
          {youth.user.messaged
            ? (
              <div className="badgeRow">
                <div className="badge">
                  { youth.user.events.messaged >= 1
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 1</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 1</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint"> 1 Connection </h4>
                </div>
                <div className="badge">
                  { youth.user.events.length >= 10
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 10</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 10</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint">10 Connections </h4>
                </div>
                <div className="badge">
                  { youth.user.events.length >= 25
                    ? (
                      <div className="badgeCircleLit">
                        <div className="sixteenpoint"> 25</div>
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <div className="sixteenpoint"> 25</div>
                      </div>
                    )}
                  <h4 className="sixteenpoint">25 Connections </h4>
                </div>

              </div>
            ) : null}
        </div>
        <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>

      </div>
      <div className="eventsContainer">

        <div className="EventsBlock">
          <h2>Connections</h2>
          <div className="underlineLight profileBar" />
          {youth.user.messaged ? (
            <div>{youth.user.messaged.length > 0 ? (
              <div>{ youth.user.messaged.map((data, key) => {
                return (
                  <div className="card">
                    {/* {currentMentor.firstName} */}
                  </div>
                );
              })}
              </div>
            ) : <h3 className="sixteenpoint">Connect with a Mentor!</h3>}
            </div>
          ) : null}

        </div>
        <div className="EventsBlock">
          <h2>Events </h2>
          <div className="underlineLight profileBar" />
          <div className="eventsRow">
            {all.length === 0 ? <h3 className="sixteenpoint">Explore Events</h3> : all.map((data, key) => {
              return (
                <EventCardProfile
                  key={data._id}
                  name={data.name}
                  date={data.date}
                  time={data.time}
                  location={data.location}
                  id={data._id}
                  coordinator={data.coordinator}
                />
              );
            }) }
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProfileYouth;
