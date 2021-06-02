import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchMentor } from '../../actions/network-actions';
// import eventForm from './eventForm';

// const NetworkOrgProfile = (props) => {
//   const org = useSelector((state) => state.org);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOrg(props.match.params.userID)); // reseting user
//   }, []);

class NetworkMentorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchMentor(this.props.match.params.userID);
  }

  render = () => {
    return (
      <div>
        {console.log(this.props.match)};
        <div className="profilePageContainer">
          <div className="leftBar">
            <h1 className="title">Welcome! {this.props.currentOrg?.orgname}</h1>
            {this.props.currentOrg.events ? <h3 className="sixteenpoint">{this.props.currentOrg.events.length} Events</h3> : null}

            <NavLink to={`/org/profile/${this.props.match.params.userID}/edit`}> <button className="yellow-btn" type="button">Edit Profile</button> </NavLink>

            <h3 className="boldtwentyfour">Person of contact name : </h3>

            <h3 className="sixteenpoint">{this.props.currentOrg.poc}</h3>
            <h3 className="sixteenpoint">{this.props.currentOrg.location}</h3>
            <h3 className="boldtwentyfour">Email:</h3>
            <h3 className="sixteenpoint"> {this.props.currentOrg.email} </h3>
          </div>
          <div className="eventsContainer">
            <NavLink className="yellow-btn" to={`/org/profile/${this.props.match.params.userID}/event`}>Create an Event</NavLink>
            <eventForm />
            <div className="EventsBlock">
              <h2>Upcoming Events </h2>
              <div className="underlineLight profileBar" />
              {this.props.currentOrg.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : <eventCard />}
              <div />
            </div>
            <div className="EventsBlock">
              <h2>Previous Events </h2>
              <div className="underlineLight profileBar" />
              {this.props.currentOrg.events ? <h3 className="sixteenpoint">No Upcoming Events</h3> : null }
              <div />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    currentOrg: reduxState.network.currentOrg,
  };
}
export default withRouter(connect(mapStateToProps, { fetchMentor })(NetworkMentorProfile));
