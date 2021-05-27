import React, { useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { renderOrgInfo, signoutUser } from '../../actions';
import eventForm from './eventForm';

const ProfileOrg = (props) => {
  const org = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(org);

  useEffect(() => {
    dispatch(renderOrgInfo(props.match.params.userID));
  }, []);
  const onSubmit = () => {
    dispatch(signoutUser(history));
  };

  return (
    <div>
      <div className="profilePageContainer">
        <div className="leftBar">
          <h1 className="title">Welcome! {org.user.orgname}</h1>

          <button className="yellow-btn" type="button"> Edit Profile </button>

          <h3 className="boldtwentyfour">Person of contact name : </h3>

          {org.events ? <h3 className="sixteenpoint">{org.user.events.length}</h3> : null}
          <h3 className="sixteenpoint">{org.user.pocname}</h3>
          <h3 className="sixteenpoint">{org.user.location}</h3>
          <h3 className="boldtwentyfour">Email:</h3>
          <h3 className="sixteenpoint"> {org.user.email} </h3>
          <button className="yellow-btn" type="button" onClick={onSubmit}>Sign Out </button>

        </div>
        <div className="eventsContainer">
          <NavLink className="yellow-btn" to="/org/profile/event/:userID"> Create an Event </NavLink>
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

      </div>
    </div>
  );
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
