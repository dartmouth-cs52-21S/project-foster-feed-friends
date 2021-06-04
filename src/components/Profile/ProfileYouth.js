import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchYouthInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import { fetchYouthEvents } from '../../actions/events-actions';
import EventCardProfile from '../Events/EventCard';

const ProfileYouth = (props) => {
  const youth = useSelector((state) => state.user);
  const { all } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(youth);

  useEffect(() => {
    dispatch(fetchYouthInfo(props.match.params.userID));
    dispatch(fetchYouthEvents(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };
  console.log(youth);
  return (

    <div className="profilePageContainer">
      <div className="leftBar">
        <h1 className="title">Welcome! {youth ? youth.user.firstName : null } </h1>
        {/* <button type="button" className="yellow-btn">Edit Profile</button> */}
        <NavLink to={`/youth/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>

        {/* <h3 className="boldtwentyfour">Location :</h3> */}
        {/* <h3 className="sixteenpoint">{youth.events.length}</h3> */}
        {/* <h3 className="sixteenpoint">{youth.f}</h3> */}
        <h3 className="boldtwentyfour">path:</h3>
        <h3 className="sixteenpoint">{youth.user.path}</h3>
        <h3 className="boldtwentyfour">hometown:</h3>
        <h3 className="sixteenpoint">{youth ? youth.user.hometown : null }</h3>
        <h3 className="boldtwentyfour">Email:</h3>
        <h3 className="sixteenpoint"> {youth ? youth.user.email : null } </h3>
        {/* <h3 className="boldtwentyfour">Badges</h3> */}
        {/* <div className="badgeContainer">
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
        </div> */}
        <button type="button" className="yellow-btn" onClick={onSubmit}>Sign Out </button>
        <NavLink to={`/messages/${youth.user.id}`} exact>Inbox</NavLink>
      </div>
      <div className="eventsContainer">

        <div className="EventsBlock">
          <h2>Connections</h2>
          <div className="underlineLight profileBar" />
          {youth.user.messaged ? <h3 className="sixteenpoint">Connect with a Mentor!</h3> : null }
          <div />
        </div>
        <div className="EventsBlock">
          <h2>Events </h2>
          <div className="underlineLight profileBar" />
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
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProfileYouth;
