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
import '../../profile-styles/org-profile.scss';

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

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  return (

    <div className="profilePageContainer">
      <div className="leftBar">
        <h1 className="title">Welcome! {youth ? youth.user.firstName : null } </h1>
        {/* <button type="button" className="yellow-btn">Edit Profile</button> */}
        <NavLink to={`/youth/${props.match.params.userID}/path`}> <button className="yellow-btn" type="button">Edit Path</button> </NavLink>

        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {/* <h3 className="sixteenpoint">{youth.events.length}</h3> */}
        {/* <h3 className="sixteenpoint">{youth.f}</h3> */}
        <h3 className="boldtwentyfour">path:</h3>
        <h3 className="sixteenpoint">{youth.user.path}</h3>
        <NavLink to={`/youth/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>

        <h3 className="boldtwentyfour">hometown:</h3>
        <h3 className="sixteenpoint">{youth ? youth.user.hometown : null }</h3>
        <h3 className="boldtwentyfour">Email:</h3>
        <h3 className="sixteenpoint"> {youth ? youth.user.email : null } </h3>
        <h3 className="boldtwentyfour">Badges</h3>
        <div className="badgesContainer">
          {youth.user.events
            ? (
              <div className="badgeRow">

                <div className="badge">
                  { youth.user.events.length >= 1
                    ? (
                      <div className="badgeCircleLit">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    )}
                  <h4 className="sixteenpoint"> 1 Event </h4>
                </div>

                <div className="badge">
                  { youth.user.events.length >= 10
                    ? (
                      <div className="badgeCircleLit">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    )}
                  <h4 className="sixteenpoint">10 Events </h4>
                </div>
                <div className="badge">
                  { youth.user.events.length >= 25
                    ? (
                      <div className="badgeCircleLit">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="  https://static.thenounproject.com/png/626764-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    )}
                  <h4 className="sixteenpoint">25 Events </h4>
                </div>
              </div>
            ) : null}
          {messaged
            ? (
              <div className="badgeRow">
                <div className="badge">
                  {messaged.length >= 1
                    ? (
                      <div className="badgeCircleLit">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    )}
                  <h4 className="sixteenpoint"> 1 Connection </h4>
                </div>
                <div className="badge">
                  {messaged.length >= 10
                    ? (
                      <div className="badgeCircleLit">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    )}
                  <h4 className="sixteenpoint">10 Connections </h4>
                </div>
                <div className="badge">
                  { messaged.length >= 25
                    ? (
                      <div className="badgeCircleLit">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
                      </div>
                    ) : (
                      <div className="badgeCircleOff">
                        <img src="https://static.thenounproject.com/png/2449013-200.png" alt="mentor badge icon" width="50px" />
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
          {messaged ? (
            <div className="connectionsRow">{messaged.length > 0 ? (
              <div className="connectionsRow">{ messaged.map((data, key) => {
                return (
                  <div className="card messagedCard">
                    <div className="card-body">
                      <img src="https://cdn.iconscout.com/icon/free/png-512/message-672-675248.png" alt="message icon" width="50px" />
                      <div className="card-title"> Messaged: {data.firstName} {data.lastName}</div>
                      <NavLink className="yellow-btn" to="">Follow Up</NavLink>
                    </div>
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
          <div className="connectionsRow">
            <div className="connectionsRow">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileYouth;
