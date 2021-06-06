import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
// import EventForm from './eventForm';
import EventCard from '../Events/EventCard';
import { fetchOrgInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import { fetchOrgEvents } from '../../actions/events-actions';
// import eventForm from './eventForm';
import '../../profile-styles/org-profile.scss';

const ProfileOrg = (props) => {
  const org = useSelector((state) => state.user);
  const { all } = useSelector((state) => state.events);
  console.log(all);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [editing, toggleEditing] = useState(false);
  const [editing] = useState(false);
  // const [orgAcountDetail, editOrgAccountDetail] = useState({
  //   poc: org.user.pocname,
  //   location: org.user.location,
  //   email: org.user.location,

  // });
  console.log(org);

  useEffect(() => {
    dispatch(fetchOrgInfo(props.match.params.userID));
    dispatch(fetchOrgEvents(props.match.params.userID));
  }, []);

  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   editOrgAccountDetail((prevValue) => {
  //     return { ...prevValue, [name]: value };
  //   });
  //   event.preventDefault();
  // };
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
              <h2>Upcoming Events </h2>
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
                    />
                  );
                }) }
              </div>
            </div>
            <div className="EventsBlock">
              <h2>Previous Events </h2>
              <div className="underlineLight profileBar" />
              {org.user.events ? <h3 className="sixteenpoint">No Past Events</h3> : null }
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <div className="profilePageContainer">
          <div className="leftBar">
            <h1 className="title">Welcome! {org.user.orgname}</h1>

            <button className="yellow-btn" type="button" onClick={() => { toggleEditing(true); }}> Edit Profile </button>

            <h3 className="boldtwentyfour">Person of contact name : </h3>

            {org.user.events ? <h3 className="sixteenpoint">{org.user.events.length}</h3> : null}
            <input type="text" value={org.user.pocname} onChange={handleChange} />
            <h3 className="sixteenpoint">{org.user.pocname}</h3>
            <input type="text" value={org.user.location} onChange={handleChange} />
            <h3 className="boldtwentyfour">Email:</h3>
            <input type="text" value={org.user.email} onChange={handleChange} />
            <button className="yellow-btn" type="button" onClick={onSubmit}>Sign Out </button>

          </div>
          <div className="eventsContainer">
            <NavLink className="yellow-btn" to={`/org/profile/event/${props.match.params.userID}`}>Create an Event</NavLink>
            <eventForm />
            <div className="EventsBlock">
              <h2>Upcoming Events </h2>
              <div className="underlineLight profileBar" />
              {org.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
              <div />
            </div>
            <div className="EventsBlock">
              <h2>Previous Events </h2>
              <div className="underlineLight profileBar" />
              {org.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
              <div />
            </div>
          </div>

        </div> */}
      </div>
    );
  }
};

export default ProfileOrg;

// class ProfileOrg extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     this.props.renderUserInfo(this.props.match.params.userID);
//     console.log(this.props.match.params.userID);
//   }

//   render() {
//     const result = JSON.stringify(this.props.org.pocname);
//     return (
//       <div>PocName:{result} </div>
//     );
//   }
// }
// const mapStateToProps = (reduxState) => {
//   return {
//     org: reduxState.org,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     renderUserInfo: (id) => {
//       dispatch(renderUserInfo(id));
//     },

//   };
// };
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileOrg));
