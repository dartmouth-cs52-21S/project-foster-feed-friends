import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOrg } from '../../actions/network-actions';
import { fetchOrgEvents } from '../../actions/events-actions';

import EventCardYouth from '../Events/EventCardYouth';
import '../../platform-styles/network-mentor.scss';

// import eventForm from './eventForm';

// const NetworkOrgProfile = (props) => {
//   const org = useSelector((state) => state.org);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOrg(props.match.params.userID)); // reseting user
//   }, []);

class NetworkOrgProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchOrg(this.props.match.params.userID);
    this.props.fetchOrgEvents(this.props.match.params.userID);
  }

  handleEmailClick = () => {
    console.log('I MADE IT');
    window.open(`mailto:${this.props.currentOrg.email}?subject=Reaching Out`);
    // action that adds mentor to youth mesaged
    // this.props.updateYouthMessaged(this.props.user.id, [...this.props.user.messaged, this.props.match.params.userID], this.props.history);
  }

  render = () => {
    console.log('org id:', this.props.currentOrg.id);
    return (
      <div>
        <div className="profilePageContainer">
          <div className="leftBar">
            <div className="network-header">
              <h1 className="profile-title">{this.props.currentOrg?.orgname}</h1>
              <button className="email-btn" type="button" onClick={this.handleEmailClick}>Email Us</button>
            </div>
            {this.props.currentOrg.events ? <h3 className="sixteenpoint">{this.props.currentOrg.events.length} Events</h3> : null}
            <div className="profile-info">
              <div className="profile-section">
                <h3>Location:</h3>
                <p>{this.props.currentOrg.location}</p>
              </div>
              <div className="profile-section">
                <h3>Person of Contact Name:</h3>
                <p>{this.props.currentOrg.pocname}</p>
              </div>
              <div className="profile-section">
                <h3>Email:</h3>
                <p>{this.props.currentOrg.email}</p>
              </div>
            </div>
          </div>
          <div className="eventsContainer">

            <div className="EventsBlock">
              <h2>Upcoming Events </h2>
              <div className="underlineLight profileBar" />
              <div className="eventsRow">
                {this.props.all.length === 0 ? <h3 className="sixteenpoint">No Upcoming Events</h3> : this.props.all.map((data, key) => {
                  console.log('current event id:', data.id);
                  return (
                    <EventCardYouth
                    // eslint-disable-next-line react/no-array-index-key
                      key={data._id}
                      name={data.name}
                      date={data.date}
                      time={data.time}
                      location={data.location}
                      id={data._id}
                      coordinator={data.coordinator}
                      currentOrgID={this.props.currentOrg.id}
                    />
                  );
                }) }
              </div>
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
    all: reduxState.events.all,
  };
}
export default withRouter(connect(mapStateToProps, { fetchOrg, fetchOrgEvents })(NetworkOrgProfile));
