import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchOrgInfo } from '../../actions/user-actions';
import { signoutUser } from '../../actions/onboarding-actions';
import eventForm from './eventForm';

import '../../profile-styles/org-profile.scss';

const ProfileOrg = (props) => {
  const org = useSelector((state) => state.user);
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
            <h1 className="title">Welcome! {org.user.orgname}</h1>
            {org.user.events ? <h3 className="sixteenpoint">{org.user.events.length} Events</h3> : null}

            {/* <button className="yellow-btn" type="button" onClick={() => { toggleEditing(false); }}> Edit Profile </button> */}
            <NavLink to={`/org/profile/${props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>

            <h3 className="boldtwentyfour">Person of contact name : </h3>

            <h3 className="sixteenpoint">{org.user.poc}</h3>
            <h3 className="sixteenpoint">{org.user.location}</h3>
            <h3 className="boldtwentyfour">Email:</h3>
            <h3 className="sixteenpoint"> {org.user.email} </h3>
            <button className="yellow-btn" type="button" onClick={onSubmit}>Sign Out </button>

          </div>
          <div className="eventsContainer">
            <NavLink className="yellow-btn" to={`/org/profile/${props.match.params.userID}/event`}>Create an Event</NavLink>
            <eventForm />
            <div className="EventsBlock">
              <h2>Upcoming Events </h2>
              <div className="underlineLight profileBar" />
              {/* {org.user.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : org.user.events.map((data, key) => {
                return (<eventCard org={org.user.orgname} event={data} />);
              })}
              <div /> */}
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
